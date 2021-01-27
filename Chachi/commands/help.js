const Discord = require('discord.js');
const config = require('../config.json');

exports.run = (bot, msg, args) => {
    console.log("dede")
    const embed = new Discord.MessageEmbed()
        .setTitle("__Liste des commandes__")
        .setAuthor(bot.user.username + "")
        .setColor(0x0086AE)
        .addField("```Music```", "__ __")
        .addField("play", "Suivi de l'url (youtube only)")
        .addField("search", "Suivi du terme à rechercher")
        .addField("next","passe a la musique suivante")
        .addField("queue","check l'etat de la queue")
        .addField("join", "bot rejoins ton channel")
        .addField("leave","bot quitte le channel")
        .addField("```More```", "__ __")
        .addField("dice", "lance un dé (6faces)")
        .addField("piece", "pile ou face ?")
        .addField("gay", "Qui est le plaus gayy")
        .addField("hetero", "Qui est le plus normy ??")
        .addField("```Other```","__ __")
        .addField("delete","Suivi du nombre de message a supprimer")
        
    try{
        msg.channel.send(embed);
    }
    catch(err){
        const debug = require("./debug")
        debug.run(bot, msg,args,err)
    }

}
