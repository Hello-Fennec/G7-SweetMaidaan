import 'phaser';
import Phaser from 'phaser';
import MenuScene from './scenes/MenuScene';
import CreditScene from './scenes/CreditScene';
import GameScene from './scenes/GameScene';
import GameScene2 from './scenes/GameScene2';
import Tutorial from './scenes/Tutorial';
import Exit from './scenes/Exit';

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
        // MenuScene,
        // Tutorial,
        // CreditScene,
        // GameScene,
        GameScene2,
        
        Exit
    ],
    
    
};

const game = new Phaser.Game(config);

