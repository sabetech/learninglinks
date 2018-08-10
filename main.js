var questionBase = null;
global.main = function() {

	var keyword = word1;
	
	if (keyword == ""){
		console.log("is keyword empty?");
		sendReply("No keyword Sent");
		message.delete();
		return true;
	}
	if (keyword == null){
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
	
	questionBase = require('./question');
	//check if is learner or tutor
	if (!contact.vars.learner){
		//if contact is not a learner, she's a tutor ... in the group
		
		var testgroup = project.getGroupById("CGfbee3acd9a320833");
		if (!contact.isInGroup(testgroup)){
			sendReply("Sorry you don't belong to the Learning Links Program");
			// message.delete();
			return true;
		}

		var questionCode = keyword;
		
		var groupLearnerQuestion = getQuestionObject(questionCode);
		
		if (groupLearnerQuestion == false){
			sendReply("Hi "+contact.name+" Invalid Question Code "+content+"! Question for this code is not available.Type in a correct Question Code");
			message.delete();
			return true;	
		}

		if (groupLearnerQuestion.question_tag.indexOf("G") === -1){
			sendReply("Hi "+contact.name+" the question you are requesting for is not a Group Based Question. Verify the question code and try again");
			message.delete();
			return true;
		}

		//allowtutormentaccessfunction goes here ...
		if (!allTutorMentorAccess()){
			//then tutor is trying to trigger more questions ... 
			sendReply("Hi "+contact.name+", You have already requested for today's group question.");
			console.log(contact.name+" is triggering twice for a day");

			message.delete();
			
			return true;
		}

		//check if tutor mentor has already exhausted her 3 triggers per week
		if (!tutorMentorWeeklyAccessExhausted()){
			sendReply("Hi "+contact.name+", You have exhausted your weekly access of 3 triggers.");
			console.log(contact.name+" You have exhausted your weekly access of 3 triggers.");

			message.delete();

			return true;
		}

		//all remember 


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
		}

		//requestServerPullSMSUpdate();


	}else{
		
		//if the person is learner ... 
		//and belongs to a certain group for test otherwise 
		var testgroup = project.getGroupById("CGfbee3acd9a320833");
		 
		 //if the learner is not in a test group ...
		if (!contact.isInGroup(testgroup)){
			console.log(contact.name+" is not part of the Learning Links Program");
			message.delete();

			sendReply(contact.name+" is not part of the Learning LInks Program");
			return true;
		}
		
		//check if learner has received a question ... 



		var answerKey = keyword;
		if (typeof contact.vars.current_question_code == "undefined"){
			console.log("current_question_code does not exist.");

			message.delete();
			
			return true;
		}

		if (contact.vars.current_question_code == ""){
			console.log("is current_question_code empty?");
			message.delete();
			sendReply("Your answer is not connected to any question");
			
			return true;
		}

		//get question code from contact ...
		var learnerQuestion = getQuestionObject(contact.vars.current_question_code);
		if (typeof learnerQuestion === 'undefined'){
			console.log("question is invalid or doesn't exit");
			message.delete();
			sendReply("question is invalid or doesn't exit");
			return true;
		}

		//check if learner should have access to such a question code
		//the better code is that .... when a tutor has sent a code, the last code they should receive is +2 of that code sent by the tutor ...
		if (contact.vars.current_question_code > (contact.vars.group_question_code + 2)) {
			message.delete();
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
			message.delete();
			console.log("current_question_code of learner is not found");
			return true;
		}

		if (typeof individualQuestion === 'undefined'){
			message.delete();
			console.log("question is invalid or doesn't exit");
			return true;
		}
		
		if (individualQuestion.question_tag.indexOf("G") !== -1){
			message.delete();
			console.log("You are learner trying to access a group question!");
			return true;
		}

		//console.log("scheduled_msg for 2 mins now");
		//console.log("sender phone "+contact.phone_number);
		//send NExt question in the next 15mins
		var scheduled_msg = project.scheduleMessage({
		    content: individualQuestion.learner_question, 
		    to_number: contact.phone_number, 
		    start_time_offset: 1800 //30mins 
		});


		requestServerPullSMSUpdate();

		//put the timeout calls here ...

	}
}

//return object or false
function getQuestionObject(questionCode){
	return questionBase.getQuestion(questionCode);
}

function sendMessageToTutor(_message){

	//get tutor of this contact ... 
	var tutor = getLearnersTutor();
	
	if (!tutor) return;

	project.sendMessage({
				content: _message,
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

	var _message;
	var messageCount = 0;
	while (last_sent_message_cursor.hasNext()) {
		_message = last_sent_message_cursor.next();
		messageCount++;
	}

	//this means theat the person has a previous message
	if (messageCount == 2){
		return _message
	}
	if (messageCount == 1){
		//if message count is 1 it means this is the person's first time
		return false;
	}

}

function allTutorMentorAccess(){

	var latestSentMessage = getLatestSentMessage();

	var blockTutorMentorAccess = true;

	//check if a tutor mentor made a genuine mistake and wants to retry ...
	if (latestSentMessage.content.length != 4){
		blockTutorMentorAccess = false;
	}

	if (!latestSentMessage){
		return true;
	}

	//if tutor mentor has already sent a question for the day... she's not allowed to send another one ...
	var last_incoming_message_time = latestSentMessage.time_created; //this is in unix epoch time 
	//if this time is between the morning and night of the same day, then the tutor is trying to accses more than necessary questions

	const startOfDay = moment().startOf('day');
	const endOfDay = moment().endOf('day');

	if ((last_incoming_message_time > startOfDay.unix()) && (last_incoming_message_time < endOfDay.unix()) && blockTutorMentorAccess){
		return false;

	}else{
		return true;
	}

}

function tutorMentorWeeklyAccessExhausted(){

	/* Get start of week from now.
	 * - get current date
	 * - check if current date is monday if not ...
	 * - get date for begin of week on monday
	 * -  
	 */
	//
	/*
		check if from the begining of the week to date has 3 messages sent within it ...
	*/
	var currentDate = moment.unix(contact.last_incoming_message_time);//which is now ...

	var startOfWeek = moment.unix(contact.last_incoming_message_time).startOf('iweek').isoWeekday(1);

	//check if current date is monday ... 
	if (currentDate.weekday() == 1){
		return false;
	}

	var msgCursor = contact.queryMessages({
						direction : 'incoming',
						time_created : {'min' : startOfWeek.unix()},
						time_created : {'max' : currentDate.unix()},
						status : 'received',
						message_type :'sms'
							});

	var incomingMsgCount = msgCursor.count();
	
	if (incomingMsgCount > 3){
		return true
	}
	return false;

	




}

function requestServerPullSMSUpdate(){
	var _pull_url = "http://learninglinksadmin.tk/pull_sms_logs/";

	httpClient.request(_pull_url, {
					method: "POST",
					data: {'contact_id': contact.id},
					basicAuth:"admin@admin.com:letgirlslearnliberia!"
					  });
					
}

function requestServerFromContactArray(contactArray){

	var _pull_url = "http://learninglinksadmin.tk/pull_sms_logs_via_contact_ids";

	httpClient.request(_pull_url, {
								method: "POST",
								data:{'contactarray': contactArray},
								basicAuth: "admin@admin.com:letgirlslearnliberia!"
								  });
	
}



