const Discord = require('discord.js');
const config = require('../config.json');

exports.run = (bot, msg, args) => {
    console.log("dede")
    const embed = new Discord.MessageEmbed()
        .setTitle("__Liste des commandes__")
        .setAuthor(bot.user.username + "")
        .setColor(0x0086AE)
        .addField("```Music```", "__ __")
        .addField("play", "Followed by url (youtube only)")
        .addField("search", "Followed by a research ")
        .addField("next","go to the next music")
        .addField("queue","check queue state")
        .addField("join", "bot joins channel")
        .addField("leave","bot leave channel")
        .addField("```More```", "__ __")
        .addField("dice", "roll dice (6faces)")
        .addField("piece", "Face or tail ?")
        .addField("gay", "Who is the gayest")
        .addField("hetero", "Who is the normy ??")
        .addField("```Other```","__ __")
        .addField("delete","Followed by the number of message to delete")
        
    try{
        msg.channel.send(embed);
    }
    catch(err){
        const debug = require("./debug")
        debug.run(bot, msg,args,err)
    }

}
