//because we all love each other, don't be mad, just accept everyone


exports.run = (bot, msg, args) => {

    let hetero = Math.floor(Math.random() * 101);
    console.log("dede"+hetero);
    if (hetero <= 25) {
        msg.channel.send(msg.author.toString() + " " + hetero + "% ton truc c'est les bites quoi <:man_shrugging:782663691488722965>");
        msg.react("🏳️‍🌈");
    }
    if (hetero > 25 && hetero < 50) {
        msg.channel.send(msg.author.toString() + " " + hetero + "%  c'est pas avec ça que tu seras un homme, mais bon . . .");
        msg.react("😕");

    }
    if (hetero >= 50 && hetero != 100) {
        msg.channel.send(msg.author.toString() + " " + hetero + "% bienvenue dans la normale zone");
        msg.react("😕");

    }
    if (hetero === 100) {
        msg.channel.send(msg.author.toString() + " " + hetero + "% ON AIME QUE LES GROS TARPES DE MEUFF NOUSSS");
        msg.react("🔥");

    }

}
