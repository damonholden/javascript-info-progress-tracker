// The following function multiplies all numeric property values of an object by
// 2:

function multiplyNumeric(object) {
	for (let key of Object.keys(object)) {
		if (typeof object[key] === 'number') {
			object[key] = object[key] * 2;
		}
	}
}

export { multiplyNumeric };
