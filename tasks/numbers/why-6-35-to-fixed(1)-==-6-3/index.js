// In the JavaScript, the `Number.prototype.toFixed()` method formats a number
// using fixed point notation:

(3.14).toFixed(1); // 3.1
(5.29).toFixed(1); // 5.3
(1.75).toFixed(1); // 1.8

// As demonstrated above, the `Number.prototype.toFixed()` method should round
// anything after the decimal point to be fixed down if that value is between
// 0-5 and up if its 5 or higher.

// In the following code, the previous statement seems false, as
// `6.35.tofixed(1)` seems to become `6.3`:

(6.35).toFixed(1); // 6.3

// The reason for this is because of the rounding errors present in double
// floating point numbers. `6.35` cannot be accurately stored JavaScript and is
// really instead `6.34999999999999964473`. This results in the `.toFixed` call
// rounding the first decimal point down to 6.3.

// One way to resolve this is to multiply the number by 10, run `toFixed()`
// against the result, then divide it back to the desired number.

(6.35 * 10).toFixed() / 10; // 6.4
