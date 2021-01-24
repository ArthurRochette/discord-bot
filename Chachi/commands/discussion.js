const cleverbot = require("cleverbot-free");


exports.run = (bot, msg, args) => {
    cleverbot(msg.content.substring(6)).then((result) => {
        msg.channel.send(result);
    }).catch((err) => {
        debug(bot, msg,args, err)
        msg.react("🐛");
    });
}