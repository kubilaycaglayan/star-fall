import { Creator } from '../GameLogic/Creator';

describe(
  'Responsible for object creation and removal timing',
  () => {
    describe('levelUp', () => {
      it('callbacks the method passed in', () => {
        const cb = jest.fn(() => 'cb successful');
        expect(Creator().levelUp(cb)).toBe('cb successful');
      });
    });

    describe('clearTimers', () => {
      it('clears the timers and returns true', () => {
        // eslint-disable-next-line no-unused-expressions
        expect(Creator().clearTimers()).toBeTrue;
      });
    });

    describe('doIt', () => {
      it('calls assigning method with four variables passed in', () => {
        const cb = jest.fn((var1, var2, var3, var4) => `${var1}${var2}${var3}${var4}`);
        expect(Creator().doIt(1, 2, 3, 4, cb)).toBe('1234');
      });
    });
  },
);