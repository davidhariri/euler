'use strict';
console.time("s");

/*
NOTE:
"Special Pythagorean triplet"

A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

a^2 + b^2 = c^2
For example, 3^2 + 4^2 = 9 + 16 = 25 = 52.

There exists exactly one Pythagorean triplet for which a + b + c = 1000.
Find the product abc.
*/

let s = 0;

for (let c = 1; c <= 998; c++) { // 998 because the minimum solution is 1 + 1 + 998
  for (let b = 1; b < c; b++) {
    for (let a = 1; a < b; a++) {
      if(a + b + c === 1000 && a < b < c) {
        if(Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(c, 2)) {
          s = a*b*c;
          break;
        }
      }
    }
  }
}

console.log(s);
console.timeEnd("s");
