const Discord = require('discord.js');
const play = require('./play.js');
const attachment = new Discord.Attachment('./lagaf.jpg', 'lagaf.jpg');




function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}


exports.run = (bot, msg, args) => {	
	args[2] = "https://www.youtube.com/watch?v=zFibncI54YI";
	const embed = new Discord.RichEmbed()
		.setImage('attachment://lagaf.jpg')
		.setColor(0x0086AE)
    		.addField("🤔", "Le juste prix commence !!", false)
    		.addField("😱", "Host par le superbe " + msg.author, false);
	msg.channel.send({embed}).catch(console.error);


	var idx = require('./dataJP.json');
	var datalength = idx.data.length;
	var random = getRandomInt(datalength);
	msg.author.send('here is the price: ' + idx.data[random].prix + "  and the description " + idx.data[random].objet);	   msg.author.send('(°d°)');
	play.run(bot, msg, args);
};
