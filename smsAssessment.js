var SMSquestionBase = null;

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
        if (assessmentQuestion == false){
        	console.log("error assessment could not be started");
        	sendReply("Assessment could not be started");
        }

        while(assessmentQuestionCursor.hasNext()){

			var assessmentQuestion = assessmentQuestionCursor.next();
			sendReply(assessmentQuestion.question_number+"# "+ assessmentQuestion.question_text +
        			"1. " + assessmentQuestion.choice_1 +
        			"2. " + assessmentQuestion.choice_2 +
        			"3. " + assessmentQuestion.choice_3
        		  );

	        waitForResponse('question'+assessmentQuestion.question_number, {
	            timeoutMinutes: 1,
	            timeoutId: 'timeout'
	        });

	        addResponseHandler('question'+assessmentQuestion.question_number, function() {
			    console.log(content + " is response");
			    sendReply("answer response is "+content);
			});

			addTimeoutHandler('timeout', function() {
			    sendReply("Your registration has been cancelled. To start the registration again, send JOIN.");
			});


        }
        
        
        



        return true;
        
	}else{
	    return true;
	}
	
}

//return object or false
function getSMSQuestionCursor(batch_number){

	return SMSquestionBase.getQuestion(batch_number);

}
