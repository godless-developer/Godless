1. //Write a C program to print all natural numbers from 1 to n. – using while loop
let n = 50;

for( i = 1 ; i <= n ; i = i + 1 ) {
    console.log(i)
}
2. //Write a C program to print all natural numbers in reverse (from n to 1). – using while loop
let n = 50;

for( i = n ; i > 0 ; i = i -1 ) {
    console.log(i)
}
3. //Write a C program to print all alphabets from a to z. – using while loop (LATER)

let letter = 'a';  // Initialize letter to 'a'

while (letter <= 'z') {
    console.log(letter);  // Print the current letter
    letter = String.fromCharCode(letter.charCodeAt(0) + 1);  // Move to the next letter
}
4. //Write a C program to print all even numbers between 1 to 100. – using while loop
let n = 100;

for( i = 2 ; i <= 100; i = i + 2) {
    console.log(i)
}
5. //Write a C program to print all odd number between 1 to 100.
let n = 100;

for( i = 1 ; i <= 100; i = i + 2) {
    console.log(i)
}
6. //Write a C program to find sum of all natural numbers between 1 to n.
let n = 100;
let sum = 0;

for(i = 1 ; i <= n ; i++) {
    sum += i;
}
console.log(n + sum)
7. //Write a C program to find sum of all even numbers between 1 to n.
let n = 100;
let sum = 0;

for( i =2 ; i <= 100; i=i+2) {
    sum +=i
}
console.log(n+sum)
8. //Write a C program to find sum of all odd numbers between 1 to n.
let n = 100;
let sum = 0;

for( i =1 ; i <= 100; i=i+2) {
    sum +=i
}
console.log(n+sum)
9. //Write a C program to print multiplication table of any number.
let number = 8;

for (let i = 1; i <= 10; i++) {
    console.log(number, "x", i, "=", number * i);
}
10 //.Write a C program to count number of digits in a number. (LATER)

let n = 2834798234;

for(i = n ; i > 0 ; i = Math/floor(i/10)) {
    count ++;
}
console.log(count)


