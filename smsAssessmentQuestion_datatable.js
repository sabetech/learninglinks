/*
 * Example CommonJS module that exports functionality by adding properties 
 * to the `exports` variable.
 */

 exports.getQuestionCursor = function(questionNumber, batch_number){
		const DATATABLE_ID = "DT52d802fd4e601de0";

		var questionTable = project.getDataTableById(DATATABLE_ID);
		var cursor = questionTable.queryRows({
		    vars: {
		      'batch_number': batch_number,
		      'question_number': {'gte':questionNumber}
		          }
		});

		cursor.limit(2)
		if (!cursor.hasNext()){
			return false;
		}
		return cursor;

	};
