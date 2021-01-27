//because we all love each other, don't be mad, just accept everyone


exports.run = (_callback) => {


    let gay = Math.floor(Math.random() * 101);
    if (gay <= 25) {
        _callback(gay+"% 😢")
    }
    if (gay > 25 && gay < 50) {
        _callback(gay+"% chachi t'aime bien 😏")
    } 
    if (gay >= 50 && gay != 100) {
        msg.channel.send(msg.author.toString() + " " +gay + "% <:gay_pride_flag:639762396532965379> chachi en LOVE de TWA");
        _callback(gay+"% chachi en LOVE de TWA 🥵")
    }
    if (gay === 100) {
        _callback(gay + "% Tu serais le roi sur la planète de Chachi !")
    }

}
