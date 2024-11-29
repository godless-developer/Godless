// 1.Gatsuur

// let tree = "";

// function line( height , width) {
//     for ( let i = 1 ; i <= height ; i++)
//         console.log(tree += width)
// }
// line(50 , "*")
// 2. iheesee 2 dahi toog onslotchange

// function too(a, b, c) {
//     if (a > b) {
//         if ( c > a) {
//             console.log(a)
//         }else {
//             if (b < c) {
//                 console.log(c)
//             }else {
//                 console.log(b)
//             }
//         }
//     }else { b > a
//         if ( c < a) {
//             console.log(a)
//         }else {
//             if ( b < c) {
//                 console.log(b)
//             }else {
//                 console.log(c)
//             }
//         }
//     }
// };

// too( 26, 13, 45);

// 3. Functiond n too orj irhed ter too hurtel hevlene.
//     hevlehdee 3t huvaagddag bol "Fizz" 5t huvaagddag bol "Buzz"
//     2uulandn huvaagddag bol FizzBuzz
//     input: 15
//     output: 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz .... 14, FizzBuzz

// function number(n) {
//     for( let i = 1 ; i <= n ; i++){
//         if ( i % 3 === 0 && i % 5 === 0) console.log("FizzBuzz");
//             else if ( i % 3 === 0) console.log("Fizz");
//             else if ( i % 5 === 0) console.log("Buzz");
//             else console.log(i);
//     }
// }
// number(300);

let students = [
  { name: "Alex", age: 14, grades: [88, 92, 75, 84, 90], gender: "male" },
  { name: "Bella", age: 16, grades: [95, 89, 92, 85, 94], gender: "female" },
  { name: "Carlos", age: 15, grades: [78, 82, 85, 88, 80], gender: "male" },
  { name: "Diana", age: 17, grades: [90, 92, 88, 85, 93], gender: "female" },
  { name: "Ethan", age: 14, grades: [67, 73, 79, 85, 88], gender: "male" },
  { name: "Fiona", age: 15, grades: [95, 97, 92, 91, 89], gender: "female" },
  { name: "George", age: 16, grades: [70, 75, 72, 68, 74], gender: "male" },
  { name: "Hannah", age: 14, grades: [82, 85, 87, 90, 91], gender: "female" },
  { name: "Ian", age: 17, grades: [84, 78, 76, 89, 85], gender: "male" },
  { name: "Julia", age: 15, grades: [90, 88, 94, 95, 93], gender: "female" },
  { name: "Kevin", age: 16, grades: [60, 65, 62, 68, 70], gender: "male" },
  { name: "Lily", age: 14, grades: [87, 90, 85, 86, 91], gender: "female" },
  { name: "Mike", age: 15, grades: [81, 79, 83, 80, 82], gender: "male" },
  { name: "Nina", age: 16, grades: [93, 95, 92, 94, 90], gender: "female" },
  { name: "Oscar", age: 15, grades: [71, 74, 73, 70, 75], gender: "male" },
  { name: "Paula", age: 17, grades: [99, 98, 97, 100, 96], gender: "female" },
  { name: "Quinn", age: 14, grades: [66, 70, 65, 68, 72], gender: "female" },
  { name: "Riley", age: 16, grades: [89, 90, 92, 93, 91], gender: "female" },
  { name: "Sam", age: 15, grades: [78, 82, 80, 83, 85], gender: "male" },
  { name: "Tina", age: 17, grades: [90, 92, 87, 91, 88], gender: "female" },
];
//suragchdiin dvngiin dundajiig ol

// function findOneStudentAverageGrades(oneStudent) {
//   let grades = oneStudent.grades;
//   let sum = 0;
//   for (let i = 0; i < grades.length; i++) {
//     sum += grades[i];
//   }
//   let average = sum / grades.length;
//   return average;
// }

// function findStudentsAverageGrades(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     let OneStudentAverageGrades = findOneStudentAverageGrades(arr[i]);
//     sum = sum + OneStudentAverageGrades;
//   }
//   let allAverages = sum / students.length;
//   return allAverages;
// }

// let answer = findStudentsAverageGrades(students);
// console.log(answer);

//nasnuudiin dundajiiig oloh

function findAverageAge(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i].age;
  }
  let AveragesAge = sum / arr.length;
  return AveragesAge;
}
let answer = findAverageAge(students);
console.log(answer);
