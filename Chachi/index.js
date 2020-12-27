const Discord = require('discord.js');
const bot = new Discord.Client();
const config = require("./config.json");
const fs = require("fs");
const mainText = config.maintext;
var checkedDate = false;



bot.on('ready', () => {
	var date = new Date();
	console.log(date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + " " + `Logged in as ${bot.user.tag}!`);
	bot.user.setActivity("(•_•)");
});

bot.on('message', msg => {

	if (msg.author.equals(bot.user)) return; // return si own message (seems logic no ??)

	if (msg.channel.type === "dm") {// if private message
		if (msg.content.startsWith("confess")) {
			try {
				let commandFile = require(`./commands/privateConfess.js`);
				commandFile.run(bot, msg, args);

			} catch (err) {
				console.log("/!\\ " + msg.author.username + " -> Error confess " + msg.content);
				console.log("err:" + err);
				msg.react("🤒");
			}
		}
		commandFile = require(`./commands/discussion.js`);
		commandFile.run(bot, msg, args);
	}


	if (msg.content.startsWith(config.prefix)) { //mention of the bot
		var args = msg.content.substring(config.prefix.length).split(" ");// so clear him ! WE DON'T MORE NEED THAT 

		if (args[1] === undefined){ // if the message is not identified, we don't know why ¯\_(ツ)_/¯ but in case of we don't know
			msg.react("😏");
			return;
		}
		const command = args[1].toLowerCase(); // normalization of the received message (lower case)
		var date = new Date();

		console.log("message from " + msg.author.username + " a " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds());//console log

		//lets try if a .js function file is named with the lowered case command 
		try {
			let commandFile = require(`./commands/${command}.js`);
			commandFile.run(bot, msg, args);
		} catch (err) {
			console.log(err);
			commandFile = require(`./commands/discussion.js`);
			commandFile.run(bot, msg, args);
		}

	}
});

bot.on('end', msg => {
	// end of play stream
	playing = false;

});



bot.on('disconnect', function () {
	var date = new Date();
	console.log(date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + " " + "bot is offline ! ! ! ! !");//time
});

bot.on('reconnecting', function () {
	var date = new Date();
	console.log(date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + " " + " trying to reconnect !!");
});

var intervalHNY = global.setInterval(HappyNewYear, 60000);

function HappyNewYear(){
	var date = new Date();
	console.log("checked");
	if(date.getMonth() == 11){
		console.log("month ok")
		console.log(date.getDate())
		if(date.getDate() == 31){
			console.log("day ok")
			if(date.getHours() == 23 && date.getMinutes() == 59){
				bot.channels.get(mainText).send("Happy New Year !! <:partying_face:792785418802167808>");
			}
		}
	}
}


bot.login(config.token);