// object access
const person = {
    nama: 'Hasan Ali',
    age: 22,
    contact: {
        phone: '01741524136',
        email: 'hasanali@gmail.com ',
    },
    education: {
        schoolName: 'Shikkha board school & collage',
        subjects: [
            {name: 'Bangla', marks: 65},
            {name: 'English', marks: 76},
            {name: 'Math', marks: 80},
        ]
    },
};


// access email
// console.log(person.contact.email);

// access marks
console.log(person.education.subjects[2].marks);