// consider the following code:

{
  function ask(question, yes, no) {
    if (confirm(question)) {
      yes();
    } else {
      no();
    }
  }

  ask(
    'Do you agree?',
    function () {
      alert('You agreed.');
    },
    function () {
      alert('You canceled the execution.');
    },
  );
}

// The function expressions can be replaced with arrow functions:

{
  function ask(question, yes, no) {
    if (confirm(question)) {
      yes();
    } else {
      no();
    }
  }

  ask(
    'Do you agree?',
    () => alert('You agreed.'),
    () => alert('You canceled the execution.'),
  );
}

// The second snippet is shorter and **could** be seen as cleaner.
