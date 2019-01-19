/*
 * Example CommonJS module that exports functionality by adding properties 
 * to the `exports` variable.
 */

/*exports.getQuestionCursor = function(questionNumber, batch_number){

}*/

exports.handleWebRequest = function(dataParams){
	var cacheDataTableID = "DT3ce77b9f6dc0a3a6"; //_WebRequestCache table for failed requests
	var table = project.getDataTableById(cacheDataTableID);
	try{
		throw "testing catch handle";
		httpClient.request("http://learninglinksadmin.tk/sms/assessment/response", 
								{
									method: "POST",
									data: dataParams
								}
						  );

	}catch(err){

		console.log("caching failed requests "+err.message);

		//retry recursively
		this.handleWebRequest(dataParams);

	}	
}

