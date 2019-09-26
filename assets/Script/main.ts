const {ccclass, property} = cc._decorator;

@ccclass
export default class Helloworld extends cc.Component {


    onLoad(){
        // init logic
        cc.director.getPhysicsManager().enabled = true;
    }

    start () {

    }
}
