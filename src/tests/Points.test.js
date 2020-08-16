import { Points } from '../GameLogic/Points';

describe(
  'Keeps player points in the memory',
  () => {
    describe('get', () => {
      it('returns the points', () => {
        expect(Points().get()).toBe(0);
      });
    });

    describe('collectStar', () => {
      it('Raises the points by 10', () => {
        const points = Points();
        points.collectStar();
        expect(points.get()).toBe(10);
      });
    });

    describe('getScoreText', () => {
      it('returns a text with the current score', () => {
        const points = Points();
        points.collectStar();
        expect(points.getScoreText()).toBe('Score: 10');
      });
    });

    describe('getLevelText', () => {
      const points = Points();
      for (let i = 0; i < 11; i += 1) {
        points.collectStar();
      }
      it('returns an array with the current level text at the 0th index', () => {
        expect(points.getLevelText()[0]).toBe('Level: 2');
      });

      it('returns an array with the current level number at the 1th index', () => {
        expect(points.getLevelText()[1]).toBe(2);
      });
    });
  },
);