// The following function returns `true` if the parameter is greater than `18`,
// otherwise, it asks for a confirmation and returns its result.

{
  function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
      return confirm('Did parents allow you');
    }
  }
}

// The following two pieces of code perform the same actions, but without the
// `if` statement.

// This first variant uses the ternary (`?`) operator:

{
  function checkAge(age) {
    return age > 18 ? true : confirm('Did parents allow you');
  }
}

// This second variant uses the OR (`||`) operator:

{
  function checkAge(age) {
    return age > 18 || confirm('Did parents allow you');
  }
}
