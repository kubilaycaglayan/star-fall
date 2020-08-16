import { Randomizer } from '../GameLogic/Randomizer';

describe(
  'Generates random coordinates for the next ground',
  () => {
    describe('vertical', () => {
      it('returns random Y coordinate away from the current one', () => {
        expect(Randomizer().vertical(250)).not.toBe(250);
        expect(Randomizer().vertical(275)).not.toBe(275);
        expect(Randomizer().vertical(300)).not.toBe(300);
        expect(Randomizer().vertical(301)).not.toBe(301);
      });

      it('does not return smaller than 99', () => {
        expect(Randomizer().vertical(250)).toBeGreaterThan(99);
      });

      it('does not return greater than 501', () => {
        expect(Randomizer().vertical(250)).toBeLessThan(501);
      });
    });

    describe('horizontal', () => {
      it('returns random X coordinate smaller than 601', () => {
        expect(Randomizer().horizontal(400)).toBeLessThan(601);
      });

      it('does not return smaller than 199', () => {
        expect(Randomizer().horizontal(400)).toBeGreaterThan(199);
      });
    });
  },
);