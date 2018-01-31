global.main = function() {

	var keyword = content;
	if (keyword.toLowerCase() != 'ready'){
		sendReply("Not Supported keyword");
		return;
	}

	//get level of student ...
	var currentScore = contact.vars.cum_score;
	currentScore = 3;


}