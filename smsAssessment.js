var SMSquestionBase = null;
var assessmentQuestion = null;
var assessmentQuestionCursor = null;
global.main = function() {
    
	console.log("SMS Assessment Program");

     var keyword = word1;
     
     //When the keyword is START ... then proceed here ....
     if (keyword === ""){
		console.log("is keyword empty?");
		sendReply("No keyword Sent");
		message.delete();
		return true;
	}
	if (keyword === null){
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
	
	//start interaction here ...
	if (keyword === "100"){
        //begin ...	
        
        //check if this contact is eligible to partake SMS Assessment program

        //check if learner has already taken this test ..

        //get first question
        SMSquestionBase = require('./smsAssessmentQuestion_datatable');

        //contact.vars.assessment_batch
        assessmentQuestionCursor = getSMSQuestionCursor(contact.vars.assessment_batch);
        if (assessmentQuestionCursor == false){
        	console.log("error assessment could not be started");
        	sendReply("Assessment could not be started");
        	return false
        }

        if (typeof assessmentQuestionCursor === 'undefined'){
        	console.log("cursor is undefined???");
        	return false;
        }

        //assessmentQuestionCursor.hasNext();

		assessmentQuestion = assessmentQuestionCursor.next();
		//console.log(assessmentQuestion);

		sendReply(assessmentQuestion.vars.question_number+"# "+ assessmentQuestion.vars.question_text +
    			"1. " + assessmentQuestion.vars.choice_1 +
    			"2. " + assessmentQuestion.vars.choice_2 +
    			"3. " + assessmentQuestion.vars.choice_3
    		  );

		state.vars.cursorState = assessmentQuestionCursor;
        waitForResponse('question'+assessmentQuestion.vars.question_number, {
            timeoutMinutes: 1,
            timeoutId: 'timeout'
        });

        return true;

	}else{
	    return true;
	}
	
}

//return object or false
function getSMSQuestionCursor(batch_number){

	return SMSquestionBase.getQuestionBatch(batch_number);

}

//responsehandler #1
addResponseHandler('question1', function() {
	
	//correct response SMS is sent here ...
	console.log(content + " is response");
	sendReply("answer response is "+content);
	console.log("state: "+state.id+" contact: "+contact.name);
	//get Next Questions
	assessmentQuestionCursor = state.vars.cursorState;
	var assessmentQuestion = assessmentQuestionCursor.next();
	//this changes to response handler string ... 

	//send next question ... 
	sendReply(assessmentQuestion.vars.question_number+"# "+ assessmentQuestion.vars.question_text +
		"\n1. " + assessmentQuestion.vars.choice_1 +
		"\n2. " + assessmentQuestion.vars.choice_2 +
		"\n3. " + assessmentQuestion.vars.choice_3
	);

	state.vars.cursorState = assessmentQuestionCursor;
	//access responseHandler #3
	waitForResponse('question'+assessmentQuestion.vars.question_number, {
	    timeoutMinutes: 1,
	    timeoutId: 'timeout'
	});

});

//responsehandler #2
addResponseHandler('question2', function() {
	
	//correct response SMS is sent here ...
	console.log(content + " is response");
	sendReply("answer response is "+content);
	
	assessmentQuestionCursor = state.vars.cursorState;
	//get Next Questions
	var assessmentQuestion = assessmentQuestionCursor.next();
	//this changes to response handler string ... 

	//send next question ... 
	sendReply(assessmentQuestion.vars.question_number+"# "+ assessmentQuestion.vars.question_text +
		"\n1. " + assessmentQuestion.vars.choice_1 +
		"\n2. " + assessmentQuestion.vars.choice_2 +
		"\n3. " + assessmentQuestion.vars.choice_3
	);
	console.log("state: "+state.id+" contact: "+contact.name);
	state.vars.cursorState = assessmentQuestionCursor;
	//access responseHandler #3
	waitForResponse('question'+assessmentQuestion.vars.question_number, {
	    timeoutMinutes: 1,
	    timeoutId: 'timeout'
	});

});

//responsehandler #2
addResponseHandler('question3', function() {
	
	//correct response SMS is sent here ...
	console.log(content + " is response");
	sendReply("answer response is "+content);
	sendReply("End!");
	//get Next Questions
	// var assessmentQuestion = assessmentQuestionCursor.next();
	// //this changes to response handler string ... 

	// //send next question ... 
	// sendReply(assessmentQuestion.question_number+"# "+ assessmentQuestion.question_text +
	// 	"1. " + assessmentQuestion.choice_1 +
	// 	"2. " + assessmentQuestion.choice_2 +
	// 	"3. " + assessmentQuestion.choice_3
	// );

	// //access responseHandler #3
	// waitForResponse('question'+assessmentQuestion.question_number, {
	//     timeoutMinutes: 1,
	//     timeoutId: 'timeout'
	// });

});










addTimeoutHandler('timeout', function() {
	sendReply("Your assessment has been cancelled. To start again ..?");
});