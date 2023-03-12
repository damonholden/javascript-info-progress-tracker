// The following script prompt's the visitor to enter two numbers and then
// outputs the sum of those two numbers.

const numberA = promptUserForNumber({
	promptMessage: 'Provide a number.',
	NaNMessage: 'You must provide a real number.',
	noInputMessage: 'You must provide an input.',
});
const numberB = promptUserForNumber({
	promptMessage: 'Provide another number.',
	NaNMessage: 'You must provide a real number.',
	noInputMessage: 'You must provide an input.',
});

alert(`The sum of ${numberA} and ${numberB} is ${numberA + numberB}.`);

function promptUserForNumber({ promptMessage, NaNMessage, noInputMessage }) {
	let number = prompt(promptMessage);

	if (number === '') {
		alert(noInputMessage);

		return promptUserForNumber({ promptMessage, NaNMessage, noInputMessage });
	}

	number = Number(number);

	if (Number.isNaN(number)) {
		alert(NaNMessage);

		return promptUserForNumber({ promptMessage, NaNMessage, noInputMessage });
	}

	return number;
}
