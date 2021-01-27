const Discord = require('discord.js');

exports.run = (bot, msg, args) => {
    if(msg.guild.available){
        let random = Math.floor(Math.random()*Math.floor( msg.guild.members.cache.array().length))
        console.log(random)
        for(let member in msg.guild.members.cache.array()){
            console.log("bite"+member)
            if(random.toString() === member.toString()){
                console.log("enter")
                msg.channel.send(msg.guild.members.cache.array()[member].toString() +" est un fdp !!")
                return
            }

        }
    }

}
