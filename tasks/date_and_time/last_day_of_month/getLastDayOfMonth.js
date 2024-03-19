// because the day parameter in the Date constructor starting at 1, creating a new Date in the next month and setting the day parameter to 0 will auto correct the date to the last day of the previous month.

export function getLastDayOfMonth(year, month) {
	const date = new Date(year, month + 1, 0);
	return date.getDate();
}