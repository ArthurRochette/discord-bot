exports.run = (bot, msg, args) => {

    msg.member.voice.channel.join().then(connection => console.log("connected on user : " + msg.author.id)).catch(console.error);

}