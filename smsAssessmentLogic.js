var last_day_interacted_with_threshold = 60;
const GET_QUESTION_ACTION = 2;
const POST_RESPONSE_ACTION = 1;

global.main = function() {

	var keyword = word1;
     
     //When the keyword is 4 ... then proceed here ....
     if (keyword === ""){
		console.log("is keyword empty?");
		sendReply("No keyword Sent");
		message.delete();
		return true;
	}
	if (keyword === null){
		console.log("is keyword null?");
		sendReply("No keyword Sent");
		message.delete();
		return true;
	}
	if (typeof keyword === 'undefined' ){
		console.log("are you undefined?");
		message.delete();
		return true;
	}
	
	keyword = keyword.trim();
	
	//start interaction here ...
	if (keyword === "4"){
		//check if this contact is eligible to partake SMS Assessment program
        //ie if you in the group 

        if (false){ //!canTakeQuiz()
        	sendReply("Sorry, You are not eligible to take this quiz");
        	return true;
        }
	}

	if (typeof contact.vars.in_person_assessment === 'undefined'){
		contact.vars.in_person_assessment = 0; //reset the scores of the people
	}
 
	var startingQuestionCode = getStartingQuestionCode();

	if (!startingQuestionCode) {
		sendReply('You are not allowed to take this assessment');
		return true;
	}

	//how about when the learners are being setup for the first time, I assign their progess state to 0 ...
	//if sms_assessment_progress_state != 0 then check if this learner just interacted with this service

	state.vars.progressState = contact.vars.sms_assessment_progress_state; //should be 0 most of the time ... if it is not 0, then it means a learner is trying to continue an assessment they couldn't finish!

	contact.vars.in_person_assessment = (state.vars.progressState == 0) ? 0 : contact.vars.in_person_assessment; //default score if 

	//get starting code and after the 1st 5 questions, try switching to the other module if possible
	//and if you get to question 5, try switch

	//get question from remote server not datatable ...
	var WebRequests = require('./handleWebRequests');
	var question = getQuestionFromRemoteServer(1007); //startingQuestionCode;
	
	console.log("This is the code " + question.code);

	sendReply("Monthly Assessment\n");
	sendQuestion(question);
	suspendAndWaitForResponse();

	return true;

}

function canTakeQuiz() {
	//if contact is not in the assessment group return false ... 
	var assessmentGroup = project.getGroupById('CGfcc03398aa3da2c9');
	if (!contact.isInGroup(assessmentGroup)){
		return false
	}
	return true;
}

function getStartingQuestionCode(){

	//try to get for literacy for this learner first ...
	//ie if the learner has interacted with the literacy question in the past 60 days ...

	var literacyQuestionCode = getLastLiteracyQuestionCode();

	if (!literacyQuestionCode){ //more than 60 days of no interaction
		//then move to numeracy
		var numeracyQuestionCode = getLastNumeracyQuestionCode();

		if (!numeracyQuestionCode) return false;
			return numeracyQuestionCode
	}
	return literacyQuestionCode;

}


//getLastLiteracyQuestionCode in the last 60 days
function getLastLiteracyQuestionCode(){

	lastLiteracyDate = getLastLiteracyDate();
	
	var lastDate = contact.vars.date_last_literacy_answered;
	if (typeof lastDate === 'undefined') return false;

	var datediff = moment().diff(moment(lastDate), 'days');

	if (datediff > last_day_interacted_with_threshold) return false;

	return contact.vars.last_literacy_question;
}

function getLastLiteracyDate() {

	return contact.vars.date_last_literacy_answered;

}

function getLastNumeracyQuestionCode(){

	lastNumeracyDate = getLastNumeracyDate();
	
	var lastDate = contact.vars.date_last_numeracy_answered;
	if (typeof lastDate === 'undefined') return false;

	var datediff = moment().diff(moment(lastDate), 'days');
	
	if (datediff > 60) return false;

	return contact.vars.last_literacy_question;

}

function getLastNumeracyDate(){

	return contact.vars.date_last_numeracy_answered;

}

function getQuestionFromRemoteServer(quesiton_code){

	//we need their assessment_id

	var dataParams = {
						'question_code': 1007,//startingQuestionCode, For Testing
						'contact_id': contact.id
					 };

	//when you are getting a question, record that you sent a quesion to x learner!
	var question = WebRequests.handleWebRequest(dataParams, GET_QUESTION_ACTION);
	return JSON.parse(question.content);

}

function sendQuestion(question, question_number){

	contact.vars.current_question_code = question.code;

	var newQuestion = "\n#" + question_number + ". " + question.learner_question +
					  "\n1. "+question.option_one +
					  "\n2. "+question.option_two +;
					  "\n3. "+question.option_three;

	sendReply(newQuestion);
	
}

function checkAnswer(question_code, learnerInput){

	var question = getQuestionFromRemoteServer(question_code);
	if (learnerInput == question.answer){
		return true;
	}
	return false;
}

function scoreContact() {
	if (typeof contact.vars.in_person_assessment === 'undefined'){
		contact.vars.in_person_assessment = 1;
	}else{
		contact.vars.in_person_assessment = parseInt(contact.vars.in_person_assessment) + 1;
	}
}

function postResponseToServer(previous_question_code, learnerInput) {
	var WebRequests = require('./handleWebRequests');

	var dataParams = {
						'question_code': previous_question_code, 
						'response': learnerInput,
						'leaner_telerivet_id': contact.id,
						'batch_number': contact.vars.assessment_batch
					};

	WebRequests.handleWebRequest(dataParams, POST_RESPONSE_ACTION);

}

function getNumeracyStartingCode(){

	var numeracyQuestionCode = getLastNumeracyQuestionCode();

	if (!numeracyQuestionCode) return false;
		return numeracyQuestionCode;


}

addResponseHandler('assessment_question', function() {
	//find the question that was answered and check for correctness!
	var previous_question_code = parseInt(contact.vars.current_question_code);
	var learnerInput = content;

	if (checkAnswer(previous_question_code, learnerInput)) {
		scoreContact();
	}

	postResponseToServer(previous_question_code, learnerInput);

	var nextPotentialQuestionCode = previous_question_code;
	if (state.vars.progressState == 5) {
		//try switching to numeracy ...
		var numeracyStartingCode = getNumeracyStartingCode();

		if (!numeracyQuestionCode){
			nextPotentialQuestionCode = previous_question_code;//continue generating literacy codes
		}else{
			nextPotentialQuestionCode = numeracyQuestionCode;
		}
	} 

	//get next question ... by subtracting 1
	var question = getQuestionFromRemoteServer(nextPotentialQuestionCode);

	sendQuestion(question);
	suspendAndWaitForResponse();

	//now on the server side, we check if that question can be retrieved, 
	//if not, it gets the next closet and returns the question
	//send the question and record that you sent the question to the learner and save the question code sent!!


	


});

function suspendAndWaitForResponse(){
	waitForResponse('assessment_question', {
	    timeoutMinutes: 15,
	    timeoutId: 'timeout'
	});
}