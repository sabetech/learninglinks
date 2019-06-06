/*
 * Example CommonJS module that exports functionality by adding properties 
 * to the `exports` variable.
 */

//this code is going to be rendered useless after the new assessment algorithm is implemented!
 exports.getQuestionCursor = function(questionNumber, batch_number){
		const DATATABLE_ID = "DT52d802fd4e601de0";

		var questionTable = project.getDataTableById(DATATABLE_ID);
		var cursor = questionTable.queryRows({
		    vars: {
		      'batch_number': batch_number,
		      'question_number': {'min': questionNumber}
		          }
		});

		cursor.limit(2)
		if (!cursor.hasNext()){
			return false;
		}
		return cursor;

		//get data from custom server ...





	};
