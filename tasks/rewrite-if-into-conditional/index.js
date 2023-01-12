'useStrict';

// code block using if statements:
{
  let result;

  if (a + b < 4) {
    result = 'Below';
  } else {
    result = 'Above';
  }
}

// same code using conditional operator:
{
  let result = a + b < 4 ? 'Below' : 'Above';
}
