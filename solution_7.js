'use strict';
console.time("s");

/*
NOTE:
"10001st prime"

By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the 10 001st prime number?
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
      // TODO: I think theres a Math.sqrt(primeList.length) I can implement to make this more efficient
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

// This is a pretty jank solution as I had this function built for another answer (#3) above in my commit log
// All I did was run it a bunch of times to get it close to 10001 and then I'll just slice off what I need
s = findPrimeNumbersUpTo(120000)[10000]
 // Apparently 1 is not a prime number and we have to count 0 so 10000 is what we want
console.log(s);
console.timeEnd("s");
