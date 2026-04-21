const Emitter = require('mEmitter');

cc.Class({
    extends: cc.Component,

    properties: {
        speed: 300,
        dame: 10,

    },

    onLoad () {
        this.distance = 300;
        this.timeActive = 5;
    },

    start () {
        this.tweenBullet();
    },

    update(dt){
        if(this.timeActive <= 0) {
            this.node.destroy();
            return;
        }
        this.node.x += this.speed * dt;
        this.timeActive -= dt;
    },

    onDestroy(){
        cc.Tween.stopAllByTarget(this.node)
    },

    tweenBullet(){
        //let time = this.distance / this.speed;
        cc.tween(this.node).repeatForever(
            cc.tween().by(0.5, { angle: 180 })
        ).start();
    },

});
