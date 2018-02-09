var questionBase = null;
global.main = function() {

	var keyword = word1;
	keyword = keyword.trim();

	questionBase = require('./question');
	//check if is learner or tutor
	if (!contact.vars.learner){
		//if contact is not a learner, she's a tutor ... in the group
		
		var testgroup = project.getOrCreateGroup("LL_TESTGROUP");
		if (!contact.isInGroup(testgroup)){
			sendReply("Sorry you don't belong to the testgroup");
			return;
		}

		var questionCode = keyword;
		
		var groupLearnerQuestion = getQuestionObject(questionCode);
		
		if (groupLearnerQuestion == false){
			sendReply("Hi "+contact.name+" Invalid Question Code "+content+"! Question for this code is not available.Type in a correct Question Code");
			return;	
		}

		if (groupLearnerQuestion.question_tag.indexOf("G") === -1){
			sendReply("Hi "+contact.name+" the question you are requesting for is not a Group Based Question. Verify the question code and try again");
			return;
		}

		sendReply(groupLearnerQuestion.question);

		//get group members to send the message to them ...
		var group = project.getGroupById(contact.vars.tutor_group_id);

		//var group = project.getOrCreateGroup("Test Group");
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
		
		//if the person is learner ... 
		//and belongs to a certain group for test otherwise 
		var testgroup = project.getOrCreateGroup("LL_TESTGROUP");
		 
		 //if the learner is not in a test group ...
		if (!contact.isInGroup(testgroup)){
			return;
		}
	
		var answerKey = keyword;
		//get question code from contact ...
		var learnerQuestion = getQuestionObject(contact.vars.current_question_code);

		//check if learner should have access to such a question code
		if (learnerQuestion.answer == answerKey){
			sendReply(learnerQuestion.correctAnswerResponse);
			contact.vars.cum_points = parseInt(contact.vars.cum_points) + 5;
		}else{
			sendReply(learnerQuestion.incorrectAnswerResponse);
		}

		contact.vars.current_question_code = parseInt(contact.vars.current_question_code) + 1;
		contact.save();

		var questionCode = parseInt(contact.vars.current_question_code);
		var individualQuestion = getQuestionObject(questionCode);

		if (individualQuestion.question_tag.indexOf("G") !== -1){
			console.log("You are learner trying to access a group question!");
			return;
		}

		console.log("scheduled_msg for 2 mins now");
		//send NExt question in the next 15mins
		var scheduled_msg = project.scheduleMessage({
		    content: individualQuestion.learner_question, 
		    to_number: contact.phone_number, 
		    start_time_offset: 120 //15mins
		});

		//put the timeout calls here ...

	}
}

//return object or false
function getQuestionObject(questionCode){
	return questionBase.getQuestion(questionCode);
}

/*



//ASK QUESTION 2 Wait Timer
addTimeoutHandler('askQuestion2', function() {
	var questionCode = parseInt(contact.vars.current_question_code);
	var individualQuestion2 = getQuestionObject(questionCode);
	
	console.log("Question 2 is being asked ...");
    console.log(individualQuestion2.learner_question);

    sendReply(individualQuestion2.learner_question);

    waitForResponse('question2', {
        timeoutMinutes: 3,
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
	contact.save();

	//send 3rd question ... 
	waitForResponse('question3',{
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
	contact.save();

	return;
});

//REMINDERS for QUESTION 2...
addTimeoutHandler('question2Reminder', function() {
	//get question to be answered
    var questionCode = contact.vars.current_question_code;
	var individualQuestion2 = getQuestionObject(questionCode);
    sendReply("Reminder to answer question "+individualQuestion2.learner_question);
    waitForResponse('question2', {
        timeoutMinutes: 60,
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
        timeoutMinutes: 60,
        timeoutId: 'timeout'
    });
});

//FINAL TIMEOUT
addTimeoutHandler('timeout', function() {
	//get question to be answered
    sendReply("The question has expired because you didn't answer in time");
});
*/