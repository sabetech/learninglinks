global.main = function() {

	sendReply("testing ... ");
	var keyword = content;
	if (keyword.toLowerCase() != 'ready'){
		sendReply("Not Supported keyword");
		return;
	}

	//get level of student ...
	var curScore = parseInt(contact.vars.cum_score);
	contact.vars.cum_score = (curScore + 4) + "";
	contact.save();

	sendReply("new Score for aacontact is "+contact.vars.cum_score);

}