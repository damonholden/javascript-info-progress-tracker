'use strict';

// The result of the following code will be an alert containing null. This is
// because 1 is evaluated truthy, then null is evaluated falsy, short-circuits
// teh AND chain and returns.

alert(1 && null && 2);
