const sum = (a,b)=>{
    return a+b
}
console.log(sum(7,3))

let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}
const fromDollarToYen = (value) =>{
    return value * 127.9 / 1.2;
}
const fromEuroToDollar = (value) =>{
    return value * 1.2;
}
const fromYenToPound = (value) =>{
    return value * 0.8 / 127.9;
}
module.exports={
    sum, 
    fromEuroToDollar, 
    fromDollarToYen, 
    fromYenToPound
};