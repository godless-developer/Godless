// *****
// *****
// *****
// *****
// *****


 function squareStar(num) {
    for (let j=0; j < num; j++) {
        let str = "";
        for(let i=0; i < num; i++){
            str += "*";
        }
        console.log(str);
    }
 }

 squareStar(1);

//  *****
//  *   *
//  *   *
//  *   *
//  *****


function holesquare(num) {
    for (let j=0; j < num; j++) {
        let str = "";
        for(let i=0; i < num; i++){
            if (j==0 || j== num - 1 || i == 0 || i == num - 1) {
                str += "*";
            }else {
                str += " ";
            }
        }
        console.log(str);
    }
}
holesquare(10);

// *
// **
// ***
// ****
// *****


function mirroredRightTri(num) {
    let = str = "";
    for (let j=0; j < num; j++) {
        let str = "";
        for(let i=0; i <= j; i++){
            str += "*";
        }
        console.log(str);
    }
}
mirroredRightTri(5);


// *****
// ****
// ***
// **
// *


function mirroredRightTri(num) {
    let = str = "";
    for (let j=0; j < num; j++) {
        let str = "";
        for(let i=0; i < num - j; i++){
            str += "*";
        }
        console.log(str);
    }
}
mirroredRightTri(5);

// ----*
// ---**
// --***
// -****
// *****


function mirroredleftTri(num) {
    let = str = "";
    for (let j=0; j < num; j++) {
        let str = "-";
        for(let i=0; i <= num - j; i++){
            str += "*";
        }
        console.log(str);
    }
}
mirroredleftTri(5);

// for (let i = 1; i <= 5; i++) {
//     let stars = '*'.repeat(i);         // Create a string of stars of length i
//     let spaces = ' '.repeat(5 - i);    // Create a string of spaces (5 - i)
//     console.log(spaces + stars);       // Print spaces followed by stars
//   }


function mirroredleftTri(num) {

    for (let i = 1; i <= num; i++) {
        let str = "";
        for (let j = 1; j <= num - i; j++) {
            str += " "; 
        }
        for (let k = 1; k <= i; k++) {
            str += "*"; 
        }
        console.log(str);
    }
}

mirroredleftTri(5);




hi zaluusaaa


  