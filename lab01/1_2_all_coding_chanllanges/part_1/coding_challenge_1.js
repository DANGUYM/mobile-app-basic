

Data_1 = {
    Marks: {
        weight: 78,
        height: 1.69
    },
    John: {
        weight: 92,
        height: 1.95
    }
}

Data_2 = {
    Marks: {
        weight: 95,
        height: 1.88
    },
    John: {
        weight: 85,
        height: 1.76
    }
}


function calculateBMI(weight, height) {
    return weight / (height * height);
}

function compareBMI(Data_1) {
    let markBMI = calculateBMI(Data_1.Marks.weight, Data_1.Marks.height);
    let johnBMI = calculateBMI(Data_1.John.weight, Data_1.John.height);
    let markHigherBMI = markBMI > johnBMI;
    console.log(markHigherBMI)
}

compareBMI(Data_1);
compareBMI(Data_2);

