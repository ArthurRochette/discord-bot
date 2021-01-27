const ytdl = require('../node_modules/ytdl-core')
const yts = require('yt-search')


let isplaying = false
exports.turn = {
    turn : () => isplaying= !isplaying
};



exports.run = async (bot, msg, args) => {
    let dispatcher;
    let connection;

    if (!msg.member.voice.channel) {
        return msg.channel.send('Rejoins un channel avant');
    }

    let validate = ytdl.validateURL(args[2].toString());
    if (!validate) {
        console.log("Player error: " + args[2] + " borken url");
        return msg.channel.send('url cassé bro')
    }
    let info = await ytdl.getInfo(args[2].toString())

    const file = require("./queue");

    if (isplaying == false) {//if empty queue
        await msg.member.voice.channel.join()
        dispatcher = await bot.voice.createBroadcast()
        try{
            dispatcher.play(ytdl(args[2].toString(), { filter: 'audioonly' })).on("finish",() => {
                if(file.queue[0] == undefined){
                    const leave = require("./leave")
                    leave.run(dispatcher)
                }else {
                    file.queue.shift();
                    const play =  require("./play")
                    play()
                }
            });
        }catch(event){
            console.log("preevent!!"+event)
            const debug = require("./debug")
            debug.run(bot,msg,args,event)
            return
        }
        
        for (const connection of bot.voice.connections.values()) {
            connection.play(dispatcher)
        }
        isplaying = true
        args[2] = args[2].substring(28, 50)
        const video = await yts({ videoId: args[2] })
        
        duration = video.duration.seconds
        console.log(msg.author.username + "played a sound")
        setTimeout(function(){
            isplaying = false
            file.run(bot,msg,args,1)
        },duration*1000)
    } else {
        msg.channel.send("Ajouté a la queue !")
        file.queue.push(args[2])
    }

    return;
};
