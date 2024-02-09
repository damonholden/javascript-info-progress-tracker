export class Calculator {
	calculate(calculation) {
		let [num1, operator, num2] = calculation.split(" ");
		num1 = Number(num1);
		num2 = Number(num2);

		if (operator === "+") {
			return num1 + num2;
		}
		if (operator === "-") {
			return num1 - num2;
		}
	}
}