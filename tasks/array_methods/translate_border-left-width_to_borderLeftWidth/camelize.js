export function camelize(string) {
	const stringAsArray = string.split('');

	let camelizedString = '';
	for (let i = 0; i < stringAsArray.length;) {
		if (stringAsArray[i] === '-') {
			camelizedString += stringAsArray[i + 1].toUpperCase();
			i = i + 2;
		} else {
			camelizedString += stringAsArray[i];
			i = i + 1;
		}

	};

	return camelizedString;
}