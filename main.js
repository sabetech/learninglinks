global.main = function() {

	var keyword = content; //get word1 instead .. 

	
	//check if is learner or tutor
	if (!contact.vars.learner){
		//if contact is not a learner, she's a tutor ... in the group

		var questionBase = require('./question');
		keyword = keyword.trim();
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
			if (!learner_contact.vars.learner) continue;
			sendSMS(learner_contact.phone_number,groupLearnerQuestion.learner_question);

			waitForResponse('questionResponse', {
            	timeoutMinutes: 10
        	});
		}

	}else{
		sendReply("Sorry, Requesting for questions is now done by Tutor-Mentors");
	}
}

addResponseHandler('questionResponse', function() {
    var responseAnswer = word1;
    //check answer ... 
    console.log("learner has replied to "+groupLearnerQuestion.learner_question+" responseAnswer = "+responseAnswer);

});