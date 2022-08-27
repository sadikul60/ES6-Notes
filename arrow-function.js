// arrow function and default parameter

/**
 // -------- function ----------//
    kono akta operation ke akadhik line e code korar maddhome tar value output e niye asha hocche deafault functione er kaj. ja progemmer ke coding e boring kore tule;
 */
// parameter chara function
function run (){
    return 6 + 6;
}

// akti parameter niye function
function run1 (num){
    return num * 2;
}

// duti parameter niye function
function run2 (num1, num2){
    return num1 + num2;
}

// akadhik parameter niye function
function run3 (num1, num2, num3){
    return num1 + num2 + num3;
}

// 
// duti parameter niye and default parameter niye function. (default parameter er mane hocche, jodi parameter value dite vule jai ba na dei , tahole output NaN na diye right output dibe. )
function run4 (num1, num2 =0){
    return num1 + num2;
}
console.log(run4(4, 6,));



/**
 // ---------- arraw function----------//
    akadhik line er default function er code ke ak line e likhai hocche arrow function er kaj;
 */
// parameter chara arrow function
const add = () => 6 + 12;
// console.log(add())

// akti parameter niye arrow function
const add1 = num => num * 2;

// duti parameter niye arrow function
const add2 = (num1, num2) => num1 + num2;

// multy-line arrow function (multy-line arrow function declar korle must be return korte hobe. mane return use korte hobe)
const add3 = (num1, num2, num3) => {
    return num1 + num2 + num3;
}


// duti parameter niye and default parameter niye arrow function. (default parameter er mane hocche, jodi parameter value dite vule jai ba na dei , tahole output NaN na diye right output dibe. abar parameter er jodi kono value e na dei tahole output (0) dekhabe. )
const add4 = (num1 = 0, num2 = 0) => num1 + num2;
console.log(add4(10));
console.log(add4());