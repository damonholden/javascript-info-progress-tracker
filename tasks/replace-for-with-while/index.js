{
  for (let i = 0; i < 3; i++) {
    alert(`Original: number ${i}`);
  }
}

// The following while loop has the same behavior:

{
  let i = 0;
  while (i < 3) {
    alert(`Rewrite: number ${i}`);
    i++;
  }
}
