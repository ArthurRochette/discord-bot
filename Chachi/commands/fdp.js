const Discord = require('discord.js');
const config = require('../config.json');

exports.run = (bot, msg, args) => {
    if(msg.guild.available){
        let random = Math.floor(Math.random()*Math.floor( msg.guild.members.cache.array().length))
        for(let member in msg.guild.members.cache.array()){
            if(random.toString() === member.toString()){
                msg.channel.send(msg.guild.members.cache.array()[member].toString() +" our the winner !!")
                return
            }

        }
    }

}
Z