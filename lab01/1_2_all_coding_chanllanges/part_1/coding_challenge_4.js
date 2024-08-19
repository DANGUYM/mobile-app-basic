Data_1 = [275, 40, 430];

function tipCalculator(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

for (let i = 0; i < Data_1.length; i++) {
    let tip = tipCalculator(Data_1[i]);
    console.log(`The bill was ${Data_1[i]}, the tip was ${tip}, and the total value ${Data_1[i] + tip}`);
}

tipCalculator(Data_1[0]);
tipCalculator(Data_1[1]);
tipCalculator(Data_1[2]);