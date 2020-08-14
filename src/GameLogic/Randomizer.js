const Randomizer = () => {
  const platform = [400, 32];
  const boundariesY = [100, 500];
  const boundariesX = [200, 600];

  const number = (min, max) => {
    const result = Math.floor(Math.random() * (max - min)) + min;
    return result;
  };

  const vertical = (currentCoY) => {
    const forbiddenZoneY = [
      currentCoY - platform[1] * 4,
      currentCoY + platform[1] * 4,
    ];
    const upperSide = number(boundariesY[0], forbiddenZoneY[0]);
    const bottomSide = number(forbiddenZoneY[1], boundariesY[1]);
    if (currentCoY < 250) { return bottomSide; }
    if (currentCoY > 400) { return upperSide; }
    return [upperSide, bottomSide][Math.floor(Math.random() * 2)];
  };

  const horizontal = () => {
    const randX = number(boundariesX[0], boundariesX[1]);
    return randX;
  };

  return {
    vertical,
    horizontal,
  };
};

export {
  // eslint-disable-next-line import/prefer-default-export
  Randomizer,
};
