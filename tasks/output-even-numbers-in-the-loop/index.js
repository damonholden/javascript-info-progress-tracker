// The following for loop outputs even numbers from 2 to 10:

{
  for (let i = 2; i <= 10; i = i + 2) {
    alert(i);
  }
}

// The solution from JavaScript.info is the following:

{
  for (let i = 2; i <= 10; i++) {
    if (i % 2 == 0) {
      alert(i);
    }
  }
}

// The benefit of this solution is it actually checks for even numbers but is
// longer in code.
