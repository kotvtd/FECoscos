const { BULLET_CONSTANT } = require("Constant");
const Emitter = require("mEmitter");

const BulletConfig = cc.Class({
    name: "BulletConfig",
    properties: {
        type: "",
        prefab: cc.Prefab,
        fireRate: 1
    }
});
cc.Class({
    extends: cc.Component,

    properties: {
        bulletConfig: {
            type: [BulletConfig],
            default: []
        },
    },

    onLoad() {
        this.bulletMap = {};
        this.bulletConfig.forEach(bullet => {
            this.bulletMap[bullet.type] = bullet;
        });
        this.currentType = BULLET_CONSTANT.STAR;
        this.currentConfig = this.bulletMap[this.currentType];
        this.indexBullet = 2;
        this.fireRate = 2;
        this.isFire = false;

        if (!Emitter.instance) {
            Emitter.instance = new Emitter();
        }
        Emitter.instance.registerEvent('ON_SHOOT', this.spawnBullet.bind(this), this);
        Emitter.instance.registerEvent('ON_CHANGE_BULLET', this.changeBullet.bind(this), this);
    },


    update(dt) {
        if (this.isFire) {
            this.fireRate -= dt;
            if (this.fireRate <= 0) {
                this.isFire = false;
                this.fireRate = this.currentConfig.fireRate;
            }
        }
    },

    changeBullet() {
        this.indexBullet++;

        if (this.indexBullet >= this.bulletConfig.length) {
            this.indexBullet = 0;
        }

        this.currentConfig = this.bulletConfig[this.indexBullet];
        this.fireRate = this.currentConfig.fireRate;
    },

    spawnBullet(data) {
        if (this.isFire) {
            return;
        }
        this.isFire = true;
        let bullet = cc.instantiate(this.currentConfig.prefab);
        let pointBullet = data.getChildByName('ShootPoint');
        const posFire = this.node.convertToNodeSpaceAR(pointBullet.convertToWorldSpaceAR(cc.v2(0, 0)));
        bullet.parent = this.node;
        bullet.setPosition(posFire);
    },


});


