cc.Class({
    extends: cc.Component,

    properties: {
        hpBar: cc.ProgressBar,
    },

    onLoad() {
        this.maxHP = 100;
        this.currentHP = this.maxHP;
    },

    start() {

    },
    update(dt) {
        this.updateHPBar();
    },

    updateHPBar() {
        this.hpBar.progress = this.currentHP / this.maxHP;
    },

    getDame(dame) {
        this.currentHP -= dame;
        if (this.currentHP <= 0) {
            this.node.destroy();
        }
    },

    onCollisionEnter(other, self) {
        let dame = other.getComponent("BulletController").dame;
        console.log(dame);
        this.getDame(dame);
        other.node.destroy();
    }

});
