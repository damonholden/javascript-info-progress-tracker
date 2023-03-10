// consider the following code:

let str = 'Hello';

str.test = 5;

alert(str.test);

// The result of executing this code will either be `undefined` being alerted or
// an error occurring depending on whether or not `"strict mode"` is enabled.

// In strict mode, mutating the wrapper object of a primitive in this way is a
// runtime error.

// Otherwise, in non-strict mode, the assignment of `5` to `str.test` will create
// the wrapper object and assign the property value, but then the wrapper object
// will be instantly discarded. `alert(str.test);` will therefore create a new
// wrapper object for the property access, where `str.test` was never assigned,
// so the alert displays `undefined`.

// This is a prime example of how JavaScript primitives simply **are not**
// objects.
