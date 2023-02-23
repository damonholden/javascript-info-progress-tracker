// The following function multiplies all numeric property values of an object by
// 2:

let menu = {
	width: 200,
	height: 300,
	title: 'my menu',
};

multiplyNumeric(menu);

menu;

function multiplyNumeric(object) {
	for (let key of Object.keys(object)) {
		if (typeof object[key] === 'number') {
			object[key] = object[key] * 2;
		}
	}
}
