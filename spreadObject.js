// spread object 
const person = {
    name: 'Hero Alom',
    age: 24,
    phone: '01770215430',
    address: 'Bogura',
    p: [2, 4, 6, 8],
};

const user = {
    phone: '01770215430',
    address: 'Bogura',
    p: [2, 4, 6, 8, 10, 12,],
};



// ---------- Destructuring ---------//
// const {name: his} = person;
const {name, age, phone, address, p} = person;
const [a, b, c, d, e, f] = p;
console.log(c)