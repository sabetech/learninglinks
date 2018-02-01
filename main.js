global.main = function() {

	var keyword = content;
	if (keyword.toLowerCase() != 'ready'){
		sendReply("Not Supported keyword");
		return;
	}

	//get level of student ...
	contact.vars.cum_score = "2";
	contact.save();
	sendReply("new Score for contact is "+contact.vars.cum_score);




}