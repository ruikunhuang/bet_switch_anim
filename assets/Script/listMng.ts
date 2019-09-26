// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property([cc.Node])
    arrItemNode: cc.Node[] = [];

    @property(cc.Label)
    betLabel: cc.Label = null;



    private _bet: number = 0;
    @property
    get bet() {
        return this._bet;
    }
    set bet(value) {
        value = value > 4 ? 4 : value;
        this._bet = value < 1 ? 1 : value;
    }

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.updateItem(0)

    }

    start() {

    }

    btnAddClicked() {
        this.bet++;
        this.updateItem(0)


    }

    btnSubClicked() {
        this.bet--;
        this.updateItem(0);
        this._moveToCenter(0);
    }

    updateItem(sIndex: number) {
        for (let i = sIndex; i < this.arrItemNode.length; i++) {
            if (i < this.bet) {
                this.arrItemNode[i].active = true;
            } else {
                this.arrItemNode[i].active = false;
            }
        }
        this.betLabel.string = this.bet.toString();
    }

    _moveToCenter(sIndex: number) {
        for (let i = sIndex; i < this.arrItemNode.length; i++) {
            if (this.arrItemNode[i].active) {
                var action = cc.moveTo(0.1, 0, 0);
                this.arrItemNode[i].stopAllActions();
                this.arrItemNode[i].runAction(action);
            } 
        }

    }



    // update (dt) {}
}
