
cc.Class({
    extends: cc.Component,

    properties: {
        listAnimation: cc.Node,
        prefab: cc.Prefab,
        
        view: {type:cc.Node,
            visible: false,
            default: null,

        },
        content: {type:cc.Node,
            visible: false,
            default: null,

        },
        animPlayer: {type:sp.Skeleton,
            visible: false,
            default: null,

        },
        names: {
            type:[cc.String],
            visible: false,
            default: [],

        },
    },
    // LIFE-CYCLE CALLBACKS:
    onLoad () {
        this.view = this.listAnimation.getChildByName("view");
        this.content = this.view.getChildByName("content");
        animPlayer = this.node.getComponent(sp.Skeleton);
    },

    start () {
        let anims = animPlayer.skeletonData._skeletonJson.animations;
        this.names = Object.keys(anims);
        for(let i = 0; i < this.names.length; i++){
            let item = cc.instantiate(this.prefab);
            item.getChildByName("Background").getChildByName("Name").getComponent(cc.Label).string = this.names[i];
            item.parent = this.content;
        }

    },
    getListAnimation(){
    }
    // update (dt) {},
});
