// To generate a random integer between a `max` and `min` value. The
// `randomNumber` function from `../a-random-number-from-min-to-max/index.js`
// can be modified. The `Math.toFixed()` can be used in the equation, but
// paddings of `0.5` will need to be added to the min-max range in order to
// ensure every integer has an equal chance to be returned. This is because
// `toFixed()` also rounds decimal numbers.

function randomInteger({ min, max }) {
	min -= 0.5;
	max += 0.5;
	return (Math.random() * (max - min) + min).toFixed();
}

let min = 2;
let max = 6;
alert(
	`${randomInteger({
		min,
		max,
	})} is a random integer from ${min} to ${max}`,
);

min = 7;
max = 12;
alert(
	`${randomInteger({
		min,
		max,
	})} is a random integer from ${min} to ${max}`,
);

min = 1;
max = 3;
alert(
	`${randomInteger({
		min,
		max,
	})} is a random integer from ${min} to ${max}`,
);

// An alternative method of returning a random integer from a range is to use
// `Math.floor()` and incrementing the max parameter by 1 to allow the `max`
// number to be possibly returned.

function alternativeRandomInteger({ min, max }) {
	const nearlyRandomNumber = Math.random() * (max + 1 - min) + min;
	return Math.floor(nearlyRandomNumber);
}

min = 2;
max = 6;
alert(
	`${alternativeRandomInteger({
		min,
		max,
	})} is a random integer from ${min} to ${max}`,
);

min = 7;
max = 12;
alert(
	`${alternativeRandomInteger({
		min,
		max,
	})} is a random integer from ${min} to ${max}`,
);

min = 1;
max = 3;
alert(
	`${alternativeRandomInteger({
		min,
		max,
	})} is a random integer from ${min} to ${max}`,
);
