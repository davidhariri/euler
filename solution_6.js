'use strict';
console.time("s");

/*
NOTE:

*/

let s = 0;
let ss = 0;

for (var i = 0; i <= 100; i++) {
    s += i;
    ss += Math.pow(i, 2);
}

s = Math.pow(s, 2);

s = s - ss;

console.log(s);
console.timeEnd("s");
