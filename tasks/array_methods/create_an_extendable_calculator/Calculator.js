export class Calculator {
	#operations = {
		'+': (num1, num2) => {
			return num1 + num2;
		},
		'-': (num1, num2) => {
			return num1 - num2;
		}
	};
	calculate(calculation) {
		let [num1, operator, num2] = calculation.split(" ");
		num1 = Number(num1);
		num2 = Number(num2);
		try {
			return this.#operations[operator](num1, num2);
		} catch (error) {
			throw (new Error('an error occurred during calculation', { cause: error }));
		}
	}

	addMethod(name, func) {
		this.#operations[name] = func;
	}
}