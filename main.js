global.main = function() {

	var keyword = content; //get word1 instead .. 

	//remember to trim the string ... 

	//check if is learner or tutor
	if (! contact.vars.learner){
		//if contact is not a learner, she's a tutor ... in the group

		var question = require('./question');
		keyword = keyword.trim();
		var questionCode = keyword;

		var groupLearnerQuestion = question.getQuestion(questionCode);
		//if (groupLearnerQuestion is valid proceed else alert teacher that question code is not available);

		console.log(groupLearnerQuestion.question);
		sendReply("Testing "+groupLearnerQuestion.question);
		//ideally, tutor should get tutor prompt ... 
	}


	

}