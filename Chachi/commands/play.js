const ytdl = require('../node_modules/ytdl-core');


exports.run = async (bot, msg, args) => {
    let dispatcher;
    let connection;

    if (!msg.member.voiceChannel) return msg.channel.send('Rejoins un channel avant ');

    let validate = ytdl.validateURL(args[2]);

    if (!validate) return msg.channel.send('url cassé bro');

    let info = await ytdl.getInfo(args[2]);
    playing = true;
    connection = await msg.member.voiceChannel.join();
    dispatcher = await connection.playStream(ytdl(args[2], { filter: 'audioonly' }));
    msg.channel.send(`Le gros sons du moment : ${info.title}`);
    return;
};
