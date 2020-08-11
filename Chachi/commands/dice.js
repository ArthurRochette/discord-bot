exports.run = (bot, msg, args) => {
    let dice = Math.floor(Math.random() * 6) + 1;
    msg.channel.send("<:game_die:504755076896653322> " + dice);

}
