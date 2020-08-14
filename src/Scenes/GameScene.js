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
    // load images
    this.load.image('logo', 'assets/logo.png');
  }

  create() {
    this.add.image(400, 300, 'logo');
  }
}
