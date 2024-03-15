/*
Not the most efficient solution since sunday is the only date that requires the `localDayMap` array. Better way may be to check for if the day is sunday and return 7 in that case:

if (day === 0) {
	return 7
}

This creates less strain on the garbage collector.
*/

const localDayMap = [7, 1, 2, 3, 4, 5, 6];

export function getLocalDay(date) {
	return localDayMap[date.getDay()];
}