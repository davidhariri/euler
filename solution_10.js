'use strict';
console.time("s");

/*
NOTE:
"Summation of primes"

The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

Find the sum of all the primes below two million.
*/

let s = 0;

function findPrimeNumbersUpTo(max) {
  let primeList = [];
  let current = 0;

  for(let i = 2; i <= max; i++) {
    primeList.push(i); // Naively assume all number are prime
  }

  while(primeList[current] <= Math.sqrt(max)) {
      primeList = primeList.filter((potentialPrime) => {
          return (potentialPrime === primeList[current] || potentialPrime % primeList[current] !== 0);
      });

      current++;
  }

  return primeList;
}

const primesBelowTwoMillion = findPrimeNumbersUpTo(10);

[...primesBelowTwoMillion].map((prime) => {
  s+=prime;
});

console.log(s);
console.timeEnd("s");
