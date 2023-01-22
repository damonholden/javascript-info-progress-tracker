'use strict';

// The following code will alert:
// - 1
// - 2
// - 3
// - 4

{
  let i = 0;
  while (++i < 5) {
    alert(`snippet 1: ${i}`);
  }
}

// The following code will alert:
// - 1
// - 2
// - 3
// - 4
// - 5

{
  let i = 0;
  while (i++ < 5) {
    alert(`snippet 2: ${i}`);
  }
}

// This is because the while loop evaluation in the second code snippet is one
// step behind the first snippet because the first snippet is using
// the prefix form of the increment operator, whereas the second snippet is
// using the postfix form.
