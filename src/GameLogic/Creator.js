import { Randomizer } from './Randomizer';

const Creator = () => {
  const randomizer = Randomizer();
  let createInterval = 3000;
  let removeInterval = 6000;
  let coX = 400;
  let coY = 300;
  let creationInterval;
  let firstTime = true;
  let platformGroup;
  let starGroup;
  let platformInstance;
  let starInstance;

  const clearTimers = () => {
    clearInterval(creationInterval);
    return true;
  };

  const coordinateRandomizer = () => {
    coX = randomizer.horizontal(coX);
    coY = randomizer.vertical(coY);
  };

  const creator = (platformInstance, starInstance, platforms, stars, visible = false) => {
    starInstance.createAndRemoveAfter(stars, coX, coY, removeInterval);
    platformInstance.createAndRemoveAfter(platforms, coX, coY, removeInterval, visible);
  };

  const assignInstancesToLocalVariables = (instance1, instance2) => {
    platformInstance = instance1;
    starInstance = instance2;
  };

  const assignGroupsToLocalVariables = (group1, group2) => {
    platformGroup = group1;
    starGroup = group2;
  };

  const assignAndCreate = (instance1, instance2, group1, group2) => {
    assignInstancesToLocalVariables(instance1, instance2);
    assignGroupsToLocalVariables(group1, group2);
    creator(instance1, instance2, group1, group2, true);
    firstTime = false;
  };

  const startInterval = () => {
    creationInterval = setInterval(() => {
      coordinateRandomizer();
      creator(platformInstance, starInstance, platformGroup, starGroup);
    }, createInterval);
  };

  const doIt = (
    in1 = platformInstance,
    in2 = starInstance,
    group1 = platformGroup,
    group2 = starGroup,
    cb1 = assignAndCreate,
    cb2 = startInterval,
  ) => {
    let result;
    if (firstTime) {
      result = cb1(in1, in2, group1, group2);
    }
    cb2();
    return result;
  };

  const changeIntervals = () => {
    createInterval -= 100;
    clearTimers();
    doIt();
    removeInterval -= 200;
  };

  const levelUp = (cb = changeIntervals) => cb();

  return {
    doIt,
    levelUp,
    clearTimers,
  };
};

export {
  // eslint-disable-next-line import/prefer-default-export
  Creator,
};