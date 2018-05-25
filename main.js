var questionBase = null;
global.main = function() {

	var keyword = word1;
	console.log("what is keyword "+keyword);
	console.log("what is word1 "+word1);
	if (keyword == ""){
		console.log("is keyword empty?");
		sendReply("No keyword Sent");
		return true;
	}
	if (keyword == null){
		console.log("is keyword null?");
		sendReply("No keyword Sent");
		return true;
	}
	if (typeof keyword === 'undefined' ){
		console.log("are you undefined?");
		return true;
	}

	keyword = keyword.trim();
	
	questionBase = require('./question');
	//check if is learner or tutor
	if (!contact.vars.learner){
		//if contact is not a learner, she's a tutor ... in the group
		
		var testgroup = project.getGroupById("CGfbee3acd9a320833");
		if (!contact.isInGroup(testgroup)){
			sendReply("Sorry you don't belong to the Learning Links Program");
			return true;
		}

		var questionCode = keyword;
		
		var groupLearnerQuestion = getQuestionObject(questionCode);
		
		if (groupLearnerQuestion == false){
			sendReply("Hi "+contact.name+" Invalid Question Code "+content+"! Question for this code is not available.Type in a correct Question Code");
			return true;	
		}

		if (groupLearnerQuestion.question_tag.indexOf("G") === -1){
			sendReply("Hi "+contact.name+" the question you are requesting for is not a Group Based Question. Verify the question code and try again");
			return true;
		}

		//allowtutormentaccessfunction goes here ...
		if (!allTutorMentorAccess()){
			//then tutor is trying to trigger more questions ... 
			sendReply("Hi "+contact.name+", You have already requested for today's group question.");
			console.log(contact.name+" is triggering twice for a day");
			return true;
		}

		sendReply(groupLearnerQuestion.question);

		//get group members to send the message to them ...
		var group = project.getGroupById(contact.vars.tutor_group_id);

		cursor = group.queryContacts();

		//send question to everyone in the group... 
		while(cursor.hasNext()){
			var learner_contact = cursor.next();
			if (! learner_contact.vars.learner) continue;

			learner_contact.vars.current_question_code = parseInt(questionCode);
			learner_contact.vars.group_question_code = parseInt(questionCode);
			sendSMS(learner_contact.phone_number, groupLearnerQuestion.learner_question);
			learner_contact.save();
			//you can post a webhook here ... Is that even possible?

		}

	}else{
		
		//if the person is learner ... 
		//and belongs to a certain group for test otherwise 
		var testgroup = project.getGroupById("CGfbee3acd9a320833");
		 
		 //if the learner is not in a test group ...
		if (!contact.isInGroup(testgroup)){
			console.log(contact.name+" is not part of the Learning Links Program");
			sendReply(contact.name+" is not part of the Learning LInks Program");
			return true;
		}
		
		//check if learner has received a question ... 
		var answerKey = keyword;
		if (typeof contact.vars.current_question_code == "undefined"){
			console.log("current_question_code does not exist.");
			return true;
		}

		if (contact.vars.current_question_code == ""){
			console.log("is current_question_code empty?");
			sendReply("Your answer is not connected to any question");
			return true;
		}

		//get question code from contact ...
		var learnerQuestion = getQuestionObject(contact.vars.current_question_code);
		if (typeof learnerQuestion === 'undefined'){
			console.log("question is invalid or doesn't exit");
			sendReply("question is invalid or doesn't exit");
			return true;
		}

		//check if learner should have access to such a question code
		//the better code is that .... when a tutor has sent a code, the last code they should receive is +2 of that code sent by the tutor ...
		if (contact.vars.current_question_code > (contact.vars.group_question_code + 2)) {
			sendReply("You have reached your limit of questions for the day");
			console.log("You are trying go beyond you daily quota of questions per day");
			return true;
		}

		if (learnerQuestion.answer == answerKey){
			
			if (typeof contact.vars.cum_points === 'undefined'){
				contact.vars.cum_points = 5;
			}else{
				contact.vars.cum_points = parseInt(contact.vars.cum_points) + 5;
			}
			
			sendReply(learnerQuestion.correctAnswerResponse + "[Q"+contact.vars.current_question_code+"]");
			sendReply("You have earned 5 points. Total Points: "+contact.vars.cum_points);
			
			//send message to tutor here ...
			sendMessageToTutor(contact.name+" answered question "+learnerQuestion.code+" correctly and earned 5 points. Her Total Points: "+contact.vars.cum_points);

		}else{
			sendReply(learnerQuestion.incorrectAnswerResponse + "[Q"+contact.vars.current_question_code+"]");
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
			console.log("current_question_code of learner is not found");
			return true;
		}

		if (typeof individualQuestion === 'undefined'){
			console.log("question is invalid or doesn't exit");
			return true;
		}
		
		if (individualQuestion.question_tag.indexOf("G") !== -1){
			console.log("You are learner trying to access a group question!");
			return true;
		}

		//console.log("scheduled_msg for 2 mins now");
		//console.log("sender phone "+contact.phone_number);
		//send NExt question in the next 15mins
		var scheduled_msg = project.scheduleMessage({
		    content: individualQuestion.learner_question, 
		    to_number: contact.phone_number, 
		    start_time_offset: 120 //30mins 
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

function getLatestSentMessage(){

	var last_sent_message_cursor = contact.queryMessages({
								direction: "incoming",
								message_type: "sms",
								sort_dir: "desc",
								page_size: 2
							 });

	last_sent_message_cursor.limit(2);
	
	console.log("message total count "+last_sent_message_cursor.count());

	var message;
	var messageCount = 0;
	while (last_sent_message_cursor.hasNext()) {
		message = last_sent_message_cursor.next();
		messageCount++;
	}

	console.log("message count "+messageCount);

	//this means theat the person has a previous message
	if (messageCount == 2){
		return message
	}
	if (messageCount == 1){
		//if message count is 1 it means this is the person's first time
		return false;
	}

}

function allTutorMentorAccess(){

	var latestSentMessage = getLatestSentMessage();
	var blockTutorMentorAccess = true;

	console.log(latestSentMessage.content.length);

	//check if a tutor mentor made a genuine mistake and wants to retry ...
	if (latestSentMessage.content.length != 4){
		blockTutorMentorAccess = false;
	}

	if (!latestSentMessage){
		return true;
	}

	//if tutor mentor has already sent a question for the day... she's not allowed to send another one ...
	var last_incoming_message_time = latestSentMessage.date_created; //this is in unix epoch time 
	//if this time is between the morning and night of the same day, then the tutor is trying to accses more than necessary questions

	const startOfDay = moment().startOf('day');
	const endOfDay = moment().endOf('day');

	console.log("do u get here as tutor");

	if ((last_incoming_message_time > startOfDay.unix()) && (last_incoming_message_time < endOfDay.unix()) && blockTutorMentorAccess){
		return false;

	}else{
		return true;
	}

}

