var SMSquestionBase = null;
var assessmentQuestion = null;
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
        var assessmentQuestionCursor = getSMSQuestionCursor(contact.vars.assessment_batch);
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
		console.log(assessmentQuestion);
		
		sendReply(assessmentQuestion.question_number+"# "+ assessmentQuestion.question_text +
    			"1. " + assessmentQuestion.choice_1 +
    			"2. " + assessmentQuestion.choice_2 +
    			"3. " + assessmentQuestion.choice_3
    		  );

        waitForResponse('question'+assessmentQuestion.question_number, {
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
	
	//get Next Questions
	var assessmentQuestion = assessmentQuestionCursor.next();
	//this changes to response handler string ... 

	//send next question ... 
	sendReply(assessmentQuestion.question_number+"# "+ assessmentQuestion.question_text +
		"1. " + assessmentQuestion.choice_1 +
		"2. " + assessmentQuestion.choice_2 +
		"3. " + assessmentQuestion.choice_3
	);

	//access responseHandler #3
	waitForResponse('question'+assessmentQuestion.question_number, {
	    timeoutMinutes: 1,
	    timeoutId: 'timeout'
	});

});

//responsehandler #2
addResponseHandler('question2', function() {
	
	//correct response SMS is sent here ...
	console.log(content + " is response");
	sendReply("answer response is "+content);
	
	//get Next Questions
	var assessmentQuestion = assessmentQuestionCursor.next();
	//this changes to response handler string ... 

	//send next question ... 
	sendReply(assessmentQuestion.question_number+"# "+ assessmentQuestion.question_text +
		"1. " + assessmentQuestion.choice_1 +
		"2. " + assessmentQuestion.choice_2 +
		"3. " + assessmentQuestion.choice_3
	);

	//access responseHandler #3
	waitForResponse('question'+assessmentQuestion.question_number, {
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