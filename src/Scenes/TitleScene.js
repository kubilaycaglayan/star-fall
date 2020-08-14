import Phaser from 'phaser';
import config from '../Config/config';
import Button from '../Objects/Button';

export default class TitleScene extends Phaser.Scene {
  constructor() {
    super('Title');
  }

  preload() {
    // load images
    this.load.image('sky2', '../src/assets/game/sky.png');
  }

  create() {
    const setName = (name = 'Guest Player') => {
      localStorage.setItem('name', name);
    };

    const getName = () => localStorage.getItem('name');

    // eslint-disable-next-line no-unused-expressions
    getName() || setName();

    const printName = () => {
      this.nameField.text = `Welcome ${getName()}!`;
    };

    const changeName = () => {
      // eslint-disable-next-line no-alert
      const newName = prompt('Please enter your name', `${getName()}`) || getName();
      if (newName) {
        setName(newName);
        printName();
      }
    };

    this.add.image(400, 300, 'sky2');
    this.nameField = this.add.text(310, 30, `Welcome ${getName()}!`, { fill: '#0f0' });

    // Change Name
    const changeNameButton = this.add.text(250, 100, 'Click here to change your name!', { fill: '#0f0' });
    changeNameButton.setInteractive();
    changeNameButton.on('pointerdown', () => { changeName(); });

    // Game
    this.gameButton = new Button(this, config.width / 2, config.height / 2 - 100, 'blueButton1', 'blueButton2', 'Play', 'Game');

    // Options
    this.optionsButton = new Button(this, config.width / 2, config.height / 2, 'blueButton1', 'blueButton2', 'Options', 'Options');

    // Credits
    this.creditsButton = new Button(this, config.width / 2, config.height / 2 + 100, 'blueButton1', 'blueButton2', 'Credits', 'Credits');

    // High Scores
    this.scoresButton = new Button(this, config.width / 2, config.height / 2 + 200, 'blueButton1', 'blueButton2', 'Scores', 'HighScores');

    this.model = this.sys.game.globals.model;
    if (this.model.musicOn === true && this.model.bgMusicPlaying === false) {
      this.bgMusic = this.sound.add('bgMusic', { volume: 0.5, loop: true });
      this.bgMusic.play();
      this.model.bgMusicPlaying = true;
      this.sys.game.globals.bgMusic = this.bgMusic;
    }
  }
}
