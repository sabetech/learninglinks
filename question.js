/*
 * Example CommonJS module that exports functionality by adding properties 
 * to the `exports` variable.
 */

exports.getQuestion = function(questionCode) { 
    
	var level1Numeracy = {
						  questions: [
						    {
						      q2002:{
						          q2002: "Question 2002",
						          phone: "888-555-1212",
						          relationship: "spouse"
						        }
						    }
						        ,
						    {
						      q2003:{
						          q2003: "Question 2003",
						          phone: "877-123-1212",
						          relationship: "parent"
						        }
						      }
						  ]
						};

	return level1Numeracy;

};