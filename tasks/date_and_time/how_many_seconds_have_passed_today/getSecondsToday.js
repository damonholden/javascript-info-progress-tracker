export function getSecondsToday() {
	const todayWithTimeSetToZero = new Date().setHours(0, 0, 0, 0);
	const millisecondsElapsedToday = Date.now() - todayWithTimeSetToZero;
	const secondsElapsedToday = millisecondsElapsedToday / 1000;

	return secondsElapsedToday;
}
