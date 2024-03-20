export function getSecondsToday() {
	const date = new Date();
	date.setHours(0, 0, 0, 0);

	return (Date.now() - date.getTime()) / 1000;
}