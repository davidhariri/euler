'use strict';
console.time('s');

/*
NOTE:
"Largest prime factor"

The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?
*/

let s = 0;

function findPrimeNumbersUpTo(max) {
  // Generate all prime numbers to a max using trial division and the sieve of
  // Eratosthenes

  // First generate a list of all the numbers from 1 to max
  const potentialPrimeList = [];

  for (let i = 1; i <= max; i++) {
    potentialPrimeList.push(i);
  }

  // Second, iterate through the list and check to see what numbers are prime,
  // crossing off multiples of those prime numbers as we go
  const primeList = [];

  while (potentialPrimeList.length > 0) {
    // Save and remove the element from the potentialPrimeList
    // (we'll save it if we need to at the end)
    const potentialPrime = potentialPrimeList.shift();

    // Check existing prime numbers to evaluate whether it is divisble only by itself
    let isPrime = true;

    for (let i = 0; i < primeList.length; i++) {
      const p = primeList[i];

      if(p !== 1 && potentialPrime !== p && potentialPrime % p === 0) {
        isPrime = false;
        break;
      }
    }

    // Add it to the prime list if it was indeed a prime
    if(isPrime) {
      // Look ahead and remove multiples of this prime number in the
      // potentialPrimeList:
      for (let i = 0; i < potentialPrimeList.length; i++) {
        const potentialMultiple = potentialPrimeList[i];

        if(potentialMultiple % potentialPrime === 0) {
          // Remove this multiple of potentialPrime
          potentialPrimeList.splice(i, 1);
        }
      }

      // Finally, push the prime number
      primeList.push(potentialPrime);
    }
  }

  return primeList;
}

console.log(findPrimeNumbersUpTo(1000000));
console.timeEnd('s');
