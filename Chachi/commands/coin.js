
exports.run = (bot, msg, args) => {

    let face = Math.floor(Math.random() * 2)+1;
    if(face == 1){
        msg.channel.send("<:coin:788358806504603658> It's head !");
    }else {
        msg.channel.send("<:coin:788358806504603658> It's tail !");
    }
    

}
