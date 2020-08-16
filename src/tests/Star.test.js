import { Star } from '../Objects/Star';

describe(
  'Starts create and removal cycle for star objects and clearing times.',
  () => {
    describe('stop', () => {
      it('stops all time intervals and returns true', () => {
        // eslint-disable-next-line no-unused-expressions
        expect(Star().stop()).toBeTrue;
      });
    });

    describe('createAndRemoveAfter', () => {
      it('calls the methods that is responsible for starting cycle', () => {
        let variable;
        const cb = jest.fn((var1, var2, var3, var4) => {
          variable = `${var1}${var2}${var3}${var4}`;
        });
        Star().createAndRemoveAfter(1, 2, 3, 4, cb);
        expect(variable).toBe('1234');
      });
    });
  },
);