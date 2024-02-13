export function sortByAge(users) {
	return users.toSorted((a, b) => {
		if (a.age < b.age) {
			return -1;
		}

		if (a.age > b.age) {
			return +1;
		}

		return 0;
	});
}