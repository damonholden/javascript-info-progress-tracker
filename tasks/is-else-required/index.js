// The following function returns `true` if the parameter `age` is greater that
// `18`, otherwise, it asks for a confirmation and returns its results:

{
  function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
      return confirm('Did parents allow you?');
    }
  }
}

// because the if statement returns control if true, there is no need for the
// `else` clause:

{
  function checkAge(age) {
    if (age > 18) {
      return true;
    }
    return confirm('Did parents allow you?');
  }
}

// The two previous snippets are functionally the same, but omitting the `else`
// clause makes the code footprint smaller.
