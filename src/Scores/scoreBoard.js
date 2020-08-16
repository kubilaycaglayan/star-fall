import 'regenerator-runtime';

const axios = require('axios');

const scores = (() => {
  const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';
  const gameId = '/HDyy4ToBJuogQlnwDeMf/';

  // eslint-disable-next-line no-unused-vars
  const createGame = async () => {
    const endpoint = `${url}games`;

    const response = await axios.post(endpoint, {
      name: 'Star Fall',
    });
    return response;
  };

  const getScores = async () => {
    const endpoint = `${url}games${gameId}scores`;
    const response = await axios.get(endpoint);
    return response.data;
  };

  const addNewScore = async (user, score) => {
    const endpoint = `${url}games${gameId}scores`;
    const body = JSON.stringify({ user, score });
    const options = {

      'Content-Type': 'application/json',

    };

    const response = await axios.post(endpoint, body, { headers: options });
    return response.data;
  };

  return {
    addNewScore,
    getScores,
  };
})();

export default scores;
