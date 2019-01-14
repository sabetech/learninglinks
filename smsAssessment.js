var SMSquestionBase = null;
var assessmentQuestion = null;
var assessmentQuestionCursor = null;
global.main = function() {
    
	console.log("Welcome to the SMS Assessment Program");

     var keyword = word1;
     
     //When the keyword is START ... then proceed here ....
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
	if (keyword === "100"){
        //begin ...	
        
        //check if this contact is eligible to partake SMS Assessment program
        //ie if you in the group 
        if (!canTakeQuiz()){
        	sendReply("Sorry, You are not eligible to take this quiz");
        	return true;
        }

        //get first question
        SMSquestionBase = require('./smsAssessmentQuestion_datatable');

        assessmentQuestionCursor = SMSquestionBase.getQuestionCursor(1, contact.vars.batch_number);
     
        if (assessmentQuestionCursor == false){
        	console.log("error assessment could not be started");
        	sendReply("Assessment could not be started");
        	return true
        }

        if (typeof assessmentQuestionCursor === 'undefined'){
        	console.log("error:cursor is undefined?");
        	return true;
        }

        var newQuestion = getNextQuestion(assessmentQuestionCursor);
        sendQuestion(newQuestion);
		suspendAndWaitForResponse(assessmentQuestion);

        return true;

	}else{
	    return true;//basically returning true the end the SMS interaction with the mobile user unless there's another service awaiting to run
	}
	
}

//return object or false
function getSMSQuestionCursor(batch_number){

	return SMSquestionBase.getQuestionBatch(batch_number);

}



//#question1
addResponseHandler('question1', function() {
	SMSquestionBase = require('./smsAssessmentQuestion_datatable');
	questionNumber = state.vars.progressState; //get current state to correct score question

	assessmentQuestionCursor = SMSquestionBase.getQuestionCursor(questionNumber, contact.vars.batch_number);
	var assessmentQuestion = assessmentQuestionCursor.next();

	if (checkAnswer(assessmentQuestion)){
		scoreContact()
	}

	//get Next Question
	var newQuestion = getNextQuestion(assessmentQuestionCursor);
	
	sendQuestion(newQuestion);
	
	suspendAndWaitForResponse(assessmentQuestion);
});

addResponseHandler('question2', function() {
	SMSquestionBase = require('./smsAssessmentQuestion_datatable');
	questionNumber = state.vars.progressState; //get current state to correct score question

	assessmentQuestionCursor = SMSquestionBase.getQuestionCursor(questionNumber, contact.vars.batch_number);
	var assessmentQuestion = assessmentQuestionCursor.next();

	if (checkAnswer(assessmentQuestion)){
		scoreContact()
	}

	//get Next Question
	var newQuestion = getNextQuestion(assessmentQuestionCursor);
	
	sendQuestion(newQuestion);
	
	suspendAndWaitForResponse(assessmentQuestion);
});


//responsehandler #end
addResponseHandler('question3', function() {
	
	if (checkAnswer(assessmentQuestion)){
		scoreContact()
	}
	
	sendReply("The END! You scored "+contact.vars.in_person_assessment +"/10");
	
	
});

function canTakeQuiz(){
	return true;
}

function checkAnswer(questionTable){
	//check if the answer is the same as the content ...

	if (content == questionTable.answer){
		sendReply("Correct, you earned 5 cents");
		return true;
	}else{
		sendReply("Incorrect!, The answer is "+questionTable.answer);
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
	
	var assessmentQuestion = questionCursor.next();
	state.vars.progressState = assessmentQuestion.vars.question_number++;

	return assessmentQuestion;
	
}

function sendQuestion(question){
	var newQuestion = question.vars.question_number+"# "+ question.vars.question_text +
		"\n1. " + question.vars.choice_1 +
		"\n2. " + question.vars.choice_2 +
		"\n3. " + question.vars.choice_3;

	sendReply(newQuestion);
}

function suspendAndWaitForResponse(question){
	//access responseHandler #3
	waitForResponse('question'+question.vars.question_number, {
	    timeoutMinutes: 1,
	    timeoutId: 'timeout'
	});
}






addTimeoutHandler('timeout', function() {
	sendReply("Your assessment has been cancelled. To start again ..?");
});


//TODO::
/*
What if Learning Links Person mistakenly assigns the wrong question to the tutor group

==validate and check if learners assigned are actually doing [module] & [level]

*/