var questionBase = null;

global.main = function() {

	var keyword = word1;
	
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
	
	//get data table here ..
	questionBase = require('./question_datatable');


	//check if is learner or tutor
	if (!contact.vars.learner){
		//if contact is not a learner, she's a tutor ... in the group
		
		//check if the message sent is a 4 digit code... if not return false ...
		//do a check for substring of the first 4 digits and check if they are the same
		//console.log(String(+val).charAt(0) == val);

		var testgroup = project.getGroupById("CGfbee3acd9a320833");
		if (!contact.isInGroup(testgroup)){
			sendReply("Sorry you don't belong to the Learning Links Program");
			
			return true;
		}

		var questionCode = keyword;
		
		var groupLearnerQuestion = getQuestionObject(questionCode);
		
		//console.log("question object here ...");
		//console.log(groupLearnerQuestion);

		if (groupLearnerQuestion == false){
			sendReply("Hi "+contact.name+" Invalid Question Code "+content+"! Question for this code is not available.Type in a correct Question Code");
			
			return true;	
		}

		if (groupLearnerQuestion.vars.question_tag.indexOf("G") === -1){
			sendReply("Hi "+contact.name+" the question you are requesting for is not a Group Based Question. Verify the question code and try again");
			
			return true;
		}

		//allowtutormentaccessfunction goes here ...
		//also check if the previous message was delievered or not due to network connectivity issues
		if (!allowTutorMentorAccess()){//){
			//then tutor is trying to trigger more questions ... 
			sendReply("Hi "+contact.name+", You have already requested for today's group question.");
			console.log(contact.name+" is triggering twice for a day");
			
			return true;
		}

		//check if tutor mentor has already exhausted her 3 triggers per week
		if (tutorMentorWeeklyAccessExhausted()){//){
			sendReply("Hi "+contact.name+", You have exhausted your weekly access of 3 triggers.");
			console.log(contact.name+" You have exhausted your weekly access of 3 triggers.");

			return true;
		}

		//all remember 


		sendReply(groupLearnerQuestion.vars.question);

		//get group members to send the message to them ...
		var group = project.getGroupById(contact.vars.tutor_group_id);

		cursor = group.queryContacts();

		//send question to everyone in the group... 
		while(cursor.hasNext()){
			var learner_contact = cursor.next();
			if (! learner_contact.vars.learner) continue;

			learner_contact.vars.current_question_code = parseInt(questionCode);
			learner_contact.vars.group_question_code = parseInt(questionCode);
			sendSMS(learner_contact.phone_number, groupLearnerQuestion.vars.learner_question);
			learner_contact.save();
		}

		//requestServerPullSMSUpdate();


	}else{
		var answerKey = keyword;
		//if what the learner typed is not a single digit to answer a daily sms question ... move to the next service
		/* if (String(+answerKey).charAt(0) != answerKey){
		 	//it means the Learner is trying to trigger the SMS assessment Questions
		 	return false;
		 }*/
		 if (String(answerKey) == "4"){
		 	//it means the Learner is trying to trigger the SMS assessment Questions
		 	return false;
		 }


		var testgroup = project.getGroupById("CGfbee3acd9a320833");

		//if the person is learner ... 
		//and belongs to a certain group for test otherwise 
		//if the learner is not in a test group ...
		if (!contact.isInGroup(testgroup)){
			console.log(contact.name+" is not part of the Learning Links Program");

			sendReply(contact.name+" is not part of the Learning Links Program");
			return true;
		}
		
		//check if learner has received a question ... 
		//this is done by checking if the last message received by the learner is delievered to the user
		//var lastOutgoingMessage = getLastReceivedMessage();


		
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

		//check if the learner is trying to access a different service ...
		// if (answerKey) {

		// 	return false;
		// }


		//check if learner should have access to such a question code
		//the better code is that .... when a tutor has sent a code, the last code they should receive is +2 of that code sent by the tutor ...
		if (contact.vars.current_question_code > (contact.vars.group_question_code + 2)) {
			
			sendReply("You have reached your limit of questions for the day");
			console.log("You are trying go beyond you daily quota of questions per day");
			return true;
		}

		//TODO:
		/*
		Check if an answer is a valid response or not ... 
		also play audio again for ivr in case learner didn't hear the audio
		*/


		//check if the answer the learner sent is right ...
		if (learnerQuestion.vars.answer == answerKey){
			
			if (typeof contact.vars.cum_points === 'undefined'){
				contact.vars.cum_points = 5;
			}else{
				contact.vars.cum_points = parseInt(contact.vars.cum_points) + 5;
			}
			
			sendReply("[Q"+contact.vars.current_question_code+"] "+ learnerQuestion.vars.correctanswerresponse);
			sendReply("You have earned $ 15 LD.");
			
			//send message to tutor here ...
			sendMessageToTutor(contact.name+" answered question "+learnerQuestion.vars.code+" correctly and earned $ 15 LD");

		}else{
			sendReply("[Q"+contact.vars.current_question_code+"] " + learnerQuestion.vars.incorrectanswerresponse);
			sendReply("Sorry, you earned no LD");

			//send message to tutor here ...
			if (typeof contact.vars.cum_points === 'undefined'){
				contact.vars.cum_points = 0;
			}
			sendMessageToTutor(contact.name+" answered question "+learnerQuestion.vars.code+" incorrectly and earned no LD.");
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
		
		if (individualQuestion.vars.question_tag.indexOf("G") !== -1){
			
			console.log("You are learner trying to access a group question!");
			return true;
		}

		//check to see whether to send voice and text or just voice ...
		//check if question is IVR then call the function to handle IVR ...
		//1001 and 1162: These are the question codes for IVR content ...

		//format phone to include international format before phone call is placed ..+231 

		//var phoneNumber = formatPhoneNumber(contact.phone_number);
		var smsOffset = 0;
		if ((questionCode > 1000) && (questionCode < 1162)) {
			smsOffset = 60;
			var audio_url = "http://learninglinksadmin.tk/audios/" + individualQuestion.vars.question_tag + ".mp3";
		 	var schedule_call = project.scheduleMessage({
				
				message_type: 'call',
				to_number: contact.phone_number, 
				start_time_offset: 60, //30mins ...currently temporarily 1 min
				audio_url: audio_url,
				route_id: "PN2607c459f76044a7" //the route id for handling ivr ...

			});

			//add an offset to when the sms should be triggered
			
		// 	//what if audios is not found ... via url ..
		// 	// don't return from here actually, i need to send an sms too ... 
		// 	//also remember to handle ... if learner didn't the hear the sentence, can they request for it ... yep ...
	 	}



		//send NExt question in the next 15mins
		var scheduled_msg = project.scheduleMessage({
		    content: individualQuestion.vars.learner_question, 
		    to_number: contact.phone_number, 
		    start_time_offset: (60 + smsOffset), //30mins  //1 mins temp we can't send voice and sms at the same hence the offset
		    route_id: "PN46904deed4100e78" //have to explicitly set the route for SMS to use the short code because after the phone call, the phone call's route is mainted for the call
		});


		

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

function getLastReceivedMessage(){

	var last_received_message_by_contact = contact.queryMessages({
										direction: "outgoing",
										message_type: "sms",
										sort_dir: "desc",
										page_size: 1
											});

	last_received_message_by_contact.limit(1);
	var _message;

	if (last_received_message_by_contact.hasNext()){
		_message = last_received_message_by_contact.next();
	}else{
		return false;
	}

	//_message.


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

	//this means that the person has a previous message
	if (messageCount == 2){
		return _message
	}
	if (messageCount == 1){
		//if message count is 1 it means this is the person's first time
		return false;
	}

}

function allowTutorMentorAccess(){

	var latestSentMessage = getLatestSentMessage();

	var blockTutorMentorAccess = true;

	//check if a tutor mentor made a genuine mistake and wants to retry ...
	//also check if the first time a tutor is trying ....

	if (!latestSentMessage){
		return true;
	}

	//for some reason, also check if latestSentMessage is null or undefined...
	if (typeof latestSentMessage === 'undefined'){
		return true;
	}

	if (typeof latestSentMessage.content === 'undefined'){
		return true;
	}

	if (latestSentMessage.content == null){
		return true;
	}

	if (latestSentMessage.content.length != 4){
		blockTutorMentorAccess = false;
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
	// console.log(contact.last_incoming_message_time);

	var startOfWeek = moment.unix(contact.last_incoming_message_time).startOf('iweek').isoWeekday(1);
	// console.log(startOfWeek.weekday());

	//check if current date is monday ... 
	if (currentDate.weekday() == 1){
		return false;
	}

	// console.log("start of week "+startOfWeek.unix());
	// console.log("end of period "+currentDate.unix());

	var msgCursor = contact.queryMessages({
						direction : 'incoming',
						'time_created[min]' : startOfWeek.unix(),
						'time_created[max]' : currentDate.unix(),
						status : 'received',
						message_type :'sms'
							});

	var incomingMsgCount = msgCursor.count();
	
	// console.log("incoming msg count "+incomingMsgCount);
	//this means that the triggers are exhausted ...
	if (incomingMsgCount > 3){
		return true
	}
	return false;

	




}

function formatPhoneNumber(phone_number){

	//if phone number begins with +231, leave it ... 
	//if phone number begins with +231, leave it ... 
	if (phone_number.lastIndexOf("+231", 0) === 0){
		return phone_number;

	}else if(phone_number.lastIndexOf("088", 0) === 0){
		return phone_number.replace("088", "+23188");

	}else if(phone_number.lastIndexOf("077", 0) === 0){
		return phone_number.replace("077", "+23177");

	}else if(phone_number.lastIndexOf("88", 0) === 0){
		return phone_number.replace("88", "+23188");

	}else{
		return phone_number;
	}

}

function startsWith(mainStr, startingStr){
	return (startingStr == mainStr.substr(0, startingStr.length));
}




