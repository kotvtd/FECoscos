
cc.Class({
    extends: cc.Component,

    onLoad() {
        this.init();
    },
    // start () {
    // },
    init() {
        let manager = cc.director.getCollisionManager();
        manager.enabled = true;
        manager.enabledDebugDraw = false;
    }
});
