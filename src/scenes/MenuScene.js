import Phaser from "phaser";

let bg;
let playButton;
let creditButton;
let quitButton;
let logo;


class MenuScene extends Phaser.Scene {
    constructor(test) {
        super({
            key: "MenuScene",
        });
    }

    preload() {
        this.load.image('playButton','src/image/Project/playbutton.png')
        this.load.image('creditButton','src/image/Project/creditbutton.png')
        this.load.image('quitButton','src/image/Project/qbutton.png')
        this.load.image('bg','src/image/Project/Background/bgmenu.jpg')
        this.load.image('logo','src/image/Project/logo.png')

    }
    
    create() {

        bg = this.add.image(1280,720,'bg').setScale(1.05)
        
        logo = this.add.image(1280,250,'logo').setScale(3)


        playButton = this.add.image(1280,600,'playButton').setScale(0.75)
        playButton.setInteractive();
        
        playButton.on("pointerover",()=>{
            playButton.setScale(0.8)
        })

        playButton.on("pointerout",()=>{
            playButton.setScale(0.75)
        })


        playButton.on("pointerdown",()=>{
            this.scene.start("GameScene")
        });




        creditButton = this.add.image(1280,900,'creditButton').setScale(0.75)
        creditButton.setInteractive();
        
        creditButton.on("pointerover",()=>{
            creditButton.setScale(0.8)
        })

        creditButton.on("pointerout",()=>{
            creditButton.setScale(0.75)
        })


        creditButton.on("pointerdown",()=>{
            this.scene.start("WorkShop2")
        });



        quitButton = this.add.image(1280,1200,'quitButton').setScale(0.75)
        quitButton.setInteractive();
        
        quitButton.on("pointerover",()=>{
            quitButton.setScale(0.8)
        })

        quitButton.on("pointerout",()=>{
            quitButton.setScale(0.75)
        })


        quitButton.on("pointerdown",()=>{
            this.scene.start("Exit")
        });
    }

    update(delta, time) {
        //code
    }
}
export default MenuScene;