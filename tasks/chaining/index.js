// The following `ladder` object allows the ability to go up and down:

let ladder = {
	step: 0,
	up() {
		this.step++;
	},
	down() {
		this.step--;
	},
	showStep() {
		alert(this.step);
	},
};

ladder.up();
ladder.up();
ladder.down();
ladder.showStep();
ladder.down();
ladder.showStep();

// The following object functions the same way but is now chainable:

const chainableLadder = {
	step: 0,
	up() {
		this.step++;
		return this;
	},
	down() {
		this.step--;
		return this;
	},
	showStep() {
		alert(this.step);
		return this;
	},
};

chainableLadder.up().up().down().showStep().down().showStep();
