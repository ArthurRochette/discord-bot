const Discord = require('discord.js');
const bot = new Discord.Client();
const config = require("./config.json");


bot.on('ready', () => {
	var date = new Date();
	console.log(date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + " " + `Logged in as ${bot.user.tag}!`);
	bot.user.setActivity("(•_•)");
	channelTw = bot.channels.cache.get(config.twittertext)
});

bot.on('message', msg => {

	if (msg.author.equals(bot.user)) return; // return if own message 

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
		else if (msg.author.id = config.owner) {
			if (msg.content.startsWith("debug")) {
				msg.contet
			}
		}
		commandFile = require(`./commands/discussion.js`);
		commandFile.run(bot, msg, args);
	}


	if (msg.content.startsWith(config.prefix)) { 
		var args = msg.content.substring(config.prefix.length).split(" ");// bot will  not answer his own message (infinit loop)

		if (args[1] === undefined) { // if the message is not identified, we don't know why ¯\_(ツ)_/¯ but in case of we don't know
			msg.react("😏");
			return;
		}
		const command = args[1].toLowerCase(); // normalization of the received message (lower case)
		var date = new Date();

		console.log("message de " + msg.author.username + " a " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds());

		//lets try if a .js function file is named with the lowered case command 
		try {
			let commandFile = require(`./commands/${command}.js`);
			commandFile.run(bot, msg, args);
		} catch (err) {

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


bot.login(config.token, function () {
	const queue = require("./commands/queue")
	queue.run(undefined, undefined, undefined, undefined);
});


//twitter part

