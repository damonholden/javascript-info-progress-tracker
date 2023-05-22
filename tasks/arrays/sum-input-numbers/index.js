'use-strict';

function sumInput() {
	const inputs = [];

	while (true) {
		const input = prompt('provide a number');

		if (input === '' || input === null || !isFinite(input)) {
			break;
		}

		inputs.push(Number(input));
	}

	const inputSum = inputs.reduce(
		(prevNumber, currentNumber) => (prevNumber += currentNumber),
	);
}

alert(sumInput());

// Need to be careful of type conversion here as it can create some tricky bugs
