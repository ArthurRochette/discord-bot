const Discord = require('discord.js');
const bot = new Discord.Client();
const config = require("./config.json");
const configTwit = require("./twitter/configTwitter")

const Twitter = require("twitter")
const T = new Twitter(configTwit)
const discu = require("./twitter/twitterDiscussion")
const dicof = require("./twitter/dicoTwitter.js");


let lastid
let dico = dicof.dico
let channelTw;

//discord part

bot.on('ready', () => {
	var date = new Date();
	console.log(date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + " " + `Logged in as ${bot.user.tag}!`);
	bot.user.setActivity("(•_•)");
	channelTw = bot.channels.cache.get(config.twittertext)
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
		else if (msg.author.id = config.owner) {
			if (msg.content.startsWith("debug")) {
				msg.contet
			}
		}
		commandFile = require(`./commands/discussion.js`);
		commandFile.run(bot, msg, args);
	}


	if (msg.content.startsWith(config.prefix)) { //mention of the bot
		var args = msg.content.substring(config.prefix.length).split(" ");// so clear him ! WE DON'T MORE NEED THAT 

		if (args[1] === undefined) { // if the message is not identified, we don't know why ¯\_(ツ)_/¯ but in case of we don't know
			msg.react("😏");
			return;
		}
		const command = args[1].toLowerCase(); // normalization of the received message (lower case)
		var date = new Date();

		console.log("message de " + msg.author.username + " a " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds());//console log

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

var stream = T.stream("statuses/filter", { track: config.twitterBotName })
stream.on('data', (tweet) => {

	if (lastid !== tweet.id_str && tweet.user.screen_name !== config.twitterBotName.substring(1) && !JSON.stringify(tweet).includes("retweeted_status") && validate(tweet.text)) {//if not a already traited tweet, not a bot's tweet, not a retweet 
		try {
			let args = tweet.text.split(" ")
			let commandFile = require(`./twitter/${args[1]}.js`)

			commandFile.run((answer) => {
				let param = {
					status: "@" + tweet.user.screen_name + " " + answer,
					in_reply_to_status_id: tweet.id_str
				}
				T.post("statuses/update", param, (err, data, response) => {
					if (err) {
						console.log(err)
					}
					lastid = tweet.id_str

				})
				return
			});

		} catch (error) {
			discu.run(tweet.text.substring(10), (answer) => {
				if (validate(answer)) {
					let param = {
						status: "@" + tweet.user.screen_name + " " + answer,
						in_reply_to_status_id: tweet.id_str,
					}
					T.post("statuses/update", param, (_err, data) => {
						lastid = tweet.id_str

						let embed = {
							"description": tweet.text,
							"color": 3318440,
							"thumbnail": {
								"url": tweet.user.profile_image_url
							},
							"author": {
								"name": "@" + tweet.user.screen_name,
								"url": "https://twitter.com/" + tweet.user.screen_name,
								"icon_url": tweet.user.profile_image_url
							}
						};
						channelTw.send("Un nouveau tweet !!", { embed });
					})
				} else {
					console.log("This answer was not friendly dud'")
				}
			})

		}
	} else if (lastid !== tweet.id_str && !JSON.stringify(tweet).includes("retweeted_status") && validate(tweet.text)) {
		let embed = {
			"description": tweet.text,
			"color": 3318440,
			"thumbnail": {
				"url": tweet.user.profile_image_url
			},
			"author": {
				"name": "@" + tweet.user.screen_name,
				"url": "https://twitter.com/" + tweet.user.screen_name,
				"icon_url": tweet.user.profile_image_url
			}
		};
		console.log("https://twitter.com/" + tweet.screen_name)
		channelTw.send("Un nouveau tweet !!", { embed });
	}
})

function validate(text) {//check by dictionary if the string is acceptable
	text = text.toLowerCase()
	for (let i in dico) {
		if (text.includes(dico[i])) {
			console.log("pb ->" + dico[i] + " " + text)
			return false;
		}
	}
	return true
}
