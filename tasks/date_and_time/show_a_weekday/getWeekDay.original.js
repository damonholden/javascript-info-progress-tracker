const weekDayMap = new Map([
	[0, "SU"],
	[1, "MO"],
	[2, "TU"],
	[3, "WE"],
	[4, "TH"],
	[5, "FR"],
	[6, "SA"],
]);

export function getWeekDay(date) {
	return weekDayMap.get(date.getDay());
}