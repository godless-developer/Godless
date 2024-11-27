//Array
 //let ages = [10, 15, 20, 25, 30, 35, 40, 45];
//  let names = [ "bataa", "boldoo", "bayaraa", "suhee", "boogii", "naraa", "chimegee", "hulan"];

//  console.log(ages[5]);
//  console.log(names[6]);
//  console.log(ages.length);
//  console.log(names.length);


 //nasnuudiin niilberiig oloh

//  function findSumAges(ages) {
//     let sum = 0;
//     for ( let i = 0; i < ages.length; i++) {
//         sum = sum + ages[i];
//     }
//     return sum;
//  }
//  let answer = findSumAges([10, 15, 20, 25, 30, 35, 40, 45]);
//  console.log(answer);


//   let average = answer / ages.length;
//   console.log(average);

// toonuudiin hamgiin ih toog oloh

// let numbers = [45, 12, 67, 98, 78, 345, 546, 789, 567, 345, 867, 345, 67, 786];

// function findNum(arr) {
//    let maxNum = arr[0];
//    for(let i = 0; i < arr.length - 1; i++) {
//      if (maxNum < arr[i + 1]) {
//         maxNum = arr[i + 1];
//      }
//    }
//    return maxNum;
// }

// let answer = findNum(numbers);
// console.log(answer);

// toonuudiin hamgiin baga toog oloh 

// let numbers = [45, 12, 67, 98, 78, 345, 546, 789, 567, 345, 867, 345, 67, 786];

// function findNum(arr) {
//     let minNum = arr[0];
//     for ( let i = 0; i < arr.length - 1; i++) {
//         if ( minNum > arr[i + 1]) {
//             minNum = arr[i + 1];
//         }
//     }
//     return minNum;
// }

// let answer = findNum(numbers);
// console.log(answer);

// toonuudiin hamgiin baga sondgoi toog oloh

// let numbers = [2, 12, 67, 98, 78, 345, 546, 789, 567, 25, 345, 867, 345, 23, 67, 786];

// function findNumOdd(arr) {
//     let minNum = arr[0];    
//     for ( let i = 0; i < arr.length - 1; i++) {
//         if (arr[i] % 2 !== 0) {
//             if (minNum > arr[i + 1]) {
//                 minNum = arr[i + 1];
//             }
//         }
//     }
//     return minNum;
// }

// let answer = findNumOdd(numbers);
// console.log(answer);

let numbers = [2, 12, 67, 98, 78, 345, 546, 789, 567, 25, 345, 867, 345, 23, 67, 786];

function findOdd(arr) {
    let odd = arr[0];
    for ( let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            odd = arr[i];
        }
    }
    return odd;
}

let answer = findOdd(numbers);
console.log(answer);