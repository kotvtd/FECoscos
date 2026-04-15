
cc.Class({
    extends: cc.Component,

    properties: {
        sound: cc.AudioClip,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },
    playSound: function(){
        cc.audioEngine.playEffect(this.sound, false);
    }

    // update (dt) {},
});
