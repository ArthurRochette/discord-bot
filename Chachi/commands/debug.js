
let debugLog = ""

exports.run = (bot, msg,args ,debug) => {
    if(debug === undefined){
        
        if(msg.member.hasPermission('ADMINISTRATOR')){
            console.log(msg.author.username+" ask access to logs: AUTORISE")
            if(bot === undefined){
                debugLog = ""
                console.log("DebugLog Cleared by " + msg.author.username)
                msg.channel.send("All clean")
                return
            }
            if(debugLog === ""){
                msg.channel.send("No errors to report 🤐")
                return
            }else{
                msg.channel.send(debugLog)
            }
        }else{
            msg.channel.send({files:["./media/tomAccess.jpg"]})
            console.log(msg.author.username+" ask access to logs: REFUSE")
        }
    
    }else {
        msg.channel.send("Somethings broke in my head . . . 🤤")
        debugLog += "\n"+debug
        console.log("Debug Log created")
        return
    }

        



}
