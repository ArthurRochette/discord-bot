exports.run = (bot, msg, args) => {

    var channel = msg.member.voiceChannel;
    channel.join().then(connection => console.log("connected on user : " + msg.author.id)).catch(console.error);

}