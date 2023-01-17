// Task:
// Write an if condition to check that age is NOT between 14 and 90 inclusively.

// Create two variants: the first one using NOT !, the second one – without it.

// First variant - with NOT !.
{
  const age = prompt('How old are you?', '');

  if (!(age >= 14 && !age <= 90)) {
    alert('VALID!!!');
  } else {
    alert('NOT VALID!!!');
  }
}

// Second variant - without NOT !.
{
  const age = prompt('How old are you?', '');

  if (age < 14 || age > 90) {
    alert('VALID!!!');
  } else {
    alert('NOT VALID!!!');
  }
}
