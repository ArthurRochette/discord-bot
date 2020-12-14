const search = require('../node_modules/yt-search');


exports.run = (bot, msg, args) => {
    console.log("dede");
    args[1] = null;
    msg.channel.send(args.join(' '));

    const search = require('../node_modules/yt-search');
    const r = search(args.join(' '));
    
    const videos = r.videos.slice(0, 5);


    videos.forEach(function (v) {
        resp += `**[${parseInt(i) + 1}]:** \`${v.title}\`\n`;
    });
    resp += `\n**Choisis entre \`1-${videos.length + 1}\``;

    msg.channel.send(resp);

    const filter = m => !isNaN(m.content) && m.content < videos.length + 1 && m.content > 0;

    const collector = msg.channel.createMessageCollector(filter);
    collector.videos = videos;

    collector.once('collect', function (m) {
        let play = require('./play.js');
        args[2] = "https://www.youtube.com" + [this.videos[parseInt(m.content) - 1].url];
        play.run(bot, msg, args);
        msg.channel.send("https://www.youtube.com" + [this.videos[parseInt(m.content) - 1].url]);
    });

    search(args.join(' '), function (err, res) {
        if (err) return console.log("Erreur search yt");


        let videos = res.videos.slice(0, 5);

        let resp = "";
        for (var i in videos) {
            resp += `**[${parseInt(i) + 1}]:** \`${videos[i].title}\`\n`;
        }
        resp += `\n**Choisis entre \`1-${videos.length}\``;

        msg.channel.send(resp);

        const filter = m => !isNaN(m.content) && m.content < videos.length + 1 && m.content > 0;

        const collector = msg.channel.createMessageCollector(filter);

        collector.videos = videos;

        collector.once('collect', function (m) {
            let play = require('./play.js');
            args[2] = "https://www.youtube.com" + [this.videos[parseInt(m.content) - 1].url];
            play.run(bot, msg, args);
            msg.channel.send("https://www.youtube.com" + [this.videos[parseInt(m.content) - 1].url]);
        });
    });

};
