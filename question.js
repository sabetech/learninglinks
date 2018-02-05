/*
 * Example CommonJS module that exports functionality by adding properties 
 * to the `exports` variable.
 */

exports.getQuestion = function(questionCode) { 
    
	var responseJSON = httpClient.request('resources/learning_link_res.json', {
											method: "GET"
										});

	return responseJSON;

};