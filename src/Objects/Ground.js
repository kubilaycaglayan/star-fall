const Ground = () => {
  const timeOuts = [];
  const removeAfter = (group, removeInternal, child) => {
    const tOut = setTimeout(() => {
      group.remove(child, true, true);
    }, removeInternal);
    timeOuts.push(tOut);
  };

  const stop = () => {
    timeOuts.forEach(tOut => {
      clearTimeout(tOut);
    });
    return true;
  };

  const setVisibilityAfter = (child, time) => {
    setTimeout(() => {
      child.setVisible(true);
    }, time);
  };

  const startCycle = (group, coX, coY, removeInternal, visibility) => {
    const child = group.create(coX, coY, 'platform', 0, visibility).setScale(1, 0.2).refreshBody();
    setVisibilityAfter(child, removeInternal / 5);
    removeAfter(group, removeInternal, child);
  };

  const createAndRemoveAfter = (group, coX, coY, removeInternal, visibility, cb = startCycle) => {
    cb(group, coX, coY, removeInternal, visibility);
  };

  return {
    stop,
    createAndRemoveAfter,
  };
};

export {
  // eslint-disable-next-line import/prefer-default-export
  Ground,
};