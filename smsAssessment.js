var SMSquestionBase = null;
var assessmentQuestion = null;
var assessmentQuestionCursor = null;
global.main = function() {

     var keyword = word1;
     
     //When the keyword is 100 ... then proceed here ....
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

        state.vars.progressState = 0;
        contact.vars.in_person_assessment = 0;//this is the score of the contact

        var newQuestion = getNextQuestion(assessmentQuestionCursor);
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

	assessmentQuestionCursor = SMSquestionBase.getQuestionCursor(questionNumber, contact.vars.assessment_batch);
	var assessmentQuestion = assessmentQuestionCursor.next();
	
	console.log("question number: "+questionNumber);

	if (checkAnswer(assessmentQuestion)){

		scoreContact()
	}

	WebRequests = require('./handleWebRequests');
	var dataParams = {
						'question_number': questionNumber, 
						'response': content,
						'leaner_telerivet_id': contact.id,
						'batch_number': contact.vars.assessment_batch
					};
	try{
		
		WebRequests.handleWebRequest(dataParams);
		

	}catch(err){

		//manually queue is somehow ...
		WebRequests.cacheInDataTable(dataParams);
		console.log("caching in data table"+err.message);


	}
	

	
	//get Next Question
	var newQuestion = getNextQuestion(assessmentQuestionCursor);
	console.log("current question: "+state.vars.progressState);

	if (!newQuestion){
		return endInteraction();
	}

	sendQuestion(newQuestion);
	suspendAndWaitForResponse();
});


function canTakeQuiz(){
	//if contact is not in the assessment group return false ... 
	var assessmentGroup = project.getGroupById('CG618faf9bc2359cd9');
	if (!contact.isInGroup(assessmentGroup)){
		return false
	}

	return true;
}

function checkAnswer(questionTable){
	//check if the answer is the same as the content ...

	if (content == questionTable.vars.answer){
		sendReply("Correct, you earned 5 cents");
		return true;
	}else{
		sendReply("Incorrect!, The answer is "+questionTable.vars.answer);
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
	console.log("question count: "+questionCursor.count());
	//console.log("Try accessing next question "+questionCursor.next());

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
	    timeoutMinutes: 5,
	    timeoutId: 'timeout'
	});
}

function endInteraction(){
	sendReply("The END!\nYou scored "+contact.vars.in_person_assessment +"/10");
	return true;
}

addTimeoutHandler('timeout', function() {
	sendReply("Your assessment has been timed out becaues you took too long.Start again by sending 100");
});


//TODO::
/*
What if Learning Links Person mistakenly assigns the wrong question to the tutor group

==validate and check if learners assigned are actually doing [module] & [level]

*/