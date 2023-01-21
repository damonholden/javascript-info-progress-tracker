'strict mode';

// for the following code...

let i = 3;

while (i) {
  alert(i--);
}

// the loop will iterate 3 times:
// - once for 3
// - once for 2
// - once for 1
// Then i evaluates 0 which is falsy so the loop terminates.
