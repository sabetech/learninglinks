/*
 * Example CommonJS module that exports functionality by adding properties 
 * to the `exports` variable.
 */

/*exports.getQuestionCursor = function(questionNumber, batch_number){

}*/

exports = function(dataParams){

	//check datatable for failed requests ... and push them ...
	this.cacheDataTableID = "DT3ce77b9f6dc0a3a6";
	
	this.retryUnsuccessfulRequests = function(){
		var table = project.getDataTableById(this.cacheDataTableID);
		//if its successful, remove it from the data table ... 
		var rowCursor = table.queryRows();
		var cachedrequests = rowCursor.all();

		for(int i = 0;i < cachedrequests.length;i++){
			try{
				this.retryRequest(JSON.parse(params));
				row.delete();
			}catch(err){
				console.log("retrying failed "+err.message);
				i--;
			}
		}
	};

	this.retryRequest = function(params){
		this.handleWebRequest(params);
	};

	this.handleWebRequest = function(dataParams){

		var response = httpClient.request("http://learninglinksadmin.tk/sms/assessment/response", 
							{
								method: "POST",
								data: dataParams
							}
					);

		return response;
	};

	this.cacheInDataTable = function(dataParams){

		var table = project.getDataTableById(this.cacheDataTableID);
		var row = table.createRow({
					    params: JSON.stringify(dataParams);
								});

		return row;
	}

}

