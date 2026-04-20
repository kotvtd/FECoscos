const Emitter = require('mEmitter');
cc.Class({
    extends: cc.Component,
    properties: {
        animName: {
            visible: false,
            default: "",
        },
        target: cc.Node,
    },
    onLoad(){
    },

    start () {
        this.animName = this.node.getChildByName("Background").getChildByName("Name").getComponent(cc.Label).string;
    },

    onHello(){
        Emitter.instance.emit('HELLO', "hellooooooo");
    },

    onWelcome(){
        Emitter.instance.emit('WELCOME', "wellcome to my world");
    },

    onClickAnim(){
        Emitter.instance.emit('CLICK_ANIM', this.animName);
    },

    onClickModeAnim(event, mode){
        Emitter.instance.emit("MODE_ANIM", mode);
    },

    removeAllEvent(target){
        Emitter.instance.removeAllEvent(this.target.getComponent('CatchEvent'));
    }
});
