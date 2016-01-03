'use strict';
console.time("s");

String.prototype.reverse = function() {
    var s = "";
    var i = this.length;
    while (i>0) {
        s += this.substring(i-1,i);
        i--;
    }
    return s;
}

/*
NOTE:
"Largest palindrome product"

A palindromic number reads the same both ways. The largest palindrome made
from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.
*/

let s = 0;

// TODO: is there an optimization that can be made to
// predictivaley make even-numbered products?
const palindromaticNumbers = [];

for (var i = 100; i <= 999; i++) {
  for (var j = 100; j <= 999; j++) {
    const potentialPalindrome = i * j;
    const pStr = `${potentialPalindrome}`;
    const pLen = pStr.length;

    if(pLen % 2 === 0) { // A palindromatic word must have an even length
      const pStrMirror = pLen/2;
      const pStrLs = pStr.substring(0, pStrMirror);
      const pStrRs = pStr.substring(pStrMirror);

      // Reverse the left side to compare both sides
      const flippedRs = pStrRs.reverse();

      if(pStrLs === flippedRs) {
        palindromaticNumbers.push(potentialPalindrome);
      }
    }
  }
}

console.log(Math.max.apply(Math, palindromaticNumbers));
console.timeEnd("s");
