var queue = [];
exports.queue = queue;

exports.run = async (bot, msg, args,playNext) => {
    if(queue == undefined||queue.length == 0){
        msg.channel.send("Ma queue est vide <:eggplant:792858578486034432>")
        return;
    }
    

    if (playNext != undefined){
        
        let play = require('./play.js');
        args[2] =  queue[0];    //format args with the oldest queue member
        queue.shift();//delete first element of array
        play.run(bot, msg, args);
        msg.channel.send("Playing:"+args[2])
    }else {
        msg.channel.send(queue)//a mettre en boté
    }
};
