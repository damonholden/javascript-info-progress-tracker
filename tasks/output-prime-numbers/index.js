// An integer number greater than 1 is called a prime if it cannot be divided
// without a remainder by anything except 1 and itself.

// In other words, n > 1 is a prime if it can’t be evenly divided by anything
// except 1 and n.

// For example, 5 is a prime, because it cannot be divided without a remainder
// by 2, 3 and 4.

// Write the code which outputs prime numbers in the interval from 2 to n.

// For n = 10 the result will be 2,3,5,7.

// P.S. The code should work for any n, not be hard-tuned for any fixed value.

{
  let maxNumber = 100;

  primeLoop: for (
    let potentialPrime = 2;
    potentialPrime <= maxNumber;
    potentialPrime++
  ) {
    for (
      let numberLessThanPotentialPrime = 2;
      numberLessThanPotentialPrime < potentialPrime;
      numberLessThanPotentialPrime++
    ) {
      if (potentialPrime % numberLessThanPotentialPrime === 0) {
        continue primeLoop;
      }
    }

    alert(`${potentialPrime} is prime.`);
  }
}

// There are many ways to solve this task. The previous example is not a very
// efficient solution, but it does work. More efficient algorithms include the
// Sieve of Eratosthenes and the Sieve of Sundaram (according to Copilot).
