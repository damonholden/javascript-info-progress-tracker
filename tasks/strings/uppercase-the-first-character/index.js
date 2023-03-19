// The following function, `ucFirst()`, returns the string passed into it with
// the first character uppercased.

function ucFirst(string) {
	if (typeof string !== 'string') {
		throw new TypeError('The value passed into `ucFirst()` must be a string.');
	}

	if (string.length === 0) {
		throw new Error('The string passed into `ucFirst()` cannot be empty.');
	}

	const [firstCharacter, ...restOfCharacters] = string;

	return `${firstCharacter.toUpperCase()}${restOfCharacters.join('')}`;
}
const testString = 'james';
alert(
	`'${testString}' with the first character uppercased is '${ucFirst(
		testString,
	)}'.`,
);
