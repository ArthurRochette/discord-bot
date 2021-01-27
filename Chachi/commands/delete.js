exports.run = (bot, msg, args) => {

	if(msg.member.hasPermission('ADMINISTRATOR')){
	msg.channel.bulkDelete(parseInt(args[2]) + 1);
	
	}else{
		msg.channel.send({files:["./media/tomAccess.jpg"]})
	}
}
