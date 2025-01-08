'use strict';
console.time("s");

/*
NOTE:
"Sum square difference"

The sum of the squares of the first ten natural numbers is,

12 + 22 + ... + 102 = 385
The square of the sum of the first ten natural numbers is,

(1 + 2 + ... + 10)2 = 552 = 3025
Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
*/

let s = 0;
let ss = 0;

for (var i = 0; i <= 100; i++) {
    s += i;
    ss += Math.pow(i, 2);
}

s = Math.pow(s, 2);

s -= ss;

console.log(s);
console.timeEnd("s");
