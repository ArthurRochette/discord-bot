
exports.run = (_callback) => {

    let face = Math.floor(Math.random() * 2)+1;
    if(face == 1){
        _callback("C'est face !")
    }else {
        _callback("C'est pile !")
    }
    

}
