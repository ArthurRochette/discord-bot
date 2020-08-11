exports.run = (bot, msg, args) => {

	if(msg.member.hasPermission('ADMINISTRATOR')){
	msg.delete();
	msg.channel.bulkDelete(args[2]);
	}
}
