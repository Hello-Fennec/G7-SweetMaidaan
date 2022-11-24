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
        this.load.image('creditButton','src/image/play.png')
        this.load.image('quitButton','src/image/play.png')
        this.load.image('bg','src/image/Project/Background/bgmenu.jpg')
        this.load.image('logo','src/image/Project/Logo.png')

    }
    
    create() {

        bg = this.add.image(1280,720,'bg')
        
        logo = this.add.image(1280,190,'logo').setScale(2)


        playButton = this.add.image(1280,500,'playButton').setScale(0.42)
        playButton.setInteractive();
        
        playButton.on("pointerover",()=>{
            playButton.setScale(0.48)
        })

        playButton.on("pointerout",()=>{
            playButton.setScale(0.42)
        })


        playButton.on("pointerdown",()=>{
            this.scene.start("Scene1")
        });




        creditButton = this.add.image(1280,750,'creditButton').setScale(0.42)
        creditButton.setInteractive();
        
        creditButton.on("pointerover",()=>{
            creditButton.setScale(0.48)
        })

        creditButton.on("pointerout",()=>{
            creditButton.setScale(0.42)
        })


        creditButton.on("pointerdown",()=>{
            this.scene.start("WorkShop2")
        });



        quitButton = this.add.image(1280,1000,'quitButton').setScale(0.42)
        quitButton.setInteractive();
        
        quitButton.on("pointerover",()=>{
            quitButton.setScale(0.48)
        })

        quitButton.on("pointerout",()=>{
            quitButton.setScale(0.42)
        })


        quitButton.on("pointerdown",()=>{
            this.scene.start("WorkShop2")
        });
    }

    update(delta, time) {
        //code
    }
}
export default MenuScene;