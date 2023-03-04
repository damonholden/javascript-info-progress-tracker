// The following constructor function creates objects with three methods:

function Calculator() {
	this.read = function () {
		let numberA = prompt('Provide a number.');
		let numberB = prompt('Provide another number.');
		numberA = Number(numberA);
		numberB = Number(numberB);
		this.numberA = numberA;
		this.numberB = numberB;
	};
	this.sum = function () {
		alert(
			`The sum of ${this.numberA} and ${this.numberB} is ${
				this.numberA + this.numberB
			}`,
		);
	};

	this.mul = function () {
		alert(
			`The multiplication of ${this.numberA} and ${this.numberB} is ${
				this.numberA * this.numberB
			}`,
		);
	};
}

const calculator = new Calculator();

calculator.read();
calculator.sum();
calculator.mul();
