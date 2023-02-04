// The following function returns the smallest of two numbers:

export function min(number1, number2) {
  if (number1 < number2) {
    return number1;
  }

  // returns number2 here because it is either smaller or equal to number1
  return number2;
}
