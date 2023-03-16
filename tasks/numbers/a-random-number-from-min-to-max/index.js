// The following code uses a function - `random({min, max})`, that returns a
// random floating point number between the `min` and `max` properties of the
// passed in object argument. This functionality is achieved by:
//
// - Using the `Math.random()` method to get a random number between `0` to `1`.
// - Multiplying the result by (`max` - `min`) to get a final result that is
//   between 0 - (`max` - `min`).
// - adding min to the equation to get a final result of a number between `max`
//   - `min.`

const min = 2;
const max = 6;

alert(
	`${random({
		min,
		max,
	})} is a random floating point number between ${min} and ${max}`,
);

alert(
	`${random({
		min,
		max,
	})} is a random floating point number between ${min} and ${max}`,
);

alert(
	`${random({
		min,
		max,
	})} is a random floating point number between ${min} and ${max}`,
);

function random({ min, max }) {
	return Math.random() * (max - min) + min;
}
