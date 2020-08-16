import Phaser from 'phaser';
import scores from '../Scores/scoreBoard';
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
      setXY: { x: 12, y: 600, stepX: 100 },
    });
    const platforms = this.physics.add.staticGroup();
    const bottomGroup = this.physics.add.staticGroup();
    bottomGroup.create(400, 630, 'bottom').setScale(2).refreshBody();

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

    const clearTimers = () => {
      this.creator.clearTimers();
      this.star.stop();
      this.ground.stop();
    };

    const finish = () => {
      this.physics.world.removeCollider(this.overlapTrigger);
      this.gameOver = true;
      this.add.text(300, 250, 'Game Over', { fontSize: '45px', fill: '#666666' });
      this.scene.pause();
      this.upKey.removeAllListeners();
      clearTimers();
      scores.addNewScore(localStorage.getItem('name').slice(0, 15), this.points.get());
      setTimeout(() => {
        this.scene.stop('Game');
        this.scene.start('Title');
      }, 1500);
    };
    this.overlapTrigger = this.physics.add.overlap(this.player, bottomGroup, finish, null, this);

    this.scoreText = this.add.text(550, 16, 'Score: 0', { fontSize: '32px', fill: '#000' });
    this.levelText = this.add.text(16, 16, 'Level: 1', { fontSize: '32px', fill: '#000' });
    this.gameLevel = 1;

    this.collectStar = (_player, star) => {
      star.disableBody(true, true);
      this.points.collectStar();
      this.scoreText.text = this.points.getScoreText();
      [this.levelText.text] = this.points.getLevelText();
      if (this.points.getLevelText()[1] !== this.gameLevel) {
        [this.levelText.text, this.gameLevel] = this.points.getLevelText();
        this.creator.levelUp();
      }
      this.stMusic.play();
    };
    this.physics.add.overlap(this.player, stars, this.collectStar, null, this);

    this.anims.create({
      key: 'left',
      frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1,
    });

    this.anims.create({
      key: 'turn',
      frames: [{ key: 'dude', frame: 4 }],
      frameRate: 20,
    });

    this.anims.create({
      key: 'right',
      frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
      frameRate: 10,
      repeat: -1,
    });

    this.superJumpText = this.add.text(550, 55, 'Super Jump Available', { fontSize: '12px', fill: '#ff0000' });

    this.jump = () => {
      if (this.player.body.touching.down || this.player.consecutiveJumps === 1) {
        this.player.setVelocityY(-380);
        this.player.consecutiveJumps -= 1;
        if (this.player.consecutiveJumps === 0) {
          this.superJumpText.text = '';
        }
      }
    };

    this.upKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
    this.upKey.on('down', this.jump, this);
  }

  update() {
    if (this.gameOver) {
      return;
    }
    if (this.cursors.left.isDown) {
      this.player.setVelocityX(-160);

      this.player.anims.play('left', true);
    } else if (this.cursors.right.isDown) {
      this.player.setVelocityX(160);

      this.player.anims.play('right', true);
    } else {
      this.player.setVelocityX(0);

      this.player.anims.play('turn');
    }

    if (this.player.body.touching.down) {
      this.player.consecutiveJumps = 2;
      this.superJumpText.text = 'Super Jump Available';
    } else if (this.player.consecutiveJumps !== 1) {
      this.superJumpText.text = '';
    }

    if (this.cursors.down.isDown && this.player.body.touching.down) {
      this.player.body.checkCollision.down = false;
      setTimeout(() => {
        this.player.body.checkCollision.down = true;
      }, 200);
    }
  }
}
