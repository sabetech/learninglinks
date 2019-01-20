/*
 * Example CommonJS module that exports functionality by adding properties 
 * to the `exports` variable.
 */

exports.handleWebRequest = function(dataParams){
	
	try{
		httpClient.request("http://learninglinksadmin.tk/sms/assessment/response", 
								{
									method: "POST",
									data: dataParams
								}
						  );

	}catch(err){

		console.log("caching failed requests "+err);
		//retry recursively
		this.handleWebRequest(dataParams);

	}	
}

