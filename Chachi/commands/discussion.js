const cleverbot = require("cleverbot-free");


exports.run = (bot, msg, args) => {
    cleverbot(msg.content.substring(6)).then((result) => {
        msg.channel.send(result);
    }).catch((err) => {
        msg.react("🐛");
    });
}