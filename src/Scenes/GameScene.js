import Phaser from 'phaser';
import scores from '../Scores/scoreBoard'
import { Ground } from '../Objects/Ground';
import { Star } from '../Objects/Star';
import { Creator } from '../GameLogic/Creator';
import { Points } from '../GameLogic/Points';

export default class GameScene extends Phaser.Scene {
  constructor() {
    super('Game');
  }

  preload() {
    this.load.image('sky', 'assets/game/sky2.png');
    this.load.image('platform', 'assets/game/ground_wood.png');
    this.load.image('bottom', 'assets/game/platform.png');
    this.load.spritesheet('dude', 'assets/game/dude.png', { frameWidth: 32, frameHeight: 48 });
    this.load.image('star', 'assets/game/star.png');
    this.load.image('spikes', 'assets/game/spikes_top.png');
  }

  create() {
    this.add.image(400, 300, 'logo');
  }
}
