cc.Class({
    extends: cc.Component,

    properties: {
        upPoint: {
            type: cc.Node,
            isVisible: false,
            default: null
        },
        downPoint: {
            type: cc.Node,
            isVisible: false,
            default: null
        }
    },


    start () {

    },

    initMonster(up, down){
        this.upPoint = up;
        this.downPoint = down;
        console.log("up: " + this.upPoint.name);
        console.log("down: " + this.downPoint.name);
    }
});
