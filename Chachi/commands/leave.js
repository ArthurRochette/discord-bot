exports.run = async (bot, msg, args) =>{
	console.log("adad")
	dispatcher = await bot.voice.createBroadcast()
	try{
		dispatcher.play("./media/Au revoir.mp3").on('finish',()=>{
			console.log("dede")
			msg.guild.voice.connection.disconnect();
		return
			
		})
	}catch(err){
		console.log(err)
		const debug = require("./debug")
		debug.run(bot,msg,args,err)
	}
	
	
}


