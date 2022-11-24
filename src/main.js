import 'phaser';
import Phaser from 'phaser';
import MenuScene from './scenes/MenuScene';

const config = {
    // For more settings see <https://github.com/photonstorm/phaser/blob/master/src/boot/Config.js>
    type: Phaser.WEBGL,
    pixelArt: true,
    roundPixels: true,
    parent: 'content',
    width: 2560,
    height: 1440,
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    },
    scene: [
        MenuScene
    ],
    
    
};

const game = new Phaser.Game(config);

