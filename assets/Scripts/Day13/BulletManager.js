const { CONSTANT } = require ("Constant");
const Emitter = require("mEmitter");

cc.Class({
    extends: cc.Component,

    properties: {
        bomb: cc.Prefab,
        axe: cc.Prefab,
        star: cc.Prefab,
    },

    onLoad () {
        this.isBomb = false;
        this.isAxe = false;
        this.isStar = false;
        this.prefab = this.bomb;
        if (!Emitter.instance) {
            Emitter.instance = new Emitter();
        }
        Emitter.instance.registerEvent('ON_SHOOT', this.spawnBullet.bind(this), this);
    },

    start () {

    },

    chooseBullet(event, bullet) {
        switch(bullet){
            case CONSTANT.AXE:
                this.prefab = this.axe;
                break;
            case CONSTANT.BOMB:
                this.prefab = this.bomb;
                break;
            case CONSTANT.STAR:
                this.prefab = this.star;
                break;
        };
    },

    spawnBullet(data) {
        let bullet = cc.instantiate(this.prefab);
        let pointBullet = data.getChildByName('ShootPoint');
        const posFire = this.node.convertToNodeSpaceAR(pointBullet.convertToWorldSpaceAR(cc.v2(0, 0))); 
        bullet.parent = this.node;
        bullet.setPosition(posFire);
    },

    
});


