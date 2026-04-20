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

    start() {
        this.isGoUp = false;
        this.speed = 100;
    },
    update(dt) {
        this.moveToPatrol(dt);
    },

    initMonster(up, down) {
        this.upPoint = up;
        this.downPoint = down;
    },

    moveToPatrol(dt) {
        if (!this.upPoint || !this.downPoint) {
            return;
        }
        let position = this.node.position;
        if (this.isGoUp) {
            position.y += this.speed * dt;
            if (position.y >= this.upPoint.y) {
                position.y = this.upPoint.y;
                this.isGoUp = false;
            }
        } else {
            position.y -= this.speed * dt;
            if (position.y <= this.downPoint.y) {
                position.y = this.downPoint.y;
                this.isGoUp = true;
            }
        }
        this.node.setPosition(position);
    }
});
