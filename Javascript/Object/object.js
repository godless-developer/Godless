// let students = {
//     name: "boldoo",
//     age: 15,
//     school: "oyunlag",
//     gender: "male"
// };

// students.age = 16;
// students.grades[1] = 100;

let students = [
  { name: "dorjoo", age: 4, gender: "male" },
  { name: "dulmaa", age: 34, gender: "female" },
  { name: "dondog", age: 54, gender: "male" },
  { name: "bataa", age: 2, gender: "male" },
  { name: "tsetsgee", age: 28, gender: "female" },
];

function findAdults(input) {
  let adults = [];
  for (let i = 0; i < input.length; i++) {
    if (input[i].age >= 18) {
      adults.push(input[i]);
    }
  }
  return adults;
}

let resultAdults = findAdults(students);
// console.log(resultAdults);

function findMales(input) {
  let males = [];
  for (let i = 0; i < input.length; i++) {
    if (input[i].gender == "male") {
      males.push(input[i]);
    }
  }
  return males;
}

let result = findMales(students);
console.log(result);
