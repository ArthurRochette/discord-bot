const Discord = require('discord.js');
const bot = new Discord.Client();
const config = require("./config.json");
const mainVoc = config.mainvoc;
const fs= require("fs");

var nbrUser = -1;
var playing = false;
var userInChannel = [];

bot.on('ready', () => {
    var date = new Date();
	console.log(date.getHours()+":"+date.getMinutes()+":"+date.getSeconds()+" "+`Logged in as ${bot.user.tag}!`);
    bot.user.setActivity("(•_•)");

}); 

bot.on('message', msg => {
    if (msg.author.equals(bot.user)) return; // return si own message (seems logic no ??)

    if (msg.channel.type === "dm"){// if private message
    	msg.channel.send("J'envoie rien en privé babe");
	    msg.react("😘");
    }
    if(msg.content.startsWith(config.prefix)) { //mention of the bot
        var args = msg.content.substring(config.prefix.length).split(" ");// so clear him ! WE DON'T MORE NEED THAT 
	
	if(args[1] === undefined){ // if the message is not identified, we don't know why ¯\_(ツ)_/¯ but in case of we don't know
		msg.react("😏");
		return;
	}
	const command = args[1].toLowerCase(); // normalization of the received message (lower case)
	var date= new Date();

	    console.log("message de " + msg.author.username+" a "+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds());//console log
	
	//lets try if a .js function file is named with the lowered case command 
	try{
		let commandFile = require(`./commands/${command}.js`);
		commandFile.run(bot, msg, args);
	} catch(err){
		console.log("/!\\"+msg.author.username + " -> Unknown :" + msg.content); //if no command file matches with the command , just add a reaction, as if the bot understood something, HAHA (evil dev laugh)
		msg.react("🤔");
	}

    }


});

bot.on('end', msg => {
	// end of play stream
	playing = false;

}); 
/* here it is a function to count user chat activity points, leveling system 

bot.on('voiceStateUpdate', (oldMember, newMember) =>{
	let newUserChannel = newMember.voiceChannel;
	let oldUserChannel = oldMember.voiceChannel;

	if(oldUserChannel ==undefined && newUserChannel !== undefined){
				
		if(newMember.id === "#ENTER OWNER ID" && playing === false){ // this feature is the dogo system, the bot follow it's owner through voice channel (wuaf) 🐶
			newMember.voiceChannel.join();
		}
		
		//User joins a voice channel
	} else if(newUserChannel === undefined){
		var channelsArray = bot.voiceConnections.get("#ENTER VOICE ID CHANNEL");
		console.log(" " + channelsArray);
		for(let i = 0;i<channelsArray.length; i++){
			console.log(channelsArray[i]);
		}
		
		//user leave
	} else {
		if(newMember.id === "#ENTER OWNER ID" && playing === false){
			newMember.voiceChannel.join();
		
		}
		//user move 
	}
});
*/
bot.login(config.token);

bot.on('disconnect', function () {
	var date =  new Date();
    console.log(date.getHours()+":"+date.getMinutes()+":"+date.getSeconds()+" " + "bot is offline ! ! ! ! !");//time
});

bot.on('reconnecting', function () {
	var date = new Date();
    console.log(date.getHours()+":"+date.getMinutes()+":"+date.getSeconds()+" "+" trying to reconnect !!");
});
