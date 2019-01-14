/*
 * Example CommonJS module that exports functionality by adding properties 
 * to the `exports` variable.
 */

 exports = {
 	getQuestionBatch: function(batch_number) { 
		const DATATABLE_ID = "DT52d802fd4e601de0";

		var questionTable = project.getDataTableById(DATATABLE_ID);

		var cursor = questionTable.queryRows({
		    vars: {
		      'batch_number': batch_number
		          }
		});

	 	cursor.limit(10);
	  	//var questionObject = null;

	  	console.log(cursor.hasNext())

		if(!cursor.hasNext()){
	    	return false;
	    }
	    return cursor;

	},

	getQuestionCursor: function(questionNumber, batch_number){
		const DATATABLE_ID = "DT52d802fd4e601de0";

		var questionTable = project.getDataTableById(DATATABLE_ID);
		var cursor = questionTable.queryRows({
		    vars: {
		      'batch_number': batch_number,
		      'question_number': questionNumber
		          }
		});

		cursor.limit(1)
		if (!cursor.hasNext()){
			return false;
		}
		return cursor;


	}

 }
