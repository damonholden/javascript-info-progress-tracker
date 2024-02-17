export function groupById(users) {
	return users.reduce((accumulator, user) => {
		accumulator[user.id] = user;
		return accumulator;
	}, {});
}