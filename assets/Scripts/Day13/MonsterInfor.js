cc.Class({
    extends: cc.Component,

    properties: {
        hpBar:  cc.ProgressBar,
    },

    onLoad() { 
        this.maxHP = 100;
        this.curentHP = this.maxHP;
    },

    start () {

    },
    updateHPBar(){
        this.hpBar.progress = this.curentHP / this.maxHP;
    },

    getDame(dame){
        this.curentHP -= dame;
        if(dame <= 0){
            this.onDestroy.destroy();
        }
    },


});
