// In the following code, only the first and third alerts will execute.

// The following alert executes because -1`s boolean conversion is truthy.
if (-1 || 0) alert('first');

// The following alert does not execute because 0 is falsy.
if (-1 && 0) alert('second');

// The following alert executes because AND && operator returns true as both 1
// and -1 are truthy. therefore, the OR || operator evaluates truthy.
if (null || (-1 && 1)) alert('third');
