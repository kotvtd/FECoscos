const Emitter = require('mEmitter');

cc.Class({
    extends: cc.Component,

    properties: {
        animName: {
            visible: false,
            default: "", 
        },
        player: {
            type: sp.Skeleton,
            visible: false,
            default: null, 
        },
        headPosittion: cc.Node,
        tailPosittion: cc.Node,

    },

    onLoad () {
        if(!Emitter.instance) {
            Emitter.instance = new Emitter();
        }
        this.events = [];
        this.register('CLICK_ANIM', 'onClickAnim');
        this.register('MODE_ANIM', 'onClickModeAnim');
    },
    start(){
        this.player = this.node.getChildByName("Player").getComponent(sp.Skeleton);
        this.headPosX = this.headPosittion.x;
        this.headPosY = this.headPosittion.y;
        this.tailPosX =  this.tailPosittion.x;
        this.tailPosY =  this.tailPosittion.y;
        this.scale = this.player.node.scale;
        this.anim = this.player.node.getComponent(cc.Animation);


    },
    onHello(data){
        console.log('HELLO data:', data);
    },

    onWelcome(data){
        console.log('WELCOME data:', data);
    },

    onClickAnim(data){
        this.player.setAnimation(0, data, true);
    },

    onClickModeAnim(data){
        this.stopMode();
        switch (data) {
            case "tween":
                this.tweenMode();
                break;
            case "timeline":
                this.timeLineMode();
                break;
            case "runaction":
                this.runActionMode();
                break;
            default:
                this.stopMode();
                break;
        }
    },

    tweenMode(){
        let baseScale = Math.abs(this.player.node.scale);
        cc.tween(this.player.node).repeatForever(
            cc.tween().call(() => this.flip(1))
            .to(2,{
                x: this.tailPosX,
                y: this.tailPosY,
                scale: baseScale*2
            },
            {
                easing: "sineIn" 
            }).delay(0.5).call(()=> this.flip(-1))
            .to(2,{
                x: this.headPosX,
                y: this.headPosY,
                scaleX: -baseScale/2,
                scaleY: baseScale/2
            },{
                easing: "bounceOut"
            }).delay(0.5)
        ).start();
    },

    timeLineMode(){
        let state = this.anim.play("Day3");
        state.wrapMode = cc.WrapMode.Loop;
        state.repeatCount = Infinity;
    },

    runActionMode(){
        let sequence = cc.sequence(
            cc.callFunc(()=>{
                this.flip(1);    
            }),
            cc.moveTo(2, this.tailPosX, this.tailPosY).easing(cc.easeIn(4)),
            cc.delayTime(0.5),
            cc.callFunc(()=>{
                this.flip(-1);
            }),
            cc.moveTo(2, this.headPosX, this.headPosY).easing(cc.easeOut(2.5)),
            cc.delayTime(0.5),
        )
        let action = cc.repeatForever(sequence);
        this.player.node.runAction(action);
    },

    stopMode(){
        this.player.node.stopAllActions();
        cc.Tween.stopAllByTarget(this.player.node);
        this.anim.stop();
        this.flip(1);
        this.player.node.setPosition(this.headPosittion.position);
        this.player.node.scale = this.scale
        this.player.node.angle = 0;
    },

    flip(scale){
        let scaleCheck = this.player.node.scaleX;
        if(scale > 0){
            if(scaleCheck < 0)
            this.player.node.scaleX *= -1;
        }
        if(scale < 0){
            this.player.node.scaleX *= -1;
        }
    },

    register(event, functionName){
        if(!this.events){
            this.events = [];
        }
        const bound = this[functionName].bind(this);
        this.events.push({event, callback: bound});
        Emitter.instance.registerEvent(event,bound);

    }
});
