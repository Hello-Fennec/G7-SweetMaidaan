import Phaser from "phaser";

let bg;
let platform;
let none;

let platform1;
let platform12;
let platform13;
let platform14;

let platform2;
let platform21;
let platform22;
let platform23;
let platform24;

let platform3;
let water;
let water2;
let water21;
let water22;
let water23;
let player;

let door;

let key;

let jumppad

let A;
let D;
let Space;

class GameScene2 extends Phaser.Scene {
    constructor(test) {
        super({
            key: "GameScene2",
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

        this.load.image("none2", "src/image/Project/none.png");

        this.load.image("jumppad", "src/image/Project/jumppad.png");

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
        bg = this.add.image(1280, 720, "bggame").setScale(2);

        door = this.add.image(70, 180, "door").setScale(1.4);

        none = this.physics.add.sprite(1485, 900, "none").setScale(0.12).setCollideWorldBounds(true).setImmovable(true);

        jumppad = this.physics.add
            .sprite(2500, 845, "jumppad")
            .setScale(0.2)
            .setCollideWorldBounds(true)
            .setImmovable(true);

        player = this.physics.add
            .sprite(80, 1200, "player")
            .setCollideWorldBounds(true)
            .setGravityY(400)
            .setBounce(0.2)
            .setScale(1.2);

        water = this.physics.add
            .sprite(800, 1380, "water")
            .setScale(0.7)
            .setCollideWorldBounds(true)
            .setImmovable(true);
        water2 = this.physics.add
            .sprite(1300, 1380, "water")
            .setScale(0.7)
            .setCollideWorldBounds(true)
            .setImmovable(true);
        water21 = this.physics.add
            .sprite(1800, 1380, "water")
            .setScale(0.7)
            .setCollideWorldBounds(true)
            .setImmovable(true);
        water22 = this.physics.add
            .sprite(2300, 1380, "water")
            .setScale(0.7)
            .setCollideWorldBounds(true)
            .setImmovable(true);

        platform1 = this.physics.add
            .sprite(200, 1370, "p1")
            .setScale(0.5)
            .setImmovable(true);



        platform2 = this.physics.add
            .sprite(1700, 900, "p4")
            .setScale(0.35)
            .setCollideWorldBounds(true)
            .setImmovable(true);
        platform21 = this.physics.add
            .sprite(60, 1000, "p2")
            .setScale(0.35)
            .setImmovable(true);
        platform22 = this.physics.add
            .sprite(2580, 900, "p4")
            .setScale(0.35)
            .setImmovable(true);
        platform24 = this.physics.add
            .sprite(600, 700, "p4")
            .setScale(0.35)
            .setImmovable(true);

        platform = this.physics.add
        .sprite(10, 350, "p2")
            .setScale(0.35)
            .setImmovable(true);

            

        key = this.physics.add
            .sprite(2200, 200, "key")
            .setScale(0.15)
            .setCollideWorldBounds(true)
            .setImmovable(true);

        this.physics.add.collider(player, platform1);
        this.physics.add.collider(player, platform12);
        this.physics.add.collider(player, platform13);
        this.physics.add.collider(player, platform14);
        this.physics.add.collider(player, platform);
        this.physics.add.collider(player, platform2);
        this.physics.add.collider(player, platform21);
        this.physics.add.collider(player, platform22);
        this.physics.add.collider(player, platform23);
        this.physics.add.collider(player, platform24);
        this.physics.add.collider(player, platform3);
        this.physics.add.collider(player, water);
        this.physics.add.collider(player, water2);
        this.physics.add.collider(player, water21);
        this.physics.add.collider(player, water22);
        this.physics.add.collider(player, key);
        this.physics.add.collider(player, none);

        A = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        D = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        Space = this.input.keyboard.addKey(
            Phaser.Input.Keyboard.KeyCodes.SPACE
        );


        this.physics.add.collider(player, jumppad, () => {
            if (player.body.touching.down) {
                player.setVelocity(-900);
            } else {
                player.setGravityY(0);
            }
        });

        this.physics.add.collider(player, jumppad);
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
            player.setVelocityY(-600);
            player.setGravityY(500);
        } else if (Space.isUp) {
            player.setGravityY(700);

        }
    }
}
export default GameScene2;
