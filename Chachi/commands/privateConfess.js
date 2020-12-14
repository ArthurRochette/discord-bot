const config = require("../config.json");


exports.run = (bot, msg, args) => {
    const channel = bot.channels.find(channel => channel.id === config.confessChannel);
    const message = msg.content.substring(7);
    if(message.lenght >2000){
        channel.send("Mon père, ");
        while(message){
            const firstChar = "";
            for(let i=0; i<message.lenght;i++){
                firstChar += message[i];
            }
            channel.send(firstChar);
            message.substring(firstChar);
        }
    }
    channel.send("Mon père, "+message);

}
