
// Optional Chain (chaining);
const person = {
    nama: 'Hasan Ali',
    age: 22,
    contact: {
        phone: '01741524136',
        email: 'hasanali@gmail.com ',
    },
    cat: {
        name: 'lotif',
        info: {
            color: 'black',
            weight: '1.40 kg',
        },
    },
};


// uses optional chainingm (optional chain use korar fole. optional chain er kaj e hocche , jodi object er moddhe kono value na khuje pai tahole TypeError na diye porer code run kora (kore).  and er value output e Undefind dekhai. tai ondhokare object e dhil marte chaile optional chain (?) operator use korbo ).
console.log(person?.dog?.name);
console.log(person.cat.info.color)