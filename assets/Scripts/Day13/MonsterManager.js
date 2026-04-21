const Emitter = require('mEmitter');

cc.Class({
    extends: cc.Component,

    properties: {
        monsterPrefab: cc.Prefab,
        monsterContainer: cc.Node,
        hp: {
            type: cc.Integer,
            isVisible: false,
            default: 100,
        },
        monsterList: {
            type: [cc.Node],
            default: []
        }
    },
    onLoad () {
        this.monster = this.spawnMonster();
    },
    start () {
        this.setProperties();
    },

    spawnMonster(){
        let monster = cc.instantiate(this.monsterPrefab);
        monster.parent = this.monsterContainer;
        monster.setPosition(0, 0);
        return monster;
    },

    setProperties(){
        let monsterMovement = this.monster.getComponent("MonsterMovement");
        let pointManager = this.monsterContainer.getComponent("PointManager");
        monsterMovement.initMonster(pointManager.upPoint, pointManager.downPoint);
    },
});
