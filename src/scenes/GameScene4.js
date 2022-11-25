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
let jumppad;
let jumppad1;
let jumppad2;
let jumppad3;
let jumppad4;
let jumppad5;
let water1;
let water2;
let water3;
let water4;

let A;
let D;
let Space;

class GameScene4 extends Phaser.Scene {
    constructor(test) {
        super({
            key: "GameScene4",
        });
    }

    preload() {
        this.load.image('bggame', 'src/image/Project2/bggame.png')
        this.load.image('bggame1', 'src/image/Project2/05-brownie-vulcano.png')
        // this.load.image('p0', 'src/image/Project2/platform.png')///ซ้ายบน
        this.load.image('p1', 'src/image/Project2/platform0.png')///พื้นล่าง
        this.load.image('p2', 'src/image/Project2/platform2.png')///พื้นบน
        this.load.image('p3', 'src/image/Project2/chocoMidAlt.png')///ขวาล่างบน
        this.load.image('p4', 'src/image/Project2/platform4.png')///
        //this.load.image('p4', 'src/image/Project2/platform4.png')

        this.load.image('door', 'src/image/Project2/door.png')
        this.load.image('singbg', 'src/image/Project2/rightsign.png')
        this.load.image('singbg2', 'src/image/Project2/leftsign.png')
        this.load.image('key', 'src/image/Project2/key.png')
        this.load.image('jumppad1', 'src/image/Project2/jumppad.png')
        this.load.image('jumppad2', 'src/image/Project2/jumppad.png')
        this.load.image('jumppad3', 'src/image/Project2/jumppad.png')
        this.load.image('jumppad4', 'src/image/Project2/jumppad.png')
        this.load.image('jumppad5', 'src/image/Project2/jumppad.png')
        this.load.image('water', 'src/image/Project2/water.png')

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
        bg1 = this.add.image(1280, 720, 'bggame1').setScale(2).setDepth(0);

        jumppad1 = this.physics.add.sprite(520 ,1350 , 'jumppad1').setScale(0.3).setCollideWorldBounds(true).setImmovable(true);
        jumppad2 = this.physics.add.sprite(2420 ,1350 , 'jumppad2').setScale(0.3).setCollideWorldBounds(true).setImmovable(true);
        jumppad3 = this.physics.add.sprite(2420 ,570 , 'jumppad3').setScale(0.3).setCollideWorldBounds(true).setImmovable(true);
        jumppad4 = this.physics.add.sprite(2000 ,920 , 'jumppad4').setScale(0.3).setCollideWorldBounds(true).setImmovable(true);
        jumppad5 = this.physics.add.sprite(1200 ,570 , 'jumppad5').setScale(0.3).setCollideWorldBounds(true).setImmovable(true);

        platforma1 = this.physics.add.sprite(200, 1420, 'p1').setScale(0.3).setCollideWorldBounds(true).setImmovable(true).setDepth(2);
        platforma2 = this.physics.add.sprite(400, 1420, 'p1').setScale(0.3).setCollideWorldBounds(true).setImmovable(true).setDepth(2);
        platforma3 = this.physics.add.sprite(2100, 1420, 'p1').setScale(0.3).setCollideWorldBounds(true).setImmovable(true).setDepth(2);
        platforma4 = this.physics.add.sprite(2400, 1420, 'p1').setScale(0.3).setCollideWorldBounds(true).setImmovable(true).setDepth(2);
        platforma5 = this.physics.add.sprite(200, 250, 'p1').setScale(0.3).setCollideWorldBounds(true).setImmovable(true).setDepth(2);
        //platforma6 = this.physics.add.sprite(200, 800, 'p1').setScale(0.3).setCollideWorldBounds(true).setImmovable(true).setDepth(2);

        //platformb1 = this.physics.add.sprite(800, 800, 'p3').setScale(1).setCollideWorldBounds(true).setImmovable(true).setDepth(2);
        // platformb2 = this.physics.add.sprite(1100, 350, 'p3').setScale(1).setCollideWorldBounds(true).setImmovable(true).setDepth(2);
        // platformb3 = this.physics.add.sprite(800, 500, 'p3').setScale(1).setCollideWorldBounds(true).setImmovable(true).setDepth(2);
        // platformb4 = this.physics.add.sprite(1500, 350, 'p3').setScale(1).setCollideWorldBounds(true).setImmovable(true).setDepth(2);
        // platformb5 = this.physics.add.sprite(800, 800, 'p3').setScale(1).setCollideWorldBounds(true).setImmovable(true).setDepth(2);
        
        platform1 = this.physics.add.sprite(2000, 950, 'p2').setScale(0.2).setCollideWorldBounds(true).setImmovable(true).setDepth(2);
        //platform2 = this.physics.add.sprite(1700, 600, 'p2').setScale(0.2).setCollideWorldBounds(true).setImmovable(true).setDepth(2);
        platform3 = this.physics.add.sprite(2800, 600, 'p2').setScale(0.2).setCollideWorldBounds(true).setImmovable(true).setDepth(2);
        platform4 = this.physics.add.sprite(1200, 600, 'p2').setScale(0.2).setCollideWorldBounds(true).setImmovable(true).setDepth(2);// ทำให้มันขยับได้ให้หน่อย 

        singbg = this.physics.add.sprite(100, 1320, 'singbg').setScale(3).setDepth(1);
        //singbg = this.physics.add.sprite(400, 720, 'singbg').setScale(3).setDepth(1);
        singbg2 = this.physics.add.sprite(2300, 530, 'singbg2').setScale(3).setDepth(1);
        door = this.add.sprite(200, 125, 'door').setDepth(2);
        key = this.physics.add.sprite(2450 ,100 , 'key').setScale(0.15).setCollideWorldBounds(true).setImmovable(true);
        

        water1 = this.physics.add.sprite(800, 1680, 'water').setScale(0.4).setImmovable(true).setCollideWorldBounds(true)
        water2 = this.physics.add.sprite(1100, 1680, 'water').setScale(0.4).setImmovable(true).setCollideWorldBounds(true)
        water3 = this.physics.add.sprite(1400, 1680, 'water').setScale(0.4).setImmovable(true).setCollideWorldBounds(true)
        water4 = this.physics.add.sprite(1700, 1680, 'water').setScale(0.4).setImmovable(true).setCollideWorldBounds(true)

        //key = this.add.physics.sprite(2400 , 700).setScale(1.5).setDepth(2);
        

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

        

        // fox = this.physics.add
        //     .sprite(700, 250, "fox")
        //     .setCollideWorldBounds(true)
        //     .setGravityY(500);

        player = this.physics.add
        .sprite(80, 1200, "player")
        .setCollideWorldBounds(true)
        .setGravityY(400)
        .setBounce(0.2)
        .setScale(0.8);

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
        this.physics.add.collider(player, jumppad1);
        this.physics.add.collider(player, jumppad2);
        this.physics.add.collider(player, jumppad3);
        this.physics.add.collider(player, jumppad4);
        this.physics.add.collider(player, jumppad5);
        this.physics.add.collider(player, water1);
        this.physics.add.collider(player, water2);
        this.physics.add.collider(player, water3);
        this.physics.add.collider(player, water4);
        

        A = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        D = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        Space = this.input.keyboard.addKey(
            Phaser.Input.Keyboard.KeyCodes.SPACE
        );



        this.physics.add.collider(player, jumppad1, () => {
            if (player.body.touching.down) {
                player.setVelocity(-800);
            } else {
                player.setGravityY(0);
            }
        });

        this.physics.add.collider(player, jumppad2, () => {
            if (player.body.touching.down) {
                player.setVelocity(-800);
            } else {
                player.setGravityY(0);
            }
        });

        this.physics.add.collider(player, jumppad3, () => {
            if (player.body.touching.down) {
                player.setVelocity(-800);
            } else {
                player.setGravityY(0);
            }
        });
        this.physics.add.collider(player, jumppad4, () => {
            if (player.body.touching.down) {
                player.setVelocity(-800);
            } else {
                player.setGravityY(0);
            }
        });
        this.physics.add.collider(player, jumppad5, () => {
            if (player.body.touching.down) {
                player.setVelocity(-800);
            } else {
                player.setGravityY(0);
            }
        });

        


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

export default GameScene4;