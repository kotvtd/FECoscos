const Emitter = require('mEmitter');
const { DIRECTION_CONSTANT, ANIMATION_CONSTAN } = require("Constant");

cc.Class({
    extends: cc.Component,

    properties: {
        speed: 100,
        maxY: 100,
        minY: -300,
        maxX: 250,
        minX: -200,
    },
    start() {
        this.isUp = false;
        this.isRight = false;
        this.isMove = false;
        this.dirX = 0;
        this.dirY = 0;
        this.animation = this.node.getComponent("sp.Skeleton");
        this.currentAnim = ANIMATION_CONSTAN.IDLE;
    },
    onEnable() {
        Emitter.instance.registerEvent('ON_MOVE', this.move.bind(this), this);
    },

    update(dt) {
        this.updatePosition(dt);
        this.updateAnimation();
    },

    updateAnimation() {
        let anim = "";
        if (this.dirX === 0 && this.dirY === 0) {
            anim = ANIMATION_CONSTAN.IDLE;
        } else {
            anim = ANIMATION_CONSTAN.RUN;
        }

        if (anim === this.currentAnim) {
            return;
        }
        this.currentAnim = anim;
        this.animation.setAnimation(0, anim, true);
    },

    updatePosition(dt) {
        this.node.x += this.dirX * this.speed * dt;
        this.node.y += this.dirY * this.speed * dt;
        this.node.y = Math.max(this.minY, Math.min(this.maxY, this.node.y));
        this.node.x = Math.max(this.minX, Math.min(this.maxX, this.node.x));
    },

    move(data) {
        switch (data.direction) {
            case DIRECTION_CONSTANT.UP:
                this.dirY = data.isMove ? 1 : 0;
                break;

            case DIRECTION_CONSTANT.DOWN:
                this.dirY = data.isMove ? -1 : 0;
                break;

            case DIRECTION_CONSTANT.RIGHT:
                this.dirX = data.isMove ? 1 : 0;
                break;

            case DIRECTION_CONSTANT.LEFT:
                this.dirX = data.isMove ? -1 : 0;
                break;
        }
    }
});
