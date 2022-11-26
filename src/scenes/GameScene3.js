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
let player;
let playerAni;

let singbg;
let singbg2;
let door;
let key;
let water1;
let water2;
let water3;


let A;
let D;
let Space;

let button;
let keyb;
let sign;

let coin1;
let coin2;
let coin3;

let i = 0;
let z = 0;
let x = 0;
let y = 0;

class GameScene3 extends Phaser.Scene {
    constructor(test) {
        super({
            key: "GameScene3",
        });
    }

    preload() {
        this.load.image('bggame', 'src/image/Project2/bggame.png')
        this.load.image('bggame1', 'src/image/Project2/05-brownie-vulcano.png')
        // this.load.image('p0', 'src/image/Project2/platform.png')///ซ้ายบน
        this.load.image('p1', 'src/image/Project2/platform0.png')///พื้นล่าง
        this.load.image('p2', 'src/image/Project2/platform2.png')///พื้นบน
        this.load.image('p3', 'src/image/Project2/chocoMidAlt.png')///ขวาล่างบน
        this.load.image('p4', 'src/image/Project2/platform4.png')
    

        this.load.image('door', 'src/image/Project2/door.png')
        this.load.image('singbg', 'src/image/Project2/rightsign.png')
        this.load.image('singbg2', 'src/image/Project2/leftsign.png')
        this.load.image('key', 'src/image/Project2/key.png')
        this.load.image('water', 'src/image/Project2/water.png')

        this.load.image("keyb", "src/image/Project/keyb.png");
        this.load.image("coin1", "src/image/Project/coin.png");
        this.load.image("coin2", "src/image/Project/coin.png");
        this.load.image("coin3", "src/image/Project/coin.png");
        this.load.image("button", "src/image/Project/jumppad.png");

        
        this.load.spritesheet("player", "src/image/Project/PalmlhaiWalk.png", {
            frameWidth: 174,
            frameHeight: 123,
        });

        this.load.spritesheet("jump", "src/image/Project/PalmlhaiPrigpawh.png", {
            frameWidth: 233,
            frameHeight: 123,
        });
    }

