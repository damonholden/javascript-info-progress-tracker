export function getSecondsToTomorrow() {
	const tomorrow = new Date();
	tomorrow.setDate(tomorrow.getDate() + 1);
}