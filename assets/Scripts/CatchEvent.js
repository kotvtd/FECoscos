const Emitter = require('mEmitter');

cc.Class({
    extends: cc.Component,

    properties: {
        animName: {
            type: cc.String,
            visible: false,
            default: null, 
        },
        player: {
            type: sp.Skeleton,
            visible: false,
            default: null, 
        },

    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        if(!Emitter.instance) {
            Emitter.instance = new Emitter();
        }
        Emitter.instance.registerEvent('HELLO', this.onHello.bind(this));
        Emitter.instance.registerEvent('WELCOME', this.onWelcome.bind(this));
        Emitter.instance.registerEvent('CLICK_ANIM', this.onClickAnim.bind(this));
    },
    start(){
        console.log(this.node);
        console.log(this.node.getChildByName("Player"));
        console.log(this.node.getChildByName("Player").getComponent(sp.Skeleton));
        this.player = this.node.getChildByName("Player").getComponent(sp.Skeleton);
        console.log(this.player);

    },
    onHello(data){
        console.log('HELLO data:', data);
    },
    onWelcome(data){
        console.log('WELCOME data:', data);
    },
    onClickAnim(data){
        console.log('CLICK_ANIM data:', data);
        this.player.setAnimation(0, data, true);
    },

    // update (dt) {},
});
