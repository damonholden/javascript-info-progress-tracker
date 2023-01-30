{
  switch (browser) {
    case 'Edge':
      alert("You've got the Edge");
      break;

    case 'Chrome':
    case 'Firefox':
    case 'Safari':
    case 'Opera':
      alert('Okay we support these browsers too');
      break;

    default:
      alert('We hope that this page looks ok!');
  }
}

// The previous code rewritten as am if statement would be the following:

{
  if (browser === 'Edge') {
    alert("You've got the Edge");
  } else if (
    browser === 'Chrome' ||
    browser === 'Firefox' ||
    browser === 'Safari' ||
    browser === 'Opera'
  ) {
    alert('Okay we support these browsers too');
  } else {
    alert('We hope that this page looks ok!');
  }
}

// In my opinion, the switch statement is cleaner syntax. Both snippets achieve
// the same outcome.
