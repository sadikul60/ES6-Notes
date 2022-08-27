// template string er kaj hocche multy-line e value ke output dekhano.
const name = 'Sadikul';
const age = 21;
const job = 'bekar';

// const sentence = 'Amar name \n' + name + '\namar boyos' + age + '\nami' + job;


const sentence = `Amar name ${name}.
Amar boyos ${age}.
ami ${job}.`
console.log(sentence)