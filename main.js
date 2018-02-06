
global.main = function() {

	var keyword = word1;
	keyword = keyword.trim();

	var questionBase = require('./question');
	//check if is learner or tutor
	if (!contact.vars.learner){
		//if contact is not a learner, she's a tutor ... in the group
		
		var questionCode = keyword;

		var groupLearnerQuestion = questionBase.getQuestion(questionCode);
		//if (groupLearnerQuestion is valid proceed else alert teacher that question code is not available);

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
		
		var answerKey = keyword;
		console.log("answer sent by Leaner "+answerKey);
		//get question code from contact ...
		var questionCode = contact.vars.current_question_code;
		var groupLearnerQuestion = questionBase.getQuestion(questionCode);

		if (groupLearnerQuestion.answer == answerKey){
			sendReply(groupLearnerQuestion.correctAnswerResponse);
		}else{
			sendReply(groupLearnerQuestion.incorrectAnswerResponse);
		}


	}
}
