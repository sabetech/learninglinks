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

	//check if the person is supposed to continue or start afresh!!!
	//if current assessment batch is the same as the incompleted assessment quiz
	if (typeof contact.vars.progress_state_json !== "undefined"){
        
        try{
            //this is where there's something incomplete
            var progress = JSON.parse(contact.vars.progress_state_json);    
            
            //this means that the person wants to continue the assessment
            if (contact.vars.assessment_batch == progress.assessment_batch) {
            	state.vars.progressState = progress.question_number
            }
        }catch(e){
            console.log("bad input");
            contact.vars.progress_state_json = "";
            state.vars.progressState = 0;
        }
        
     }else{
     	state.vars.progressState = 0;
     	contact.vars.sms_assessment_progress_state = 0;
     }

	contact.vars.in_person_assessment = (state.vars.progressState == 0) ? 0 : contact.vars.in_person_assessment; //default score if 

	//get question from remote server not datatable ...
	var WebRequests = require('./handleWebRequests');
	var question = getQuestionFromRemoteServer(state.vars.progressState);
	
	//console.log("This is the code " + question.code);

	sendReply("Monthly Assessment\n");
	sendQuestion(question, state.vars.progressState + 1);
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

	return contact.vars.last_numeracy_question;

}

function getLastNumeracyDate(){

	return contact.vars.date_last_numeracy_answered;

}

function getQuestionFromRemoteServer($question_number){
	var WebRequests = require('./handleWebRequests');

	var dataParams = {	
						'question_number': $question_number,
						'contact_id': contact.id
					 };

	var question = WebRequests.handleWebRequest(dataParams, GET_QUESTION_ACTION);
	
	//console.log(question.content);

	return JSON.parse(question.content);

}

function sendQuestion(question, question_number){

	contact.vars.current_question_code = question.code;

	var newQuestion = "\n#" + question_number + ". " + question.learner_question +
					  "\n1. "+question.option_one +
					  "\n2. "+question.option_two +
					  "\n3. "+question.option_three;

	sendReply(newQuestion);
	
}

function checkAnswer(question_number, learnerInput){

	var question = getQuestionFromRemoteServer(question_number);
	if (learnerInput == question.answer){
		sendReply("Correct! You have earned $ 15 LD to be redeemed for cash.");
		return true;
	}
	sendReply("Incorrect! The answer is "+question.answer);
	return false;
}

function scoreContact() {
	if (typeof contact.vars.in_person_assessment === 'undefined'){
		contact.vars.in_person_assessment = 1;
	}else{
		contact.vars.in_person_assessment = parseInt(contact.vars.in_person_assessment) + 1;
	}
}

function postResponseToServer(previous_question_number, learnerInput) {
	var WebRequests = require('./handleWebRequests');

	var dataParams = {
						'question_number': previous_question_number, 
						'response': learnerInput,
						'learner_telerivet_id': contact.id,
						'batch_number': contact.vars.assessment_batch
					};

	WebRequests.handleWebRequest(dataParams, POST_RESPONSE_ACTION);

}

function getNumeracyStartingCode(){

	var numeracyQuestionCode = getLastNumeracyQuestionCode();

	if (!numeracyQuestionCode) return false;
		return numeracyQuestionCode;


}

addResponseHandler('sms_assessment_question', function() {
	//find the question that was answered and check for correctness!
	var previousQuestionNumber = parseInt(contact.vars.sms_assessment_progress_state);
	var learnerInput = content;

	if (checkAnswer(previousQuestionNumber, learnerInput)) {
		scoreContact();
	}

	postResponseToServer(previousQuestionNumber, learnerInput);
	state.vars.progressState++;
	contact.vars.sms_assessment_progress_state = state.vars.progressState;
	
	console.log("question number "+ state.vars.progressState);




	// var nextPotentialQuestionCode = previous_question_code;
	// if (state.vars.progressState == 5) {
	// 	//try switching to numeracy ...
	// 	var numeracyStartingCode = getNumeracyStartingCode();

	// 	if (!numeracyQuestionCode){
	// 		nextPotentialQuestionCode = previous_question_code;//continue generating literacy codes
	// 	}else{
	// 		nextPotentialQuestionCode = numeracyQuestionCode;
	// 	}
	// } 

	if (state.vars.progressState == 10) {

		endInteraction();
		return true;
	}

	//get next question ... by subtracting 1
	var question = getQuestionFromRemoteServer(state.vars.progressState);

	sendQuestion(question, state.vars.progressState + 1);
	suspendAndWaitForResponse();

});

function endInteraction(){
	var msgContent = "End of Monthly Assessment\nYou scored "+contact.vars.in_person_assessment +"/10 and earned $ "+ (parseInt(contact.vars.in_person_assessment) * 15).toFixed(2)+" LD to be redeemed for cash.";
	var scheduled_msg = project.scheduleMessage({
		    content: msgContent,
		    to_number: contact.phone_number, 
		    start_time_offset: 60
		});

	resetContact();

	return true;
}

function resetContact(){
	contact.vars.assessment_batch = "";
	var assessmentGroup = project.getGroupById('CGfcc03398aa3da2c9');
	contact.vars.sms_assessment_progress_state = 0;
	contact.vars.in_person_assessment = 0;
	contact.vars.assessment_batch = "";
	contact.vars.progress_state_json = "";
	contact.removeFromGroup(assessmentGroup);
	console.log("contact removed from group and batch number cleared")
	contact.save();
}

function suspendAndWaitForResponse(){
	waitForResponse('sms_assessment_question', {
	    timeoutMinutes: 60,
	    timeoutId: 'timeout'
	});
}

addTimeoutHandler('timeout', function() {
	sendReply("Your assessment has been timed out becaues you took too long. Continue by sending 4");
});