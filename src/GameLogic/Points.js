const Points = () => {
  let level = 1;
  let points = 0;
  const levelInterval = 100;

  const getScoreText = () => `Score: ${points}`;

  const setLevel = () => {
    if (level < 21) {
      if (level !== Math.ceil(points / levelInterval)) {
        level = Math.ceil(points / levelInterval);
      }
    }
  };

  const getLevelText = () => {
    setLevel();
    return [`Level: ${level}`, level];
  };

  const collectStar = () => {
    points += 10;
  };

  const get = () => points;

  return {
    get,
    collectStar,
    getScoreText,
    getLevelText,
  };
};

export {
  // eslint-disable-next-line import/prefer-default-export
  Points,
};