/*
 * Example CommonJS module that exports functionality by adding properties 
 * to the `exports` variable.
 */

exports.handleWebRequest = function(dataParams, action){
	var baseURL = "http://learninglinksadmin.tk/";
	//need to include a base case!!! .. if it tries 5 times ... stop!

	try{
		switch(action){/*action is either 1 or 2. 1 for posting response and 2 for requesting for question*/
			case 1:
				getPushSMSAssessmentResponse(baseURL, dataParams);	
			break;
			case 2:
				return getSMSAssessmentQuestion(baseURL, dataParams);
			break;
		}	
	}catch(err){
		this.handleWebRequest(dataParams, action);
	}
	 

	function getPushSMSAssessmentResponse(baseURL, dataParams){

		httpClient.request(baseURL+"sms/assessment/response", 
								{
									method: "POST",
									data: dataParams
								}
						  );
			
	}

	function getSMSAssessmentQuestion(baseURL, dataParams){
	
		var questionResponse = httpClient.request(baseURL+"sms/assessment/question", 
								{
									method: "GET",
									params: dataParams
								}
		);

		return questionResponse;	
	}

		
}

