Data_1 = {
    Dolphins: [96, 108, 89],
    Koalas: [88, 91, 110]
}

Data_Bonus_1 = {
    Dolphins: [97, 112, 101],
    Koalas: [109, 95, 123]
}

Data_Bonus_2 = {
    Dolphins: [97, 112, 101],
    Koalas: [109, 95, 106]
}

function calculateAverageScore(scores) {
    let sum = 0;
    for (let i = 0; i < scores.length; i++) {
        sum += scores[i];
    }
    return sum / scores.length;
}

function compareAverageScore(Data) {
    let dolphinsAverage = calculateAverageScore(Data.Dolphins);
    let koalasAverage = calculateAverageScore(Data.Koalas);
    if (dolphinsAverage > koalasAverage) {
        console.log(`Dolphins win with an average score of ${dolphinsAverage}`);
    } else if (dolphinsAverage < koalasAverage) {
        console.log(`Koalas win with an average score of ${koalasAverage}`);
    } else {
        console.log(`It's a draw with an average score of ${dolphinsAverage}`);
    }
}

function compareAverageScoreBonus(Data) {
    let dolphinsAverage = calculateAverageScore(Data.Dolphins);
    let koalasAverage = calculateAverageScore(Data.Koalas);
    if (dolphinsAverage > koalasAverage && dolphinsAverage >= 100) {
        console.log(`Dolphins win with an average score of ${dolphinsAverage}`);
    } else if (dolphinsAverage < koalasAverage && koalasAverage >= 100) {
        console.log(`Koalas win with an average score of ${koalasAverage}`);
    } else if (dolphinsAverage === koalasAverage && dolphinsAverage >= 100) {
        console.log(`It's a draw with an average score of ${dolphinsAverage}`);
    } else {
        console.log(`No team wins the trophy`);
    }
}

compareAverageScore(Data_1);
compareAverageScore(Data_Bonus_1);
compareAverageScore(Data_Bonus_2);
compareAverageScoreBonus(Data_1);
compareAverageScoreBonus(Data_Bonus_1);
compareAverageScoreBonus(Data_Bonus_2);
