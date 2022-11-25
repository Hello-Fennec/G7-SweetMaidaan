import Phaser from "phaser";

let bg;
let backbutton;

let logo;


class CreditScene extends Phaser.Scene {
    constructor(test) {
        super({
            key: "CreditScene",
        });
    }

    preload() {
        this.load.image('backbutton','src/image/Project/backbutton.png')
        this.load.image('bg2','src/image/Project/Background/bgcredit.png')

    }
    
    create() {

        bg = this.add.image(1280,720,'bg2')

        backbutton = this.add.image(300,1300,'backbutton').setScale(0.65)
        backbutton.setInteractive();
        
        backbutton.on("pointerover",()=>{
            backbutton.setScale(0.7)
        })

        backbutton.on("pointerout",()=>{
            backbutton.setScale(0.65)
        })


        backbutton.on("pointerdown",()=>{
            this.scene.start("MenuScene")
        });


    }

    update(delta, time) {
        //code
    }
}
export default CreditScene;