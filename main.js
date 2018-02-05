global.main = function() {

	var keyword = content; //get word1 instead .. 

	//remember to trim the string ... 

	//check if is learner or tutor
	if (! contact.vars.learner){
		//if contact is not a learner, she's a tutor ... in the group
		sendReply("tutor Requesting for question for the group");
		//ideally, tutor should get tutor prompt ... 
	}


	

}