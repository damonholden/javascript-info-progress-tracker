// my original solution was overly complex as i used a map where i could have just used an array.

const weekDayMap = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];

export function getWeekDay(date) {
	return weekDayMap[date.getDay()];
}