export function getAverageAge(users) {
	const summedAges = users.reduce((accumulator, currentUser) => {
		return accumulator + currentUser.age;
	}, 0);

	const averageAge = summedAges / 3;

	return averageAge;
}