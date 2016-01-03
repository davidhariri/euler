'use strict';
console.time('s');

/*
NOTE:
"Largest prime factor"

The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?
*/

function findPrimeFactorsOf(n) {
  const primeFactors = [];
  let factor = 2;

  // Iterate through all numbers (potential primes) less than or equal to n and greater than 2
  for (let i = 2; i <= n; i++) {
    // TODO: This can be further optimized with fermat's decomposition
    // To ensure this is a prime number, we check to make sure it's divisible by
    // itself and reduce it to it's *lowest* factor (which must be prime)
    while(n % i === 0) {
      primeFactors.push(i);
      n = n / i;
    }
  }

  return primeFactors;
}

console.log(findPrimeFactorsOf(600851475143));
console.timeEnd('s');
