import 'phaser';
import Phaser from 'phaser';
import GameScene from './scenes/GameScene';
import GameScene2 from './scenes/GameScene2';

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
        GameScene,
        GameScene2
        
    ],
    
    
};

const game = new Phaser.Game(config);

