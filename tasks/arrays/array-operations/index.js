// The code below results in the following array modification steps to the
// `styles` reference:
//   - Jazz, Blues
//   - Jazz, Blues, Rock-n-Roll
//   - Jazz, Classics, Rock-n-Roll
//   - Classics, Rock-n-Roll
//   - Rap, Reggae, Classics, Rock-n-Roll

let styles = ['Jazz', 'Blues'];
console.log(styles);

styles.push('Rock-n-Roll');
console.log(styles);

styles = replaceMiddleArrayValue(styles, 'Classics');
console.log(styles);

styles.shift();
console.log(styles);

styles.unshift('Rap', 'Reggae');
console.log(styles);

function replaceMiddleArrayValue(array, replacementValue) {
	if (array.length % 2 !== 1) {
		throw new Error(
			'The array passed into `removeMiddleArrayValue` mus have an odd `length` number.',
		);
	}
	const arrayCopy = [...array];
	const middleIndex = (arrayCopy.length - 1) / 2;
	arrayCopy[middleIndex] = replacementValue;

	return arrayCopy;
}
