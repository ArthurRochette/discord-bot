const Discord = require('discord.js');
const config = require('../config.json');

exports.run = (bot, msg, args) => {
    console.log("dede")
    const embed = new Discord.MessageEmbed()
        .setTitle("__List of commands__")
        .setAuthor(bot.user.username + "")
        .setColor(0x0086AE)
        .addField("```Music```", "__ __")
        .addField("play", "followed by a url (youtube only)")
        .addField("search", "followed by a terme to search")
        .addField("next","skip the actual sound")
        .addField("queue","check queue state")
        .addField("join", "bot joins your channel")
        .addField("leave","bot leaves channel")
        .addField("```More```", "__ __")
        .addField("dice", "roll a dice (6faces)")
        .addField("piece", "Heads or tails ?")
        .addField("gay", "Who is gayest ")
        .addField("hetero", "Who is normiest")
        .addField("```Other```","__ __")
        .addField("delete","Followed by the number of messages to delete")
        .addField("debug","Give last debug logs")
        .addField("debugclear","clear logs's var")
        
    try{
        msg.channel.send(embed);
    }
    catch(err){
        const debug = require("./debug")
        debug.run(bot, msg,args,err)
    }

}
