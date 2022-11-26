import Phaser from "phaser";

let bgend;
let end;



class End extends Phaser.Scene {
    constructor(test) {
        super({
            key: "End",
        });
    }

    preload() {
        
        this.load.image('bgend','src/image/Project/Background/ending.png')
        this.load.image('end','src/image/Project/Background/end.png')
       

    }
    
    create() {

        bgend = this.add.image(1280,360,'end').setScale(0.43)
        bgend = this.add.image(1280,890,'bgend').setScale(1.5)
        
       }

    update(delta, time) {
        //code
    }
}
export default End;