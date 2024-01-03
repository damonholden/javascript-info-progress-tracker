function getMaxSubSum(array) {
	if (allNumbersPositive(array)) {
		return array.reduce((previousValue, currentValue) => {
			return previousValue + currentValue;
		});
	}
}

function allNumbersPositive(array) {
	for (let number of array) {
		if (number < 0) {
			return false;
		}
	}

	return true;
}

export { getMaxSubSum };