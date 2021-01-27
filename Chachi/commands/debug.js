
let debugLog = ""

exports.run = (bot, msg,args ,debug) => {
    if(debug === undefined){
        
        if(msg.member.hasPermission('ADMINISTRATOR')){
            console.log(msg.author.username+" a demandé accès aux logs: AUTORISE")
            if(bot === undefined){
                debugLog = ""
                console.log("DebugLog Cleared by " + msg.author.username)
                msg.channel.send("C'est tout propre !")
                return
            }
            if(debugLog === ""){
                msg.channel.send("Aucun rapport d'erreur 🤐")
                return
            }else{
                msg.channel.send(debugLog)
            }
        }else{
            msg.channel.send({files:["./media/tomAccess.jpg"]})
            console.log(msg.author.username+" a demandé accès aux logs: REFUSE")
        }
    
    }else {
        msg.channel.send("Quelque chose c'est cassé dans ma tête . . . 🤤")
        debugLog += "\n"+debug
        console.log("Debug Log created")
        return
    }

        



}
