

// -----spread method-----//
const numbers1 = [21, 23, 0, -77, 42, 12, 44, 25, 30, 66, 27];
const numbers2 = [35, 37, 99, 12]
const newArray = [...numbers1, ...numbers2, 433];
const minNumber = Math.min(...newArray);
const maxNumber = Math.max(...newArray)

// console.log(minNumber);
// console.log(maxNumber)


//----------destructuring----------//
const [a, b, c, ...rest] = newArray;
console.log(a, b, c, rest);
console.log(rest);
console.log(a, b, c, ...rest);


// ----------- Array Copy ----------//

const x = [1, 2, 3, 4, 5, 6, 7];

/* const y = x;
x.push(33) */

// this spread operator
const y = [...x];

/*
// amra chaile loop chaliye x er value y e push korte pari. but seta korbo na. amra spread operator use korbo.
 for (const item of x){
    y.push(item);
} */

x.push(33, 54)
y.push(122)
console.log(x)
console.log(y)