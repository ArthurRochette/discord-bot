exports.run = async (bot, msg, args) =>{
	console.log("adad")
	dispatcher = await bot.voice.createBroadcast()
	try{
		msg.guild.voice.connection.disconnect();
	}catch(err){
		console.log(err)
		const debug = require("./debug")
		debug.run(bot,msg,args,err)
	}
	
	
}


