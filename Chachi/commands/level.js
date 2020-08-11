const fs = require("fs")
const Discord = require("discord.js");

exports.run = (bot, msg, args) => {
	var userid = msg.author.id;
	if(fs.existsSync(`/home/ubuntu/Chachi/data/levelFile/${userid}.txt`)){
		var point = fs.readFileSync(`/home/ubuntu/Chachi/data/levelFile/${userid}.txt`, 'utf8');
		const embed = new Discord.RichEmbed()
			.setDescription("Chachi ouvre son livre des comptes pour te donner tes points !")
			.addField("📖",point + " points")
			.setColor(65535)
			.setFooter("Chachi t'aime bien", bot.user.avatarURL)
			.setThumbnail(msg.author.avatarURL)
			.setAuthor("Chachi", null , bot.user.avatarURL);
		msg.channel.send({embed});
	
	}else {
		console.log("fichier user not found"+userid);
	}
}
