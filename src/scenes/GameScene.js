import Phaser from "phaser";

let bg;
let platform;
let platform0;
let platform1;
let platform2;
let platform21;
let platform22;
let platform23;
let platform3;
let platform4;
let player;

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
        this.load.image('bggame', 'src/image/Project/Background/bgingame.png')
        this.load.image('p0', 'src/image/Project/platform.png')
        this.load.image('p1', 'src/image/Project/platform1.png')
        this.load.image('p2', 'src/image/Project/platform2.png')
        this.load.image('p3', 'src/image/Project/platform3.png')
        this.load.image('p4', 'src/image/Project/platform4.png')

        this.load.image('crown', 'src/image/Project/crown.png')



        this.load.spritesheet('dude', 'src/image/Project/player.jpg', { frameWidth: 218, frameHeight: 266 });

    }

    create() {
        bg = this.add.image(1280, 720, 'bggame').setScale(1.5)

        platform1 = this.physics.add.sprite(432, 1370, 'p1').setScale(0.5).setCollideWorldBounds(true).setImmovable(true);
        platform1 = this.physics.add.sprite(650, 1370, 'p1').setScale(0.5).setCollideWorldBounds(true).setImmovable(true);
        platform1 = this.physics.add.sprite(2050, 1370, 'p1').setScale(0.5).setCollideWorldBounds(true).setImmovable(true);
        platform1 = this.physics.add.sprite(2914, 1370, 'p1').setScale(0.5).setCollideWorldBounds(true).setImmovable(true);


        platform3 = this.physics.add.sprite(2300, 1050, 'p3').setScale(0.25).setCollideWorldBounds(true).setImmovable(true);

        platform2 = this.physics.add.sprite(1800, 850, 'p2').setScale(0.35).setCollideWorldBounds(true).setImmovable(true);
        platform21 = this.physics.add.sprite(880, 750, 'p2').setScale(0.35).setCollideWorldBounds(true).setImmovable(true);
        platform22 = this.physics.add.sprite(1280, 350, 'p2').setScale(0.35).setCollideWorldBounds(true).setImmovable(true);
        platform23 = this.physics.add.sprite(1100, 350, 'p2').setScale(0.35).setCollideWorldBounds(true).setImmovable(true);

        platform = this.physics.add.sprite(53, 620, 'p0').setScale(1.5).setCollideWorldBounds(true).setImmovable(true);
        platform0 = this.physics.add.sprite(159, 620, 'p0').setScale(1.5).setCollideWorldBounds(true).setImmovable(true);

        crown = this.add.image(1280, 250, 'crown')

        player = this.physics.add.sprite(1000, 0, 'dude').setCollideWorldBounds(true).setGravityY(400);

        this.physics.add.collider(player, platform1);
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

export default GameScene;

