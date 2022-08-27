// arrow function declaration ( map, forEach, find and filter method)
const numbers = [13, 23, 33, 24, 15, 26, 37, 18, 49, 10];


const names = ['hasan', 'jamal', 'karim', 'akash', 'hasibur', 'nabil chowdhury'];

/* // old verson (uses for loop)
for (const name of names){
    console.log(name);
}
// */

/**
 // ------------ forEach method --------//
 1. new verson ES6 (uses forEach method {loop method})--- forEach method (function), for loop er moto kaj kore. mane array er prottekta item ke khuje pete help kore. array er element ke output e dekhai.
 
 2. but new array return kore na. mane forEach kono array return kore na. new value return kore na. just element gulu return kore.

 3. array soho forEach method ke kono akta variable e declar korle output undefind dekhai. kono operation o chalano jai na.
 */

// names.forEach(name => console.log(name));
// numbers.forEach(n => console.log(n*2))
const x = numbers.forEach(n => n);
// console.log(x);



/**
 // ------------ map method --------//
 1. new verson ES6 (uses map method {loop method})--- map method (function), for loop er moto kaj kore. mane array er prottekta item ke khuje pete help kore. array er element ke output e dekhai.
 
 2. new array return kore. mane map new array return kore. variable declar korle array hisebe output e dekhai. operation chalale array er majei operation er kaj hoi.
 */
//  numbers.map(number => console.log(number));
 const a = numbers.map(n => n);
 const b = numbers.map(n => n * 2)
//  console.log(b);


const marks = [13, 23, 33, 24, 15, 26, 37, 18, 49, 10];


// ----------- find method (condition) ------------//

/**
 1. find er kaj holo, je kono akta value output hisebe deya.
 2. find method er kaj hocche array er majer items theke condition onujayi first item ta output e dibe. mane condition chaliye farst je value ta ke sorto onujayi pabe setai return korbe. tobe kono array return korbe na.

 3. akadhik condition appy kora jabe.
 */
const result = marks.find(m => m > 20 && m % 2 == 0);
console.log(result);


// ----------- filter method (condition) -------------//

/**
 1. filter er kaj holo array theke array return kora. mane output hisebe alltime array return korbe.

 2. filter method er kaj hocche array er majer items theke condition onujayi jotoguli items filter (cheke) pabe thik toto guloi output e dibe. mane condition chaliye ja value pabe ta sorto onujayi return korbe.

 3. filter e akadhik condition chalano jabe.
 */

 const largest = marks.filter(m => m > 37);
 const bigEven = marks.filter(m => m > 20 && m % 2 === 0)
 console.log(bigEven);

 
 // 2 == '2'  //true // double equal er kaj holo just value chek kora
 // 2 === '2'  //false  // threeple equal er kaj holo value and data type  check kora.