//because we all love each other, don't be mad, just accept everyone


exports.run = (bot, msg, args) => {


    let gay = Math.floor(Math.random() * 101);
    if (gay <= 25) {
        msg.channel.send(msg.author.toString() + " " + gay + "% 😢 ");
    }
    if (gay > 25 && gay < 50) {
        msg.channel.send(msg.author.toString() + " " +gay + "% <:gay_pride_flag:639762396532965379> chachi t'aime bien");
	    msg.react("😉");
    } 
    if (gay >= 50 && gay != 100) {
        msg.channel.send(msg.author.toString() + " " +gay + "% <:gay_pride_flag:639762396532965379> chachi en LOVE de TWA");
	msg.react("🥵");
    }
    if (gay === 100) {
        msg.channel.send(msg.author.toString() + " " +gay + "% <:gay_pride_flag:639762396532965379> Je voudrais que tu sois ma reine ce soir");
    	msg.react("<:pleading_face:753206940296937534>");
    }

}
