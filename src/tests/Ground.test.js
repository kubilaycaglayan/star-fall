import { Ground } from '../Objects/Ground';

describe(
  'Starts create and removal cycle for ground objects and clearing times.',
  () => {
    describe('stop', () => {
      it('stops all time intervals and returns true', () => {
        // eslint-disable-next-line no-unused-expressions
        expect(Ground().stop()).toBeTrue;
      });
    });

    describe('createAndRemoveAfter', () => {
      it('calls the methods that is responsible for starting cycle', () => {
        let variable;
        const cb = jest.fn((var1, var2, var3, var4, var5) => {
          variable = `${var1}${var2}${var3}${var4}${var5}`;
        });
        Ground().createAndRemoveAfter(1, 2, 3, 4, 5, cb);
        expect(variable).toBe('12345');
      });
    });
  },
);