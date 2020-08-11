//because we all love each other, don't be mad, just accept everyone


exports.run = (bot, msg, args) => {

    let gay = Math.floor(Math.random() * 101);
    if (gay <= 25) {
        msg.channel.send(msg.author + " " + gay + "% 😢 ");
    }
    if (gay > 25 && gay < 50) {
        msg.channel.send(msg.author + " " +gay + "% <:gay_pride_flag:639762396532965379> chachi is interested");
	    msg.react("😉");
    } 
    if (gay >= 50 && gay != 100) {
        msg.channel.send(msg.author + " " +gay + "% <:gay_pride_flag:639762396532965379> chachi is very interested");
	msg.react("💕");
    }
    if (gay === 100) {
        msg.channel.send(msg.author + " " +gay + "% <:gay_pride_flag:639762396532965379> you're my queen/king");
    	msg.react("<:rainbow_flag:654242521907462167:>");
    }

}
