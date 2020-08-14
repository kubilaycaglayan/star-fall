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
    this.gameOver = false;
    this.add.image(400, 300, 'sky');

    this.physics.add.staticGroup({
      key: 'spikes',
      repeat: 11,
      setXY: { x: 12, y: 600, stepX: 100 }
    });
    let platforms = this.physics.add.staticGroup();
    let bottomGroup = this.physics.add.staticGroup();
    bottomGroup.create(400, 630, 'bottom').setScale(2).refreshBody()

    this.player = this.physics.add.sprite(400, 250, 'dude');
    this.player.consecutiveJumps = 2;
    this.player.setCollideWorldBounds(true);
    this.player.body.checkCollision.up = false;
    this.player.body.checkCollision.left = false;
    this.player.body.checkCollision.right = false;

    this.cursors = this.input.keyboard.createCursorKeys();
    const stars = this.physics.add.group();

    this.ground = Ground();
    this.star = Star();
    this.creator = Creator();
    this.points = Points();

    this.stMusic = this.sound.add('starMusic', { volume: 0.5, loop: false });

    this.creator.doIt(this.ground, this.star, platforms, stars);

    this.physics.add.collider(this.player, platforms);
    this.physics.add.collider(stars, platforms);
  }
}
