/*
 * Example CommonJS module that exports functionality by adding properties 
 * to the `exports` variable.
 */

var tryCount = 0
exports.handleWebRequest = function(dataParams, action){
	var baseURL = "http://learninglinksadmin.tk/";
	//need to include a base case!!! .. if it tries 5 times ... stop!

	try{
		
		console.log("try count: "+tryCount);
		console.log("what is action "+action);

		if (tryCount > 4){
			return false;
		}

		switch(action){/*action is either 1 or 2. 1 for posting response and 2 for requesting for question*/
			case 1:
				var response = getPushSMSAssessmentResponse(baseURL, dataParams);
				var responesobj = JSON.parse(response.content);

				if (responesobj.status == false){
					console.log("couldn\'t save response ");
				}
				
				return responesobj.status;
				
			break;
			case 2:
				return getSMSAssessmentQuestion(baseURL, dataParams);
			break;
		}	
	}catch(err){
		console.log(err);
		tryCount++;
		this.handleWebRequest(dataParams, action);
	}
	 

	function getPushSMSAssessmentResponse(baseURL, dataParams){
		console.log("Am I looking for you?");
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

