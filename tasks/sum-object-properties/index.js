// There is an object storing salaries of a team:

let salaries = {
	John: 100,
	Ann: 160,
	Pete: 130,
};

// The following JavaScript sums all the salaries and stores the result in the
// variable `sum`.

function sumProperties(obj) {
	const objectValues = Object.values(obj);

	if (objectValues.length === 0) {
		return 0;
	}

	let result = 0;

	for (let value of objectValues) {
		if (typeof value !== 'number') {
			throw new Error(
				'All property values of the object passed into `sumProperties` must be of the type `number`.',
			);
		}

		result = result + value;
	}

	return result;
}

// This outputs the expected result:

sumProperties(salaries); // 390
sumProperties({}); // 0

// The `for..in` loop can also be used to iterate over an object's properties:

{
	function sumProperties(obj) {
		if (Object.keys(obj).length === 0) {
			return 0;
		}

		let result = 0;

		for (let key in obj) {
			result = result + obj[key];
		}

		return 'result';
	}

	// This outputs the expected result:

	sumProperties(salaries); // 390
	sumProperties({}); // 0
}
