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