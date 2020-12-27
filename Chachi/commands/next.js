
exports.run = async (bot, msg, args,playNext) => {
    msg.channel.send("je te next !<:bus:792864338192629791>")
    console.log(msg.author.username +" next played sound")
    var file = require("./queue")
    const { turn } = require("./play")
    turn.turn();
    file.run(bot,msg,args,1)
    
};
