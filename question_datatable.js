/*
 * Example CommonJS module that exports functionality by adding properties 
 * to the `exports` variable.
 */

exports.getQuestion = function(questionCode) { 
  const DATATABLE_ID = "DTf28fd357ff5617fc";

  var questionTable = project.getDataTableById(DATATABLE_ID);

  var cursor = questionTable.queryRows({
        vars: {
          'code': questionCode
              }
  });

  cursor.limit(1);
  var questionObject = null;

  if(cursor.hasNext()){
    questionObject = cursor.next();
  }

	//return false if user submits a non existent question...
	var jsonObject = questionObject;
	if (typeof jsonObject === "undefined") 
    	return false
	
	return jsonObject;

};



