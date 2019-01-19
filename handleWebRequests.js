/*
 * Example CommonJS module that exports functionality by adding properties 
 * to the `exports` variable.
 */

/*exports.getQuestionCursor = function(questionNumber, batch_number){

}*/

exports.handleWebRequest = function(dataParams){

	//check datatable for failed requests ... and push them ...
	var cacheDataTableID = "DT3ce77b9f6dc0a3a6";

	var table = project.getDataTableById(cacheDataTableID);

	var row = table.createRow({
				    params: JSON.stringify(dataParams)
							});

	var rowCursor = table.queryRows();
	var cachedrequests = rowCursor.all();

	for(var i = 0;i < cachedrequests.length;i++){
		try{
			var requestParams = JSON.parse(cachedrequests[i].vars.params);
			httpClient.request("http://learninglinksadmin.tk/sms/assessment/response", 
									{
										method: "POST",
										data: requestParams
									}
							  );

			cachedrequests[i].delete();
			
		}catch(err){
			
			console.log("retrying failed "+err.message);
			i--;
		}
	}
}

