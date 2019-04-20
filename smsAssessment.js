var SMSquestionBase = null;
var assessmentQuestion = null;
var assessmentQuestionCursor = null;
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
        //begin ...	
        
        //check if this contact is eligible to partake SMS Assessment program
        //ie if you in the group 
        if (!canTakeQuiz()){
        	sendReply("Sorry, You are not eligible to take this quiz");
        	return true;
        }

        //get first question
        SMSquestionBase = require('./smsAssessmentQuestion_datatable');

        assessmentQuestionCursor = SMSquestionBase.getQuestionCursor(1, contact.vars.assessment_batch);

        if (assessmentQuestionCursor == false){
        	console.log("error assessment could not be started");
        	sendReply("Assessment could not be started");
        	return true
        }

        if (typeof assessmentQuestionCursor === 'undefined'){
        	console.log("error:cursor is undefined?");
        	return true;
        }

        //continue from where you left off if there was an error with the assessment ...
        if (typeof contact.vars.sms_assessment_progress_state === 'undefined'){
        	state.vars.progressState = 0;
        	contact.vars.sms_assessment_progress_state = 0;
        }else{
        	state.vars.progressState = contact.vars.sms_assessment_progress_state;
        }
        

        if (typeof contact.vars.in_person_assessment === 'undefined'){
        	contact.vars.in_person_assessment = 0;//this is the score of the contact	
        }else{
        	contact.vars.in_person_assessment = 0;
        }

        var newQuestion = getNextQuestion(assessmentQuestionCursor);
        sendReply("Monthly Assessment\n");
        sendQuestion(newQuestion);
		suspendAndWaitForResponse();

        return true;

	}else{
	    return true;//basically returning true the end the SMS interaction with the mobile user unless there's another service awaiting to run
	}
}


//#question1
addResponseHandler('question', function() {
	SMSquestionBase = require('./smsAssessmentQuestion_datatable');
	
	questionNumber = state.vars.progressState; //get current state to correct score question
	contact.vars.sms_assessment_progress_state = state.vars.progressState; //persistent copy of the progress state

	assessmentQuestionCursor = SMSquestionBase.getQuestionCursor(questionNumber, contact.vars.assessment_batch);
	var assessmentQuestion = assessmentQuestionCursor.next();

	if (typeof assessmentQuestion === 'undefined') {
		//an error occured ... reply with 4 to continue the assessment ...
		sendReply("Hi "+contact.name+" An error occured. Reply with 4 to continue assessment");
		console.log("Couldn't get question to score ...");

	}

	if (checkAnswer(assessmentQuestion)){

		scoreContact()
	}

	var WebRequests = require('./handleWebRequests');

	var dataParams = {
						'question_number': questionNumber, 
						'response': content,
						'leaner_telerivet_id': contact.id,
						'batch_number': contact.vars.assessment_batch
					};

	WebRequests.handleWebRequest(dataParams);
	
	//get Next Question
	var newQuestion = getNextQuestion(assessmentQuestionCursor);

	if (!newQuestion){
		return endInteraction();
	}

	sendQuestion(newQuestion);
	suspendAndWaitForResponse();
});


function canTakeQuiz(){
	/// CG618faf9bc2359cd9 - the old id
	//if contact is not in the assessment group return false ... CGfcc03398aa3da2c9 - new id
	var assessmentGroup = project.getGroupById('CGfcc03398aa3da2c9');
	if (!contact.isInGroup(assessmentGroup)){
		return false
	}
	return true;
}

function checkAnswer(questionTable){
	//check if the answer is the same as the content ...

	if (content == questionTable.vars.answer){
		sendReply("Correct! You have earned $ 15 LD to be redeemed for cash.");
		return true;
	}else{
		sendReply("Incorrect! The answer is "+questionTable.vars.answer);
		return false;
	}
}

function scoreContact(){
	if (typeof contact.vars.in_person_assessment === 'undefined'){
		contact.vars.in_person_assessment = 1;
	}else{
		contact.vars.in_person_assessment = parseInt(contact.vars.in_person_assessment) + 1;
	}
}

function getNextQuestion(questionCursor){

	if (questionCursor.hasNext() || (questionCursor.count() > 0)){
		
		state.vars.progressState++;
		return questionCursor.next();	
		
	}else{
		return false;
	}
	
}

function sendQuestion(question){
	var newQuestion = "\n#"+question.vars.question_number +". "+ question.vars.question_text +
		"\n1. " + question.vars.choice_1 +
		"\n2. " + question.vars.choice_2 +
		"\n3. " + question.vars.choice_3;

	sendReply(newQuestion);
}

function suspendAndWaitForResponse(){
	waitForResponse('question', {
	    timeoutMinutes: 15,
	    timeoutId: 'timeout'
	});
}

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
	contact.removeFromGroup(assessmentGroup);
	console.log("contact removed from group and batch number cleared")
	contact.save();
}

addTimeoutHandler('timeout', function() {
	sendReply("Your assessment has been timed out becaues you took too long. Continue by sending 4");
});


//TODO::
/*
What if Learning Links Person mistakenly assigns the wrong question to the tutor group

==validate and check if learners assigned are actually doing [module] & [level]

*/