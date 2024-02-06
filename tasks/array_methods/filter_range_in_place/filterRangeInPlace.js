export function filterRangeInPlace(arr, a, b) {
	for (let i = 0; i < arr.length;) {
		if (arr[i] < a || arr[i] > b) {
			arr.splice(i, 1);
			continue;
		};
		i++;
	}
}