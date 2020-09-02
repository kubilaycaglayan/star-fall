import Phaser from 'phaser';
import scores from '../Scores/scoreBoard';

export default class HighScoresScene extends Phaser.Scene {
  constructor() {
    super('HighScores');
  }

  create() {
    this.creditsText = this.add.text(170, 40, 'Nick Name', { fontSize: '32px', fill: '#fff' });
    this.madeByText = this.add.text(480, 40, 'Score', { fontSize: '32px', fill: '#fff' });
    this.loadingText = this.add.text(300, 80, 'Loading...', { fontSize: '32px', fill: '#fff' });

    const fillBoard = (scores, playerCount) => {
      this.loadingText.text = '';
      let verticalGap = 60;
      scores.forEach(object => {
        this.add.text(180, 50 + verticalGap, `${object.user}`, { fontSize: '26px', fill: '#fff' });
        this.add.text(500, 50 + verticalGap, `${object.score}`, { fontSize: '26px', fill: '#fff' });
        verticalGap += 40;
      });
      this.add.text(100, 550, `Played ${playerCount} times...`, { fill: '#0d0' });
    };

    const filterNames = result => result.user !== 'veronica' && result.user !== 'notveronica';

    const sortResults = scores => scores.sort((a, b) => (a.score > b.score ? -1 : 1))
      .filter(filterNames).slice(0, 10);

    scores.getScores()
      .then(
        (response) => {
          const playerCount = response.result.length;
          const scoreResults = sortResults(response.result);
          fillBoard(scoreResults, playerCount);
        },
      )
      .catch(
        () => {
          this.loadingText.text = 'Connection\nproblem :(';
        },
      );
    const turnBack = this.add.text(450, 550, 'Click here to turn back!', { fill: '#0f0' });
    turnBack.setInteractive();
    turnBack.on('pointerdown', () => { this.scene.start('Title'); });
  }
}
