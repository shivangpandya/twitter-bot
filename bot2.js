console.log('The bot is starting');

var Twit = require('twit');

var config = require('./config');

var T = new Twit(config);

//tweetIt();
//setInterval(tweetIt,1000*60*20)


//Setting up user stream
var stream = T.stream('user');

//Anytime someone follows me
stream.on('follow',followed);

function followed(eventMsg){
	var name = event.source.name;
	var screenName = eventMsg.source.screen_name;

	tweetIt('@' + screenName + 'Thank you for following me');
}


function tweetIt(){

var r = Math.floor(Math.random()*100);

	var tweet = {
		status: txt
	//status: 'Here is a random number ' + r + '#nodebot' 
}

}



T.post('statuses/update',tweet,tweeted);

function tweeted(err,data,response){
	if(err){
		console.log("Something went wrong");
	}
	else{
		console.log("It worked");
	}
	console.log(data)
}