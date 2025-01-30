const _ = require('lodash');

const students = [
    { name: 'Alice', grade: 88 },
    { name: 'Bob', grade: 92 },
    { name: 'Charlie', grade: 60 },
    { name: 'Diana', grade: 75 },
    { name: 'Frank', grade: 80 },
    { name: 'Eli', grade: 95 }
  ];

const filteredStudents = _.filter(students, (student) => student.grade >= 80);
const sortedStudents = _.orderBy(filteredStudents, ['grade'], ['desc']);

console.log("Students with a grade 80 or above in descending: ");
console.log(sortedStudents);