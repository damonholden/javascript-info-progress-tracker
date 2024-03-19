// fairly inefficient solution as the date object has to be recursively mutated in order to work out the last day.
// better solution in ./getLastDayOfMonth.js

export function getLastDayOfMonth(year, month) {
	const date = new Date(year, month);

	let currentHighestDay = date.getDate();
	while (true) {
		date.setDate(currentHighestDay + 1);

		if (date.getDate() > currentHighestDay) {
			currentHighestDay += 1;
			continue;
		}

		return currentHighestDay;
	}
}