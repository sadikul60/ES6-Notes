
// problem solving
const students = [
    {name: 'nasim billah', email: 'nasim@gmail.com', avg: 59, fiftypercent: true},
    {name: 'hasan ali', email: 'hasan@gmail.com', avg: 54, fiftypercent: true},
    {name: 'hasibur', email: 'hasibur@gmail.com', avg: 51, fiftypercent: false},
    {name: 'sakib', email: 'sakibm@gmail.com', avg: 44, fiftypercent: true},
    {name: 'asad', email: 'asad@gmail.com', avg: 58, fiftypercent: false},
];

const scicResult = students.filter(s => s.avg >= 50 && s.fiftypercent == true);
console.log(scicResult);