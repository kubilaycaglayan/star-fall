const Star = () => {
  const timeOuts = [];
  const removeAfter = (group, removeCountDown, ...children) => {
    children.forEach(child => {
      const tOut = setTimeout(() => {
        group.remove(child, true, true);
      }, removeCountDown);
      timeOuts.push(tOut);
    });
  };

  const stop = () => {
    timeOuts.forEach(tOut => {
      clearTimeout(tOut);
    });
    return true;
  };

  const bounce = stars => {
    stars.children.iterate((child) => {
      // eslint-disable-next-line no-undef
      child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
    });
  };

  const startCreateRemoveCycle = (stars, coX, coY, removeCountDown) => {
    const first = stars.create(coX - 150, coY - 100, 'star');
    const second = stars.create(coX, coY - 100, 'star');
    const third = stars.create(coX + 150, coY - 100, 'star');
    const starFall = (removeCountDown + removeCountDown * 0.5);
    bounce(stars);
    removeAfter(stars, starFall, first, second, third);
  };

  const createAndRemoveAfter = (stars, coX, coY, removeCountDown, cb = startCreateRemoveCycle) => {
    cb(stars, coX, coY, removeCountDown);
  };

  return {
    stop,
    createAndRemoveAfter,
  };
};

export {
  // eslint-disable-next-line import/prefer-default-export
  Star,
};