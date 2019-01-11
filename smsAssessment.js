
function main() {
    
	console.log("fallback access sms assessment");

     var keyword = word1;
     
     //When the keyword is START ... then proceed here ....
     if (keyword === ""){
		console.log("is keyword empty?");
		sendReply("No keyword Sent");
		message.delete();
		return true;
	}
	if (keyword === null){
		console.log("is keyword null?");
		sendReply("No keyword Sent");
		message.delete();
		return true;
	}
	if (typeof keyword === 'undefined' ){
		console.log("are you undefined?");
		message.delete();
		return true;
	}
	
	keyword = keyword.trim();
	
	//start interaction here ...
	if (keyword === "100"){
        //begin ...	
        console.log("fantastic");
        
        //getFirstQuestion
        return true;
        
	}else{
	    return true;
	}
	
}
