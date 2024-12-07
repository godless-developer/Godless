let ages = [14, 28, 98, 13, 67, 4, 22, 40];
let names = [ "bataa", "bold", "sugar", "tsetsege", "solongoo", "temka", "dalai", "nomio"];

// console.log(ages[6]);
// console.log(names[6]);
// console.log(ages.length);

                   //NASNII DUNDAJ OLOH
function findAgeSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
let answer = findAgeSum([14, 28, 98, 13, 67, 4, 22, 40]);
console.log("Niilber =" ,answer);

let average = answer / ages.length;
console.log("Dundaj =", average);
             
                   //HAMGIIN AHMAD NASTANG OLOH
function findMaxNum(arr) {
    let MaxNum = arr[0];
    for (let i = 0; i < arr.length; i++){
        if (MaxNum < ages[i+1]) {
            MaxNum = ages[i+1];
        }
    }
    return MaxNum;
}                 
let ahmad = findMaxNum([14, 28, 98, 13, 67, 4, 22, 40]);
console.log("Maxnum =" ,ahmad);


