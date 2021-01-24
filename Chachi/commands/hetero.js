//because we all love each other, don't be mad, just accept everyone


exports.run = (bot, msg, args) => {

    let hetero = Math.floor(Math.random() * 101);
    console.log("dede"+hetero);
    if (hetero <= 25) {
        msg.channel.send(msg.author.toString() + " " + hetero + "% I mean you're not hetero ");
        msg.react("🏳️‍🌈");
    }
    if (hetero > 25 && hetero < 50) {
        msg.channel.send(msg.author.toString() + " " + hetero + "% something interesting in you");
        msg.react("😕");

    }
    if (hetero >= 50 && hetero != 100) {
        msg.channel.send(msg.author.toString() + " " + hetero + "% welcome to the normy zone");
        msg.react("😕");

    }
    if (hetero === 100) {
        msg.channel.send(msg.author.toString() + " " + hetero + "% oNlY gIrLs HerE");
        msg.react("🔥");

    }

}