    create() {
        //bg = this.add.image(1280, 720, 'bggame').setScale(1.5)
        bg1 = this.add.image(1280, 720, 'bggame1').setScale(2).setDepth(-999);

        door = this.add.sprite(2280, 125, 'door').setDepth(2);
        platforma1 = this.physics.add.sprite(100, 1420, 'p1').setScale(0.3).setCollideWorldBounds(true).setImmovable(true).setDepth(2);
        
        platforma2 = this.physics.add.sprite(700, 1420, 'p1').setScale(0.3).setCollideWorldBounds(true).setImmovable(true).setDepth(2);
        platforma3 = this.physics.add.sprite(1600, 1420, 'p1').setScale(0.3).setCollideWorldBounds(true).setImmovable(true).setDepth(2);
        platforma4 = this.physics.add.sprite(2400, 1420, 'p1').setScale(0.3).setCollideWorldBounds(true).setImmovable(true).setDepth(2);
        platforma5 = this.physics.add.sprite(2400, 250, 'p1').setScale(0.3).setCollideWorldBounds(true).setImmovable(true).setDepth(2);
        platforma6 = this.physics.add.sprite(200, 700, 'p1').setScale(0.3).setCollideWorldBounds(true).setImmovable(true).setDepth(2);

        platformb1 = this.physics.add.sprite(800, 800, 'p3').setScale(1).setCollideWorldBounds(true).setImmovable(true).setDepth(2);
        platformb2 = this.physics.add.sprite(1100, 350, 'p3').setScale(1).setCollideWorldBounds(true).setImmovable(true).setDepth(2);
        platformb3 = this.physics.add.sprite(800, 500, 'p3').setScale(1).setCollideWorldBounds(true).setImmovable(true).setDepth(2);
        platformb4 = this.physics.add.sprite(1650, 380, 'p3').setScale(1).setCollideWorldBounds(true).setImmovable(true).setDepth(2);
        platformb5 = this.physics.add.sprite(800, 800, 'p3').setScale(1).setCollideWorldBounds(true).setImmovable(true).setDepth(2);

        platform1 = this.physics.add.sprite(2300, 1200, 'p2').setScale(0.2).setCollideWorldBounds(true).setImmovable(true).setDepth(2);
        platform2 = this.physics.add.sprite(1800, 1010, 'p2').setScale(0.2).setCollideWorldBounds(true).setImmovable(true).setDepth(2);
        platform3 = this.physics.add.sprite(2400, 850, 'p2').setScale(0.2).setCollideWorldBounds(true).setImmovable(true).setDepth(2);
        platform4 = this.physics.add.sprite(1300, 900, 'p2').setScale(0.2).setCollideWorldBounds(true).setImmovable(true).setDepth(2); 

        singbg = this.physics.add.sprite(800, 1320, 'singbg').setScale(3).setDepth(1);
        singbg = this.physics.add.sprite(400, 620, 'singbg').setScale(3).setDepth(1);
        singbg2 = this.physics.add.sprite(2400, 780, 'singbg2').setScale(3).setDepth(1);
       
        key = this.physics.add.sprite(2500 ,750 , 'key').setScale(0.15).setImmovable(true);
        water1 = this.physics.add.sprite(1200, 1680, 'water').setScale(0.7).setImmovable(true).setSize(1200, 100).setCollideWorldBounds(true)
        water2 = this.physics.add.sprite(2000, 1680, 'water').setScale(0.7).setImmovable(true).setSize(1200, 100).setCollideWorldBounds(true)
       
        player = this.physics.add
            .sprite(350, 1200, "player")
            .setCollideWorldBounds(true)
            .setGravityY(400)
            .setBounce(0.2)
            .setSize(50, 100)
            .setScale(1.2);

            
            this.physics.add.collider(player, water1, () => {
                this.scene.start("GameScene3");
            });
            this.physics.add.collider(player, water2, () => {
                this.scene.start("GameScene3");
            });
            
    
            button = this.physics.add
                .sprite(2500, 1150, "button")
                .setDepth(-1)
                .setScale(0.3)
                .setImmovable(true);
    
            this.physics.add.collider(player, button, () => {
                sign.destroy();
                y++;
            });
    
            
    
            keyb = this.physics.add
                .sprite(50, 910, "keyb")
                .setDepth(-1)
                .setScale(0.15)
                // .setCollideWorldBounds(true)
                .setImmovable(true);
    
            coin1 = this.physics.add
                .sprite(1145, 210, "coin1")
                .setScale(0.3)
                .setCollideWorldBounds(true)
                .setImmovable(true);
    
            coin2 = this.physics.add
                .sprite(2250, 1100, "coin2")
                .setScale(0.3)
                .setCollideWorldBounds(true)
                .setImmovable(true);
    
            coin3 = this.physics.add
                .sprite(2000, 770, "coin3")
                .setScale(0.3)
                .setCollideWorldBounds(true)
                .setImmovable(true);
    
            this.physics.add.collider(player, coin1, () => {
                coin1.destroy();
                i++;
            });
    
            this.physics.add.collider(player, coin2, () => {
                coin2.destroy();
                i++;
            });
    
            this.physics.add.collider(player, coin3, () => {
                coin3.destroy();
                i++;
            });
    
            this.physics.add.collider(player, key, () => {
                key.destroy();
                keyb.destroy();
                z++;
            });
    
            this.physics.add.collider(player, keyb, () => {
                if (y >= 1) {
                    key.destroy();
                    keyb.destroy();
                    x++;
                }
            });
    
            this.physics.add.collider(player, door, () => {
                if (z == 1 && i == 3 || x == 1 && i == 3) {
                    this.scene.start("GameScene3");
                }
            });
    
            sign = this.physics.add
                .sprite(0, 910, "sign")
                .setScale(5)
                .setDepth(-1)
                .setCollideWorldBounds(true)
                .setImmovable(true);


        this.physics.add.collider(player, platforma1);
        this.physics.add.collider(player, platforma2);
        this.physics.add.collider(player, platforma3);
        this.physics.add.collider(player, platforma4);
        this.physics.add.collider(player, platforma5);
        this.physics.add.collider(player, platforma6);

        this.physics.add.collider(player, platform1);
        this.physics.add.collider(player, platform2);
        this.physics.add.collider(player, platform3);
        this.physics.add.collider(player, platform4);
        this.physics.add.collider(player, platform5);

        this.physics.add.collider(player, platformb1);
        this.physics.add.collider(player, platformb2);
        this.physics.add.collider(player, platformb3);
        this.physics.add.collider(player, platformb4);
        this.physics.add.collider(player, platformb5);
        this.physics.add.collider(player, water1);
        this.physics.add.collider(player, water2);
        this.physics.add.collider(player, water3);

        A = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        D = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        Space = this.input.keyboard.addKey(
            Phaser.Input.Keyboard.KeyCodes.SPACE
        );

        this.anims.create({
            key: "playerAniMove",
            frames: this.anims.generateFrameNumbers("player", {
                start: 0,
                end: 4,
            }),
            duration: 500,
            repeat: -1,
        });

        this.anims.create({
            key: "playerAniIdle",
            frames: this.anims.generateFrameNumbers("player", {
                start: 4,
                end: 4,
            }),
            duration: 500,
            repeat: -1,
        });

        this.anims.create({
            key: "playerAniJump",
            frames: this.anims.generateFrameNumbers("jump", {
                start: 0,
                end: 9,
            }),
            duration: 500,
            repeat: -1,
        });

    }



    update(delta, time) {
        this.movehorizontal();
        this.jump();
    }

    movehorizontal() {
        if (A.isDown) {
            // player.anims.play("playerAniMove", true);
            player.anims.play("playerAniMove", true);
            player.flipX = true;
            player.setVelocityX(-400);
        } else if (D.isDown) {
            player.setVelocityX(400);
            player.flipX = false;
            player.anims.play("playerAniMove", true);
        } else {
            player.setVelocityX(0);
            player.anims.play("playerAniIdle", true);
        }
    }

    jump() {
        if (Space.isDown && player.body.touching.down) {
            player.setVelocityY(-550);
            player.setGravityY(500);
        } else if (Space.isUp) {
            player.setGravityY(700);

        }
    }
}

export default GameScene3;