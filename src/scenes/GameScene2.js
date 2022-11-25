import Phaser from "phaser";

let bg;
let platform;
let platform0;
let platform01;
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

let door

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
        this.load.image('bggame', 'src/image/Project/Background/bgingame.png')
        this.load.image('p0', 'src/image/Project/platform.png')
        this.load.image('p1', 'src/image/Project/platform1.png')
        this.load.image('p2', 'src/image/Project/platform2.png')
        this.load.image('p3', 'src/image/Project/platform3.png')
        this.load.image('p4', 'src/image/Project/platform4.png')
        this.load.image('water', 'src/image/Project/water.png')

        this.load.image('door', 'src/image/Project/door.png')



        this.load.spritesheet('dude', 'src/image/Project/player.jpg', { frameWidth: 218, frameHeight: 250 });

    }

    create() {
        bg = this.add.image(1280, 720, 'bggame').setScale(1.5)

        water = this.physics.add.sprite(1145, 1380, 'water').setScale(0.7).setCollideWorldBounds(true).setImmovable(true);

        platform1 = this.physics.add.sprite(432, 1370, 'p1').setScale(0.5).setCollideWorldBounds(true).setImmovable(true);
        platform13 = this.physics.add.sprite(1836, 1370, 'p1').setScale(0.5).setCollideWorldBounds(true).setImmovable(true);
        platform14 = this.physics.add.sprite(2914, 1370, 'p1').setScale(0.5).setCollideWorldBounds(true).setImmovable(true);


        platform3 = this.physics.add.sprite(2500, 1100, 'p4').setScale(0.25).setCollideWorldBounds(true).setImmovable(true);

        platform2 = this.physics.add.sprite(1700, 900, 'p2').setScale(0.35).setCollideWorldBounds(true).setImmovable(true);
        platform21 = this.physics.add.sprite(880, 750, 'p2').setScale(0.35).setCollideWorldBounds(true).setImmovable(true);
        platform22 = this.physics.add.sprite(1250, 350, 'p2').setScale(0.35).setCollideWorldBounds(true).setImmovable(true);
        platform23 = this.physics.add.sprite(1070, 350, 'p2').setScale(0.35).setCollideWorldBounds(true).setImmovable(true);

        platform = this.physics.add.sprite(53, 550, 'p0').setScale(1.5).setCollideWorldBounds(true).setImmovable(true);
        platform0 = this.physics.add.sprite(159, 550, 'p0').setScale(1.5).setCollideWorldBounds(true).setImmovable(true);
        platform01 = this.physics.add.sprite(265, 550, 'p0').setScale(1.5).setCollideWorldBounds(true).setImmovable(true);
 

        door = this.add.image(1280, 180, 'door').setScale(1.4)

        key = this.physics.add.sprite(120, 450, 'key').setScale(0.15).setCollideWorldBounds(true).setImmovable(true);

        player = this.physics.add.sprite(1000, 0, 'dude').setCollideWorldBounds(true).setGravityY(400);

        this.physics.add.collider(player, platform1);
        this.physics.add.collider(player, platform12);
        this.physics.add.collider(player, platform13);
        this.physics.add.collider(player, platform14);
        this.physics.add.collider(player, platform);
        this.physics.add.collider(player, platform0);
        this.physics.add.collider(player, platform01);
        this.physics.add.collider(player, platform2);
        this.physics.add.collider(player, platform21);
        this.physics.add.collider(player, platform22);
        this.physics.add.collider(player, platform23);
        this.physics.add.collider(player, platform3);
        this.physics.add.collider(player, water);
        this.physics.add.collider(player, key);
        
        

        

        A = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        D = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        Space = this.input.keyboard.addKey(
            Phaser.Input.Keyboard.KeyCodes.SPACE
        );

        

    }



    update(delta, time) {

        this.move()
    }

    move() {
        if (A.isDown) {
            player.setVelocityX(-400);
        } else if (D.isDown) {
            player.setVelocityX(400);
        } else if (Space.isDown && player.body.touching.down) {
            player.setVelocityY(-400);
        } else {
            player.setVelocityX(0);
        }
    }
}

export default GameScene2;

