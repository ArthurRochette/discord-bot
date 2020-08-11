const Discord = require('discord.js');
const config = require('../config.json');

exports.run = (bot, msg, args) => {
    const embed = new Discord.RichEmbed()
        .setTitle("__List of usable command__")
        .setAuthor(bot.user.username + "")
        .setColor(0x0086AE)
        .addField("```Music```", "__ __")
        .addField("play", "Followed by an URL, you can play youtube song")
        .addField("search", "Followed by the term you wan't to research")
        .addField("join", "bot join your channel")
        .addField("leave","bot leave the channel")
        .addField("```More```", "__ __")
        .addField("dice", "roll dice (6faces)")
        .addField("gay", "Who is the more gayy")
        .addField("justeprix", "a capitalist game")
        .addField("```Other```","__ __")
        .addField("delete","Followed by the number of elements to delete")
        
    msg.channel.send({ embed });

}
