const Emitter = require('mEmitter');

cc.Class({
    extends: cc.Component,

    properties: {

    },
    start(){
        this.isMove = false; 
    },
    onEnable() {
        Emitter.instance.registerEvent('ON_MOVE', this.move.bind(this), this);
    },


    move(data) {
        console.log(data.direction);
    }   
});
