
cc.Class({
    extends: cc.Component,

    properties: {
        sound: cc.AudioClip,
    },
    start () {

    },
    playSound: function(){
        cc.audioEngine.playEffect(this.sound, false);
    }
});
