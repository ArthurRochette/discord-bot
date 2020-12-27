//because we all love each other, don't be mad, just accept everyone


exports.run = (bot, msg, args) => {

    if(msg.author.id === "202898061385662465"){
        let gay = Math.floor(Math.random() * 21) + 80;
        msg.channel.send(msg.author + " " +gay + "% <:gay_pride_flag:639762396532965379> Un seul Oscar peut atteindre ce score");
        msg.react("<:regional_indicator_o:762778457082953740>");
        msg.react("<:regional_indicator_s:762778645747335198>");
        msg.react("<:regional_indicator_c:762778750688821280>");
        msg.react("<:regional_indicator_a:762778835418087484>");
        msg.react("<:regional_indicator_r:762779106524921896>");
        return;
    }

    let gay = Math.floor(Math.random() * 101);
    if (gay <= 25) {
        msg.channel.send(msg.author + " " + gay + "% 😢 ");
    }
    if (gay > 25 && gay < 50) {
        msg.channel.send(msg.author + " " +gay + "% <:gay_pride_flag:639762396532965379> chachi t'aime bien");
	    msg.react("😉");
    } 
    if (gay >= 50 && gay != 100) {
        msg.channel.send(msg.author + " " +gay + "% <:gay_pride_flag:639762396532965379> chachi en LOVE de TWA");
	msg.react("🥵");
    }
    if (gay === 100) {
        msg.channel.send(msg.author + " " +gay + "% <:gay_pride_flag:639762396532965379> Je voudrais que tu sois ma reine ce soir");
    	msg.react("<:pleading_face:753206940296937534>");
    }

}
