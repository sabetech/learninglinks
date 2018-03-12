var questionBase = null;
global.main = function() {

	var keyword = word1;
	if (keyword == ""){
		return;
	}
	if (keyword == null){
		return;
	}
	if (typeof keyword === 'undefined' ){
		return;
	}



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
			console.log("contact is not part of the test group");
			return;
		}
		
		//check if learner has received a question ... 
		var answerKey = keyword;
		//get question code from contact ...
		var learnerQuestion = getQuestionObject(contact.vars.current_question_code);
		if (typeof learnerQuestion === 'undefined'){
			console.log("question is invalid or doesn't exit");
			return;
		}
		
		if (learnerQuestion.question_tag.indexOf("G") !== -1){
			console.log("You are learner trying to access a group question!");
			return;
		}
		
		//check if learner should have access to such a question code
		if (learnerQuestion.answer == answerKey){
			
			if (typeof contact.vars.cum_points === 'undefined'){
				contact.vars.cum_points = 5;
			}else{
				contact.vars.cum_points = parseInt(contact.vars.cum_points) + 5;
			}
			
			sendReply(learnerQuestion.correctAnswerResponse);
			sendReply("You have earned 5 points. Total Points: "+contact.vars.cum_points);
			
			//send message to tutor here ...
			sendMessageToTutor(contact.name+" answered question "+learnerQuestion.code+" correctly and earned 5 points. Her Total Points: "+contact.vars.cum_points);

		}else{
			sendReply(learnerQuestion.incorrectAnswerResponse);
			sendReply("Sorry, you earned no points.");

			if (typeof contact.vars.cum_points === 'undefined'){
				contact.vars.cum_points = 5;
			}else{
				contact.vars.cum_points = parseInt(contact.vars.cum_points) + 5;
			}
			//send message to tutor here ...
			sendMessageToTutor(contact.name+" answered question "+learnerQuestion.code+" incorrectly and earned no points. Her Current points: "+contact.vars.cum_points);
		}

		contact.vars.current_question_code = parseInt(contact.vars.current_question_code) + 1;
		contact.save();

		var questionCode = parseInt(contact.vars.current_question_code);
		var individualQuestion = getQuestionObject(questionCode);

		if (isNaN(questionCode)){
			sendReply("Invalid. Make sure to answer a question you have received.");
			return;
		}

		if (typeof individualQuestion === 'undefined'){
			console.log("question is invalid or doesn't exit");
			return;
		}
		
		if (individualQuestion.question_tag.indexOf("G") !== -1){
			console.log("You are learner trying to access a group question!");
			return;
		}

		//console.log("scheduled_msg for 2 mins now");
		//console.log("sender phone "+contact.phone_number);
		//send NExt question in the next 15mins
		var scheduled_msg = project.scheduleMessage({
		    content: individualQuestion.learner_question, 
		    to_number: contact.phone_number, 
		    start_time_offset: 120 //2mins change to 15 minutes
		});

		//put the timeout calls here ...

	}
}

//return object or false
function getQuestionObject(questionCode){
	return questionBase.getQuestion(questionCode);
}

function sendMessageToTutor(message){

	//get tutor of this contact ... 
	var tutor = getLearnersTutor();
	
	if (!tutor) return;

	project.sendMessage({
				content: message,
				to_number: tutor.phone_number
					});


}

function getLearnersTutor(){

	var group = project.getGroupById(contact.vars.tutor_group_id);

	cursor = group.queryContacts();
	
	while(cursor.hasNext()){
		var possibleTutor = cursor.next();
		if (! possibleTutor.vars.learner){
			//this is our tutor ... 
			return possibleTutor;
		}
	}
	return false;
}

