import * as Storage from './ScoreStorage';

const upperKeys = ['ones', 'twos', 'threes', 'fours', 'fives', 'sixes'];
const lowerKeys = [
  'bonus',
  'pair',
  'tow-pairs',
  'three-of-a-kind',
  'four-of-a-kind',
  'small-straight',
  'large-straight',
  'full-house',
  'chance',
  'yatzy',
];

const bonusKey = 'bonus';

export function upperSum() {
  let sum = 0;
  upperKeys.forEach((key) => (sum = Storage.getValue(key) + sum));
  return sum;
}

export function bonus() {
  const bonus = upperSum();

  if (bonus > 63) {
    Storage.setValue(bonusKey, 35);
    return 35;
  }

  return 0;
}

export function totalSum() {
  let sum = upperSum() + Storage.getValue(bonusKey);
  lowerKeys.forEach((key) => (sum = Storage.getValue(key) + sum));
  return sum;
}

export function getRound() {
  let round = 0;
  upperKeys.forEach((key) => {
    if (Storage.getValue(key) != null) {
      round++;
    }
  });
  lowerKeys.forEach((key) => {
    if (Storage.getValue(key) != null) {
      round++;
    }
  });

  return round;
}
