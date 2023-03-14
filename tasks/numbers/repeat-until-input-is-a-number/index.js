function readNumber(message) {
	let input = prompt(message ?? 'Please provide a number.');

	if (input === null || input === '') {
		return null;
	}

	input = Number(input);

	if (Number.isFinite(input)) {
		return input;
	}

	return readNumber('Please provide a valid number');
}

console.log(readNumber());
