// This first code snippet will alert the following:
// - 0
// - 1
// - 2
// - 3
// - 4

{
  for (let i = 0; i < 5; i++) {
    alert(`Postfix snippet: ${i}`);
  }
}

// This second code snippet will alert the following:
// - 0
// - 1
// - 2
// - 3
// - 4

{
  for (let i = 0; i < 5; ++i) {
    alert(`Prefix snippet: ${i}`);
  }
}

// The results of both snippets are the same because even though one uses the
// postfix increment operator and another is using the prefix form, they are not
// used for anything when `i` incremented as the evaluation is separate, so the
// functionality is effectively the same.
