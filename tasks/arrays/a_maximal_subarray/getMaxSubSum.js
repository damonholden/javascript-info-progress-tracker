function getMaxSubSum(array) {
	if (allNumbersPositive(array)) {
		return array.reduce((previousValue, currentValue) => previousValue + currentValue);
	}

	let maxSum = 0;
	let partialSum = 0;

	for (let item of array) {
		partialSum += item;
		maxSum = Math.max(maxSum, partialSum);

		if (partialSum < 0) {
			partialSum = 0;
		}
	}

	return maxSum;
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