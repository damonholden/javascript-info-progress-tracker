'use strict';

const login = String(prompt('Pleast provide login.', ''));

if (login === 'Admin') {
  const adminPassword = String(prompt('Please provide password.'));

  if (adminPassword === 'TheMaster') {
    alert('Welcome!');
  } else if (adminPassword.length > 0 && adminPassword !== 'null') {
    alert('Wrong password');
  } else {
    alert(`Canceled`);
  }
} else if (login.length > 0 && login !== 'null') {
  alert("I don't know you");
} else {
  alert(`Canceled`);
}
