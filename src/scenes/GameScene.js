import Phaser from "phaser";

let bg;
let bg1;
let platform;

let platforma1;
let platforma2;
let platforma3;
let platforma4;
let platforma5;
let platforma6;
let platforma7;

let platformb1;
let platformb2;
let platformb3;
let platformb4;
let platformb5;

let platform1;
let platform2;
let platform3;
let platform4;
let platform5;
let fox;
let foxAni;

let singbg;
let crown

let A;
let D;
let Space;

class GameScene extends Phaser.Scene {
    constructor(test) {
        super({
            key: "GameScene",
        });
    }

    preload() {
        this.load.image('bggame', 'src/image/Project/bggame.png')
        this.load.image('bggame1', 'src/image/Project/05-brownie-vulcano.png')
        this.load.image('p0', 'src/image/Project/platform.png')///ซ้ายบน
        this.load.image('p1', 'src/image/Project/platform0.png')///พื้นล่าง
        this.load.image('p2', 'src/image/Project/platform2.png')///พื้นบน
        this.load.image('p3', 'src/image/Project/chocoMidAlt.png')///ขวาล่างบน
        this.load.image('p4', 'src/image/Project/platform4.png')///
        //this.load.image('p4', 'src/image/Project/platform4.png')

        this.load.image('crown', 'src/image/Project/kings_crown.png')
        this.load.image('singbg', 'src/image/Project/sing1.png')

        this.load.spritesheet('fox', 'src/image/Project/player3.png', { frameWidth: 175, frameHeight: 223 });

    }

    create() {
        bg = this.add.image(1280, 720, 'bggame').setScale(1.5)
        bg1 = this.add.image(1280, 720, 'bggame1').setScale(2)


        platforma1 = this.physics.add.sprite(200, 1420, 'p1').setScale(0.3).setCollideWorldBounds(true).setImmovable(true);
        singbg = this.physics.add.sprite(400, 1320, 'singbg').setScale(3);
        platforma2 = this.physics.add.sprite(900, 1420, 'p1').setScale(0.3).setCollideWorldBounds(true).setImmovable(true);
        platforma3 = this.physics.add.sprite(1600, 1420, 'p1').setScale(0.3).setCollideWorldBounds(true).setImmovable(true);
        platforma4 = this.physics.add.sprite(2400, 1420, 'p1').setScale(0.3).setCollideWorldBounds(true).setImmovable(true);
        platforma5 = this.physics.add.sprite(2400, 250, 'p1').setScale(0.3).setCollideWorldBounds(true).setImmovable(true);
        platforma6 = this.physics.add.sprite(200, 700, 'p1').setScale(0.3).setCollideWorldBounds(true).setImmovable(true);

        platformb1 = this.physics.add.sprite(800, 800, 'p3').setScale(1).setCollideWorldBounds(true).setImmovable(true);
        platformb2 = this.physics.add.sprite(1100, 350, 'p3').setScale(1).setCollideWorldBounds(true).setImmovable(true);
        platformb3 = this.physics.add.sprite(800, 500, 'p3').setScale(1).setCollideWorldBounds(true).setImmovable(true);
        platformb4 = this.physics.add.sprite(1500, 350, 'p3').setScale(1).setCollideWorldBounds(true).setImmovable(true);
        platformb5 = this.physics.add.sprite(800, 800, 'p3').setScale(1).setCollideWorldBounds(true).setImmovable(true);

        platform1 = this.physics.add.sprite(2300, 1200, 'p2').setScale(0.2).setCollideWorldBounds(true).setImmovable(true);
        platform2 = this.physics.add.sprite(1800, 1010, 'p2').setScale(0.2).setCollideWorldBounds(true).setImmovable(true);
        platform3 = this.physics.add.sprite(2400, 850, 'p2').setScale(0.2).setCollideWorldBounds(true).setImmovable(true);
        platform4 = this.physics.add.sprite(1300, 900, 'p2').setScale(0.2).setCollideWorldBounds(true).setImmovable(true); platformb1

        //platform1 = this.physics.add.sprite(200, 1420, 'p1').setScale(0.3).setCollideWorldBounds(true).setImmovable(true);
        //platform1 = this.physics.add.sprite(200, 1420, 'p1').setScale(0.3).setCollideWorldBounds(true).setImmovable(true);
        //platform1 = this.physics.add.sprite(2914, 1370, 'p1').setScale(0.5).setCollideWorldBounds(true).setImmovable(true);


        // platform3 = this.physics.add.sprite(2300, 1050, 'p3').setScale(0.25).setCollideWorldBounds(true).setImmovable(true);

        // platform2 = this.physics.add.sprite(1800, 850, 'p2').setScale(0.35).setCollideWorldBounds(true).setImmovable(true);
        // platform21 = this.physics.add.sprite(880, 750, 'p2').setScale(0.35).setCollideWorldBounds(true).setImmovable(true);
        // platform22 = this.physics.add.sprite(1280, 350, 'p2').setScale(0.35).setCollideWorldBounds(true).setImmovable(true);
        // platform23 = this.physics.add.sprite(1100, 350, 'p2').setScale(0.35).setCollideWorldBounds(true).setImmovable(true);

        // platform = this.physics.add.sprite(53, 620, 'p0').setScale(1.5).setCollideWorldBounds(true).setImmovable(true);
        // platform0 = this.physics.add.sprite(159, 620, 'p0').setScale(1.5).setCollideWorldBounds(true).setImmovable(true);

        crown = this.add.image(2280, 150, 'crown')

        // fox = this.physics.add
        //     .sprite(700, 250, "fox")
        //     .setCollideWorldBounds(true)
        //     .setGravityY(500);

        fox = this.physics.add.sprite(200, 1000, 'fox').setCollideWorldBounds(true).setGravityY(400).setScale(0.5);
        this.anims.create({
            key: "foxAni",
            frames: this.anims.generateFrameNumbers("fox", {
                start: 0,
                end: 4,
            }),
            duration: 800,
            repeat: -1,
        });


        this.physics.add.collider(fox, platforma1);
        this.physics.add.collider(fox, platforma2);
        this.physics.add.collider(fox, platforma3);
        this.physics.add.collider(fox, platforma4);
        this.physics.add.collider(fox, platforma5);
        this.physics.add.collider(fox, platforma6);

        this.physics.add.collider(fox, platform1);
        this.physics.add.collider(fox, platform2);
        this.physics.add.collider(fox, platform3);
        this.physics.add.collider(fox, platform4);
        this.physics.add.collider(fox, platform5);

        this.physics.add.collider(fox, platformb1);
        this.physics.add.collider(fox, platformb2);
        this.physics.add.collider(fox, platformb3);
        this.physics.add.collider(fox, platformb4);
        this.physics.add.collider(fox, platformb5);

        A = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        D = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        Space = this.input.keyboard.addKey(
            Phaser.Input.Keyboard.KeyCodes.SPACE
        );



    }



    update(delta, time) {
        fox.anims.play("foxAni", true)

        this.move()
    }

    move() {
        if (A.isDown) {
    
            fox.setVelocityX(-400);
        } else if (D.isDown) {
            fox.setVelocityX(400);
        } else if (Space.isDown && fox.body.touching.down) {
            fox.setVelocityY(-400);
        } else {
            fox.setVelocityX(0);
        }
    }
}

export default GameScene;
