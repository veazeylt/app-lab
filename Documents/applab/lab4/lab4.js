// studyNumber1: what numbers our data types correlate to
// shoeTypes: sneaker = 1.0; dressShoe = 1.5; sandal = 2.0
// drinkTypes: hot = 1.0; cold = 2.0

// data
const data = [
    {shoeType: 1.0, drinkType: 1.0},
    {shoeType: 1.0, drinkType: 2.0},
    {shoeType: 1.5, drinkType: 2.0},
    {shoeType: 2.0, drinkType: 1.0},
    {shoeType: 1.0, drinkType: 1.0},
    {shoeType: 1.5, drinkType: 2.0},
    {shoeType: 1.5, drinkType: 1.0},
    {shoeType: 2.0, drinkType: 2.0},
    {shoeType: 1.5, drinkType: 1.0},
    {shoeType: 2.0, drinkType: 1.0},
    {shoeType: 1.0, drinkType: 2.0},
    {shoeType: 1.0, drinkType: 2.0},
    {shoeType: 1.0, drinkType: 2.0},
    {shoeType: 2.0, drinkType: 1.0},
    {shoeType: 1.0, drinkType: 2.0},
    {shoeType: 2.0, drinkType: 2.0},
    {shoeType: 1.0, drinkType: 2.0},
    {shoeType: 1.0, drinkType: 1.0},
    {shoeType: 1.5, drinkType: 2.0},
    {shoeType: 2.0, drinkType: 2.0},
    {shoeType: 1.0, drinkType: 1.0},
    {shoeType: 1.0, drinkType: 1.0},
    {shoeType: 1.0, drinkType: 2.0},
    {shoeType: 2.0, drinkType: 2.0},
    {shoeType: 1.0, drinkType: 1.0},
    {shoeType: 1.5, drinkType: 2.0},
    {shoeType: 1.0, drinkType: 1.0},
    {shoeType: 2.0, drinkType: 1.0},
    {shoeType: 1.5, drinkType: 2.0},
    {shoeType: 2.0, drinkType: 2.0},
    {shoeType: 2.0, drinkType: 2.0},
    {shoeType: 2.0, drinkType: 1.0},
    {shoeType: 2.0, drinkType: 2.0}
];

const n = data.length;

const xSquaredSum = () => {
    count = 0;
    for(i=0;i<data.length;i++) {
        count = Math.pow(data[i].shoeType, 2) + count;
    }
    return count;
}

const ySquaredSum = () => {
    count = 0;
    for(i=0;i<data.length;i++) {
        count = Math.pow(data[i].drinkType, 2) + count;
    }
    return count;
}

const sumXSquared = () => {
    count = 0;
    for(i=0;i<data.length;i++) {
        count = data[i].shoeType + count;
    }
    return Math.pow(count,2);
}

const sumYSquared = () => {
    count = 0;
    for(i=0;i<data.length;i++) {
        count = data[i].drinkType + count;
    }
    return Math.pow(count,2);
}

const sumXTimesY = function() {
    count = 0;
    for(i=0;i<data.length;i++) {
        count = data[i].shoeType * data[i].drinkType + count;
    }
    return count;
}

const pearsonCorrelation = () => {
    return (sumXTimesY() - sumXTimesY()/n) / ((Math.sqrt(xSquaredSum()) -(sumXSquared()/n)) * (Math.sqrt(ySquaredSum()) -(sumYSquared()/n)));
}

// 
console.log(pearsonCorrelation());