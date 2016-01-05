'use strict';
console.time("s");

/*
NOTE:
"Smallest multiple"

2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
*/

let s = 0;
let found = false;

while(!found) {
  s++;
  const x = [];
  for (let i = 2; i <= 20; i++) {
    if(s % i === 0) {
      x.push(i);
    }
  }

  if(x.length === 19) {
    found = true;
  }
}

console.log(s); // FIXME: This took 36s... there has to be an optimization that can be made
console.timeEnd("s");
