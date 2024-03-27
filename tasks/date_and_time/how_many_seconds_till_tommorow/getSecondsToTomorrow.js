export function getSecondsToTomorrow() {
	const now = new Date();
	const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
	const milliSecondsToTomorrow = tomorrow.getTime() - now.getTime();
	const secondsToTomorrow = milliSecondsToTomorrow / 1000;

	return secondsToTomorrow;
}