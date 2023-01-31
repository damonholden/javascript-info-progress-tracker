// In this task, I will rewrite the following code with `if` statements into the
// the same code but with `switch` statements.

{
  let a = +prompt('a?', '');

  if (a == 0) {
    alert(0);
  }

  if (a == 1) {
    alert(1);
  }

  if (a == 2 || a == 3) {
    alert('2,3');
  }
}

// Here is the same code logic slightly reformatted to my liking and with
// `switch` statements.

{
  let a = prompt('a?');
  a = Number(a);

  switch (a) {
    case 0:
      alert(0);
      break;

    case 1:
      alert(1);
      break;

    case 2:
    case 3:
      alert('2,3');
      break;
  }
}

// Note that the final `break` clause isn't required, but it makes the code more future
// proof, as any additional cases in the switch statement will not get
// unexpectedly executed because a developer forgot to add a `break` clause.
