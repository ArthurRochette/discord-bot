
const Discord = require('discord.js');
exports.run = async function (bot, msg, args) {
    console.log("enter")
    const yts = require('yt-search')

    const r = await yts(args.join(' '))

    const videos = r.videos.slice(0, 3)
    
    const embed = new Discord.MessageEmbed()
        .setColor(0x50E3C2)
        .setThumbnail("https://raw.githubusercontent.com/ArthurSenpaii/ChachiDB/master/Chachi/cromulonhead.png");
    videos.forEach(function (v) {
        embed.addField(v.title, `By ${v.author.name},\t duration: ${v.timestamp}, \t views: ${v.views}`);
    });

    msg.channel.send("Here your search señor", { embed });
    msg.channel.send("Answer by 1, 2, ou 3")

    const filter = m => !isNaN(m.content) && m.content < videos.length + 1 && m.content > 0; //check if the value answered by user is correct

    const collector = msg.channel.createMessageCollector(filter); //Create collector with filter

    collector.videos = videos;

    collector.once('collect', function (m) {
        let play = require('./play.js');
        args[2] =  [this.videos[parseInt(m.content) - 1].url];
        
        play.run(bot, msg, args);
        msg.channel.send([this.videos[parseInt(m.content) - 1].url]);
    });

};


