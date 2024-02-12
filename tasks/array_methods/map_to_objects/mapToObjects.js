export function mapToObjects(users) {
	return users.map((user) => {
		return { fullName: `${user.name} ${user.surname}`, id: user.id };
	});
}