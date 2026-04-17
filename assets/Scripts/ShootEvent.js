
const Emitter = require('mEmitter');
cc.Class({
    extends: cc.Component,

    properties: {
        animName: {
            type: cc.String,
            visible: false,
            default: null,
        }
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
    }

    // update (dt) {},
});
