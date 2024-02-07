export function sortInDecreasingOrder(arr) {
	arr.sort((a, b) => {
		a = Number(a);
		b = Number(b);

		if (a > b) {
			return -1;
		}

		return 0;
	});
}