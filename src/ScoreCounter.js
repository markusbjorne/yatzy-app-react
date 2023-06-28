export function upperSum(dices, value) {
    return dices.filter(dice => dice === value).length * value;
}

export function twoPairs(dices) {

    const sumOnes = dices.filter(dice => dice === 1).length >= 2 ? 2 : 0;
    const sumTwos = dices.filter(dice => dice === 2).length >= 2 ? 4 : 0;
    const sumThrees = dices.filter(dice => dice === 3).length >= 2 ? 6 : 0;
    const sumFours = dices.filter(dice => dice === 4).length >= 2 ? 8 : 0;
    const sumFives = dices.filter(dice => dice === 5).length >= 2 ? 10 : 0;
    const sumSixes = dices.filter(dice => dice === 6).length >= 2 ? 12 : 0;

    let sum = 0;
    let pairs = 0;
    if (sumSixes > 0) {
        sum = sumSixes;
        pairs++;
    }
    if (sumFives > 0) {
        sum += sumFives;
        pairs++;
    }
    if (sumFours > 0) {
        sum += sumFours;
        pairs++;
    }
    if (sumThrees > 0) {
        sum += sumThrees;
        pairs++;
    }
    if (sumTwos > 0) {
        sum += sumTwos;
        pairs++;
    }
    if (sumOnes > 0) {
        sum += sumOnes;
        pairs++;
    }

    return pairs === 2 ? sum : 0;
}

export function numberOfKind(dices, number) {

    const sumOnes = dices.filter(dice => dice === 1).length >= number ? number * 1 : 0;
    const sumTwos = dices.filter(dice => dice === 2).length >= number ? number * 2 : 0;
    const sumThree = dices.filter(dice => dice === 3).length >= number ? number * 3 : 0;
    const sumFours = dices.filter(dice => dice === 4).length >= number ? number * 4 : 0;
    const sumFives = dices.filter(dice => dice === 5).length >= number ? number * 5 : 0;
    const sumSixes = dices.filter(dice => dice === 6).length >= number ? number * 6 : 0;

    if (sumSixes > 0) return sumSixes;
    else if (sumFives > 0) return sumFives;
    else if (sumFours > 0) return sumFours;
    else if (sumThree > 0) return sumThree;
    else if (sumTwos > 0) return sumTwos;
    else if (sumOnes > 0) return sumOnes;
    else return 0;
}

export function smallStraight(dices) {
    const d = dices.sort();
    for (let index = 0; index < 5; index++) {
        if (d[index] !== (index + 1)) {
            return 0;
        }
    }
    return 15;
}

export function largeStraight(dices) {
    const d = dices.sort();
    for (let index = 0; index < 5; index++) {
        if (d[index] !== (index + 2)) {
            return 0;
        }
    }
    return 20;
}

export function fullHouse(dices) {

    const sumThreeOfKind = numberOfKind(dices, 3);

    if (sumThreeOfKind === 0) {
        return 0;
    } else {
        const value = Math.round(sumThreeOfKind / 3);

        let rest = [];
        dices.forEach(dice => {
            if (value !== dice) {
                rest.push(dice);
            } 
        });

        if (rest.length === 2 && (rest[0] === rest[1])) {
            return sumThreeOfKind + rest[0] + rest[1];
        } else {
            return 0;
        }
    }
}

export function sum(dices) {
    let sum = 0;
    dices.forEach(dice => sum += dice);
    return sum;
}

export function yatzy(dices) {
    const sum = numberOfKind(dices, 5);
    if (sum === 0) {
        return 0;
    }
    return 50;
}

export function randomDice() {
    Math.random();
    return Math.floor(Math.random() * 6 + 1);
  }