// Code block using if else statements.
{
  let message;

  if (login == 'Employee') {
    message = 'Hello';
  } else if (login == 'Director') {
    message = 'Greetings';
  } else if (login == '') {
    message = 'No login';
  } else {
    message = '';
  }
}

// The same code written with conditional operators.
{
  let message =
    login === 'Employee'
      ? 'Hello'
      : login === 'Director'
      ? 'Greetings'
      : login === ''
      ? 'No Login'
      : '';
}
