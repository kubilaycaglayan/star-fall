import scores from '../Scores/scoreBoard';

describe(
  'Responsible for keeping and querying scores',
  () => {
    describe('getScores', () => {
      test('returns an array of objects with user and score properties', async () => {
        await scores.getScores()
          .then(
            (response) => {
              const resultObject = response.result[0];
              expect(resultObject).toHaveProperty('user');
              expect(resultObject).toHaveProperty('score');
            },
          );
      });
    });

    describe('addNewScore', () => {
      test('adds the score and returns success message', async () => {
        await scores.addNewScore('test', '0')
          .then(
            (response) => {
              const resultObject = response.result.toString();
              expect(resultObject).toMatch('Leaderboard score created correctly.');
            },
          );
      });
    });
  },
);