import Phaser from "phaser";

let bg;
let platform;

let platform1;
let platform12;
let platform13;
let platform14;

let platform2;
let platform21;
let platform22;
let platform23;

let platform3;
let water;
let player;

let door;

let key;
let keyb;

let coin1;
let coin2;
let coin3;

let deadsign;
let upsign;

let A;
let D;
let Space;

let jumppad;

let i = 0;
let z = 0;
let x = 0;
let y = 0;

class Tutorial extends Phaser.Scene {
    constructor(test) {
        super({
            key: "Tutorial",
        });
    }

    preload() {
        this.load.image("bggame", "src/image/Project/Background/bgingame.png");
        this.load.image("p5", "src/image/Project/platform5.png");
        this.load.image("p1", "src/image/Project/platform1.png");
        this.load.image("p2", "src/image/Project/platform2.png");
        this.load.image("p3", "src/image/Project/platform3.png");
        this.load.image("p4", "src/image/Project/platform4.png");
        this.load.image("water", "src/image/Project/water.png");

        this.load.image("door", "src/image/Project/door.png");

        this.load.image("key", "src/image/Project/key.png");

        this.load.image("deadsign", "src/image/Project/deadsign.png");
        this.load.image("upsign", "src/image/Project/upsign.png");

        this.load.image("jumppad", "src/image/Project/jumppad.png");

        this.load.image("key", "src/image/Project/key.png");
        this.load.image("keyb", "src/image/Project/keyb.png");
        this.load.image("coin1", "src/image/Project/coin.png");
        this.load.image("coin2", "src/image/Project/coin.png");
        this.load.image("coin3", "src/image/Project/coin.png");

        this.load.spritesheet("player", "src/image/Project/PalmlhaiWalk.png", {
            frameWidth: 174,
            frameHeight: 123,
        });

        this.load.spritesheet(
            "jump",
            "src/image/Project/PalmlhaiPrigpawh.png",
            {
                frameWidth: 233,
                frameHeight: 123,
            }
        );
    }

    create() {
        bg = this.add.image(1280, 720, "bggame").setScale(2);

        deadsign = this.add.image(850, 1257, "deadsign").setScale(2.5);
        upsign = this.add.image(2350, 1257, "upsign").setScale(2.5);

        water = this.physics.add
            .sprite(1100, 1390, "water")
            .setScale(0.7)
            .setImmovable(true)
            .setSize(1100, 100)
            .setCollideWorldBounds(true);

        platform1 = this.physics.add
            .sprite(432, 1370, "p1")
            .setScale(0.5)
            .setCollideWorldBounds(true)
            .setImmovable(true);
        platform13 = this.physics.add
            .sprite(1700, 1370, "p1")
            .setScale(0.5)
            .setCollideWorldBounds(true)
            .setImmovable(true);
        platform14 = this.physics.add
            .sprite(2914, 1370, "p1")
            .setScale(0.5)
            .setCollideWorldBounds(true)
            .setImmovable(true);

        platform2 = this.physics.add
            .sprite(900, 800, "p2")
            .setScale(0.35)
            .setCollideWorldBounds(true)
            .setImmovable(true);
        platform22 = this.physics.add
            .sprite(700, 800, "p2")
            .setScale(0.35)
            .setCollideWorldBounds(true)
            .setImmovable(true);
        platform23 = this.physics.add
            .sprite(500, 800, "p2")
            .setScale(0.35)
            .setCollideWorldBounds(true)
            .setImmovable(true);
        platform21 = this.physics.add
            .sprite(1800, 950, "p2")
            .setScale(0.35)
            .setCollideWorldBounds(true)
            .setImmovable(true);

        jumppad = this.physics.add
            .sprite(2450, 1300, "jumppad")
            .setScale(0.2)
            .setCollideWorldBounds(true)
            .setImmovable(true);

        door = this.physics.add
            .sprite(450, 630, "door")
            .setScale(1.4)
            .setImmovable(true);

        key = this.physics.add
            .sprite(1800, 850, "key")
            .setScale(0.15)
            .setCollideWorldBounds(true)
            .setImmovable(true);

        player = this.physics.add
            .sprite(200, 1200, "player")
            .setCollideWorldBounds(true)
            .setGravityY(400)
            .setScale(1.2)
            .setBounce(0.2);

        this.physics.add.collider(player, platform1);
        this.physics.add.collider(player, platform12);
        this.physics.add.collider(player, platform13);
        this.physics.add.collider(player, platform14);
        this.physics.add.collider(player, platform);
        this.physics.add.collider(player, platform2);
        this.physics.add.collider(player, platform21);
        this.physics.add.collider(player, platform22);
        this.physics.add.collider(player, platform23);
        this.physics.add.collider(player, platform3);

        A = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        D = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        Space = this.input.keyboard.addKey(
            Phaser.Input.Keyboard.KeyCodes.SPACE
        );

        this.physics.add.collider(player, jumppad, () => {
            if (player.body.touching.down) {
                player.setVelocity(-800);
            } else {
                player.setGravityY(0);
            }
        });

        coin1 = this.physics.add.sprite(500, 1200, "coin1").setScale(0.3);

        coin2 = this.physics.add.sprite(2445, 850, "coin2").setScale(0.3);

        coin3 = this.physics.add.sprite(1320, 700, "coin3").setScale(0.3);

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
            z++;
        });

        this.physics.add.collider(player, water, () => {
            this.scene.start("Tutorial");
        });

        this.physics.add.collider(player, door, () => {
            if ((z == 1 && i == 3) || (x == 1 && i == 3)) {
                this.scene.start("GameScene4");
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

export default Tutorial;
