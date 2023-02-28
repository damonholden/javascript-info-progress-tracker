const calculator = {
	read() {
		this.a = Number(prompt('provide a number.'));
		this.b = Number(prompt('provide another number.'));
	},

	sum() {
		return this.a + this.b;
	},

	mul() {
		return this.a * this.b;
	},
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());
