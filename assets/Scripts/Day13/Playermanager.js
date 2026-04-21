const Emitter = require("mEmitter");
const { DIRECTION_CONSTANT } = require("Constant");

cc.Class({
    extends: cc.Component,

    properties: {
        player: cc.Node,
    },

    onLoad() {
    if (!Emitter.instance) {
        Emitter.instance = new Emitter();
    }
    },
    onEnable() {
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    },

    onShoot() {
        Emitter.instance.emit("ON_SHOOT", this.player);
    },

    onMove(data) {
        Emitter.instance.emit("ON_MOVE", data);
    },

    onDisable(){
        console.log("Disable");
    },
    
    onDestroy() {
        console.log("hihi");
    },

    onKeyDown(event) {
        switch(event.keyCode) {
        case cc.macro.KEY.space:
            this.onShoot();
            break;
        case cc.macro.KEY.up:
            let data = {
                node: this.player,
                direction: DIRECTION_CONSTANT.UP,
            }
            this.onMove(data);
            break;
        }
    },

    // update (dt) {},
});
