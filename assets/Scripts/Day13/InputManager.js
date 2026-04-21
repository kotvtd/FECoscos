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
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    },


    onDisable() {
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    },

    onDestroy() {
    },

    onKeyDown(event) {
        switch (event.keyCode) {
            case cc.macro.KEY.space:
                this.onShoot();
                break;
            case cc.macro.KEY.up:
                this.onMove({
                    node: this.player,
                    direction: DIRECTION_CONSTANT.UP,
                    isMove: true,
                });
                break;
            case cc.macro.KEY.down:
                this.onMove({
                    node: this.player,
                    direction: DIRECTION_CONSTANT.DOWN,
                    isMove: true,
                });
                break;
            case cc.macro.KEY.right:
                this.onMove({
                    node: this.player,
                    direction: DIRECTION_CONSTANT.RIGHT,
                    isMove: true,
                });
                break;
            case cc.macro.KEY.left:
                this.onMove({
                    node: this.player,
                    direction: DIRECTION_CONSTANT.LEFT,
                    isMove: true,
                });
                break;

        }
    },

    onKeyUp(event) {
        switch (event.keyCode) {
            case cc.macro.KEY.up:
                this.onMove({
                    node: this.player,
                    direction: DIRECTION_CONSTANT.UP,
                    isMove: false,
                });
                break;
            case cc.macro.KEY.down:
                this.onMove({
                    node: this.player,
                    direction: DIRECTION_CONSTANT.DOWN,
                    isMove: false,
                });
                break;
            case cc.macro.KEY.right:
                this.onMove({
                    node: this.player,
                    direction: DIRECTION_CONSTANT.RIGHT,
                    isMove: false,
                });
                break;
            case cc.macro.KEY.left:
                this.onMove({
                    node: this.player,
                    direction: DIRECTION_CONSTANT.LEFT,
                    isMove: false,
                });
                break;
            case cc.macro.KEY.e:
                this.onChangBullet();
                break;
        }
    },

    onShoot() {
        Emitter.instance.emit("ON_SHOOT", this.player);
    },

    onChangBullet() {
        Emitter.instance.emit("ON_CHANGE_BULLET");
    },

    onMove(data) {
        Emitter.instance.emit("ON_MOVE", data);
    },
});
