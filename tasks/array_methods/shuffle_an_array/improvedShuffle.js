// this solution is straight from the solution and uses Fisher-Yates shuffle.

function improvedShuffle(array) {
	for (let i = array.length - 1; i > 0; i--) {
		let j = Math.floor(Math.random() * (i + 1));

		// the way destructuring is being used here is very cool as it allows 2 variables/properties to swap values without the need for a third temporary variable.
		[array[i], array[j]] = [array[j], array[i]];
	}
}

let count = {
	'123': 0,
	'132': 0,
	'213': 0,
	'231': 0,
	'321': 0,
	'312': 0
};

for (let i = 0; i < 1000000; i++) {
	let array = [1, 2, 3];
	improvedShuffle(array);

	// much better way of doing array counts like this:
	count[array.join('')]++;
}

console.log(count);