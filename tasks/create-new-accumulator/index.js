// The following `Accumulator` function is invoked with a starting value which can
// be increased by invoking its `.read()` method.

function Accumulator(startingValue) {
	this.value = startingValue;
	this.read = function () {
		let number = prompt('Provide a number');
		number = Number(number);
		this.value = this.value + number;
	};
}

const accumulator = new Accumulator(7);

accumulator.read();
accumulator.read();

alert(accumulator.value);
