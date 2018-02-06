/*
 * Example CommonJS module that exports functionality by adding properties 
 * to the `exports` variable.
 */

exports.getQuestion = function(questionCode) { 
    
	var level1Numeracy = {
					      	q2002:{
						        question: "How many? ($ $ $ $) \r\n1. 5\r\n2. 4\r\n3. 3",
						        answer: "2",
						        correctAnswerResponse: "Well done child"
						    },
						    q2003:{
						        question: "How many? ($ $ $) \r\n1. 5\r\n2. 4\r\n3. 3",
						        answer: "3",
						        correctAnswerResponse: "Nerh I'm sorry"
						    }
						};
	
	var jsonObject = level1Numeracy['q'+questionCode];

	return jsonObject;

};