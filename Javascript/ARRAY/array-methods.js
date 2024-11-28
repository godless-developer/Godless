// let numbers = [10 , 7 , 5 , 4 , 9 ,1 ];

// console.log(numbers.length);
// console.log(numbers[numbers.length - 1]);

// numbers.pop();
// console.log(numbers);
// [ 10, 7, 5, 4, 9 ]

// numbers.shift();
// console.log(numbers);
// [ 7, 5, 4, 9, 1 ]

// bvh sondgoi toonuudiig oloh
// let numbers = [10 , 7 , 5 , 4 , 9 ,1 ];

// function findoddnumbers (input) {
//     let oddNumbers = [];
//     for ( i = 0 ; i < input.length; i++) {
//         if(input[i] % 2 !== 0) {
//             oddNumbers.push(input[i]);
//         }
//     }
//     return oddNumbers;
// }

// let answer = findoddnumbers(numbers);
// console.log(answer);


//bvh tegsh toonuudiig oloh


// function findEvenNumbers (input) {
//     let evenNumbers = [];
//     for ( i = 0; i < input.length ; i++) {
//         if ( input[i] % 2 == 0) {
//             evenNumbers.push(input[i])
//         }
//     }
//     return evenNumbers;
// }

// let answer = findEvenNumbers([10 , 7 , 5 , 4 , 9 ,1 ]);
// console.log(answer);

// function findNum(arr) {
//     let minNum = arr[0];
//     for ( let i = 0; i < arr.length - 1; i++) {
//         if ( minNum > arr[i + 1]) {
//             minNum = arr[i + 1];
//         }
//     }
//     return minNum;
// }

// function findEvenNumbers (input) {
//     let evenNumbers = [];
//     let minNum = input[0];
//     for ( i = 0; i < input.length ; i++) {
//         if ( input[i] % 2 == 0) {
//             evenNumbers.push(input[i])
//         }
//     }
//     return evenNumbers;
// }

// let answer = findEvenNumbers([10 , 7 , 5 , 4 , 9 ,1 ]);
// let minOdd = findNum(answer);
// console.log(minOdd);





let guilgee = [234, 4234, -2342, 4234, -342, 243, -34234, 4234, -23423, 423, -3424, ]

function findSum (arr) {
    let sum = arr[0];
    for ( let i = 0 ; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum;
}

function findOrlogo (input) {
    let middle = [];
    for (i = 0; i < input.length; i++) {
        if (input[i] > 0) {
            middle.push(input[i]);
        }
    }
    return middle;
}

function findZarlaga (input) {
    let middle = [];
    for (i = 0; i < input.length; i++) {
        if (input[i] < 0) {
            middle.push(input[i]);
        }
    }
    return middle;
}

let answerOrl = findOrlogo(guilgee);
console.log("Таны орлого" , " = " ,answerOrl);


let answerZar = findZarlaga(guilgee);
console.log("Таны зарлага" , " = " , answerZar);


let sumOrl = findSum(answerOrl);
console.log("Нийт орлого" , "=" ,sumOrl);


let sumZar = findSum(answerZar);
console.log("Нийт зарлага" , "=" ,sumZar);

let niilber = sumOrl+sumZar;
console.log("Profit" ,"=" ,niilber);


