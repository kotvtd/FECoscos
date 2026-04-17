
cc.Class({
    extends: cc.Component,

    properties: {
        isRight: true,
        mp: 100,
        speed: 100,
        nameCharacter: "",
        labelName: cc.Label,
        directionX: 0,
        directionY: 0,
        moveTime: 0,
        progressBar: cc.ProgressBar,
        isMoving: false,
        anim: sp.Skeleton,
        isAnimation: true,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},
    onLoad: function() {
        this.updateName();
        this.anim.setAnimation(0, "idle", true);
    },

    start () {
        cc.profiler.showStats();
    },

    updateSpeed: function(){
        this.speed -= 100 * (1 - this.mp / 100);
    },

    updateMP: function(dt){
        this.mp -= 10 * dt;
        if(this.mp <=0 )
        {
            this.node.active = false;
        }
    },

    updatePositionX: function(dt){
        if(this.moveTime > 0 ){
            this.moveTime -= dt;
            this.node.x += this.directionX * this.speed * dt;
            if(this.node.x > 1490){
                this.node.x = 1490;
            }
            if(this.node.x < 64){
                this.node.x = 64;    
            }
        }
    },
    
    updatePositionY: function(dt){
        if(this.moveTime > 0){
            this.moveTime -= dt;
            this.node.y += this.directionY * this.speed * dt;
            if(this.node.y > 480){
                this.node.y = 480;
            }
            if(this.node.y < 2){
                this.node.y = 2;
            }
        }
    },

    update: function (dt) {
        this.progressBar.progress = this.mp / 100;
        this.updatePositionX(dt);
        this.updatePositionY(dt);
        if(this.isMoving){
            this.updateMP(dt);
        }
        if(this.moveTime <= 0){
            this.directionX = 0;
            this.directionY = 0;
            this.isMoving = false;
            if(this.isAnimation === false){
                this.isAnimation = true;
                this.anim.setAnimation(0, "idle", true);
            }
        }
    },

    updateName: function(){
        this.labelName.string = this.nameCharacter;
    },

    flipCharacter: function(){
        this.isRight = !this.isRight;
        this.node.scaleX *= -1;
        this.labelName.node.scaleX *= -1;
        this.progressBar.node.scaleX *= -1;
    },

    moveCharacter: function(event, direction){
        if(!this.isMoving){
            this.anim.setAnimation(0, "walk", true);
            this.isAnimation = false;
        }
        if(direction === "right"){
            if(!this.isRight){
                this.flipCharacter();
            }
            this.directionX = 1;
        } else if(direction === "left"){
            if(this.isRight){
                this.flipCharacter();
            }
            this.directionX = -1;
        } else if(direction === "up"){
            this.directionY = 1;
        } else if(direction === "down"){
            this.directionY = -1;
        }
        this.isMoving = true;
        this.moveTime = 3;
    },

});
