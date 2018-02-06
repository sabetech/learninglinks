global.main = function() {

	var keyword = content; //get word1 instead .. 

	//remember to trim the string ... 
	console.log(contact.phone_number);
	//check if is learner or tutor
	if (!contact.vars.learner){
		//if contact is not a learner, she's a tutor ... in the group

		var question = require('./question');
		keyword = keyword.trim();
		var questionCode = keyword;

		var groupLearnerQuestion = question.getQuestion(questionCode);
		//if (groupLearnerQuestion is valid proceed else alert teacher that question code is not available);

		console.log(groupLearnerQuestion.question);
		sendReply(groupLearnerQuestion.question);
		//ideally, tutor should get tutor prompt ... 

		//get group members to send the message to them ...
		var group = project.getOrCreateGroup("Test Group");
		cursor = group.queryContacts();

		//send question to everyone in the group... 
		while(cursor.hasNext()){
			var contact = cursor.next();
			sendSMS(contact.phone_number,groupLearnerQuestion.question);
		}



	}


	

}