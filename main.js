var questionBase = null;
global.main = function() {

	var keyword = word1;
	keyword = keyword.trim();

	questionBase = require('./question');
	//check if is learner or tutor
	if (!contact.vars.learner){
		//if contact is not a learner, she's a tutor ... in the group
		
		var questionCode = keyword;

		
		var groupLearnerQuestion = getQuestionObject(questionCode);
		
		if (groupLearnerQuestion == false){
			sendReply("Hi "+contact.name+" Invalid Question Code "+content+"! Question for this code is not available.Type in a correct Question Code");
			return;	
		}

		sendReply(groupLearnerQuestion.question);

		//get group members to send the message to them ...
		var group = project.getOrCreateGroup("Test Group");
		cursor = group.queryContacts();

		//send question to everyone in the group... 
		while(cursor.hasNext()){
			var learner_contact = cursor.next();
			if (! learner_contact.vars.learner) continue;

			learner_contact.vars.current_question_code = parseInt(questionCode);
			sendSMS(learner_contact.phone_number, groupLearnerQuestion.learner_question);
			learner_contact.save();

		}

	}else{
		
		//check if the person is learner ... and belongs to a certain group for test otherwise return
		var answerKey = keyword;
		//get question code from contact ...
		var groupLearnerQuestion = getQuestionObject(contact.vars.current_question_code);

		//check if learner should have access to such a question code
		if (groupLearnerQuestion.answer == answerKey){
			sendReply(groupLearnerQuestion.correctAnswerResponse);
			contact.vars.Cum_Points = parseInt(contact.vars.Cum_Points) + 5;
		}else{
			sendReply(groupLearnerQuestion.incorrectAnswerResponse);
		}

		contact.vars.current_question_code = parseInt(contact.vars.current_question_code) + 1;

		//send NExt question in the next 15mins
		waitforResponse('question2',{
			timeoutMinutes: 15,
			timeoutId: 'askQuestion2'
		});
	}
}

//return object or false
function getQuestionObject(questionCode){
	return questionBase.getQuestion(questionCode);
}

//ASK QUESTION 2 Wait Timer
addTimeoutHandler('askQuestion2', function() {
	var questionCode = parseInt(contact.vars.current_question_code);
	var individualQuestion2 = getQuestionObject(questionCode);

    sendReply(individualQuestion2.learner_question);

    waitForResponse('question2', {
        timeoutMinutes: 15,
        timeoutId: 'question2Reminder'
    });
});

//RESPONSE HANDLER FOR QUESTION 2
addResponseHandler('question2', function() {
    //check if the person is a learner ...
    var answerKey = word1;

    //get question to be answered
    var questionCode = contact.vars.current_question_code;
	var individualQuestion2 = getQuestionObject(questionCode);
    
	//check if learner should have access to such a question code
	if (individualQuestion2.answer == answerKey){
		sendReply(individualQuestion2.correctAnswerResponse);
		contact.vars.Cum_Points = parseInt(contact.vars.Cum_Points) + 5;
	}else{
		sendReply(individualQuestion2.incorrectAnswerResponse);
	}

	contact.vars.current_question_code = parseInt(contact.vars.current_question_code) + 1;

	//send 3rd question ... 
	waitforResponse('question3',{
		timeoutMinutes: 15,
		timeoutId: 'askQuestion3'
	});
    
});

//ASK QUESTION 3 Wait Timer
addTimeoutHandler('askQuestion3', function() {
	var questionCode = parseInt(contact.vars.current_question_code);
	var individualQuestion3 = getQuestionObject(questionCode);

    sendReply(individualQuestion3.learner_question);

    waitForResponse('question3', {
        timeoutMinutes: 15,
        timeoutId: 'question3Reminder'
    });
});

//RESPONSE HANDLER FOR QUESTION 3
addResponseHandler('question3', function() {
    //check if the person is a learner ...
    var answerKey = word1;

    //get question to be answered
    var questionCode = contact.vars.current_question_code;
	var individualQuestion3 = getQuestionObject(questionCode);
    
	//check if learner should have access to such a question code
	if (individualQuestion3.answer == answerKey){
		sendReply(individualQuestion3.correctAnswerResponse);
		contact.vars.Cum_Points = parseInt(contact.vars.Cum_Points) + 5;
	}else{
		sendReply(individualQuestion3.incorrectAnswerResponse);
	}

	contact.vars.current_question_code = parseInt(contact.vars.current_question_code) + 1;

	return;
});

//REMINDERS for QUESTION 2...
addTimeoutHandler('question2Reminder', function() {
	//get question to be answered
    var questionCode = contact.vars.current_question_code;
	var individualQuestion2 = getQuestionObject(questionCode);
    sendReply("Reminder to answer question "+individualQuestion2.learner_question);
    waitForResponse('question2', {
        timeoutDays: 1,
        timeoutId: 'timeout'
    });
});

//REMINDERS for QUESTION 3...
addTimeoutHandler('question3Reminder', function() {
	//get question to be answered
    var questionCode = contact.vars.current_question_code;
	var individualQuestion3 = getQuestionObject(questionCode);
    sendReply("Reminder to answer question "+individualQuestion3.learner_question);
    waitForResponse('question3', {
        timeoutDays: 1,
        timeoutId: 'timeout'
    });
});

//FINAL TIMEOUT
addTimeoutHandler('timeout', function() {
	//get question to be answered
    sendReply("The question has expired because you didn't answer in time");
});
