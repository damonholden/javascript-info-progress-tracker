// what is wrong with the test below?

{
	it('Raises x to the power n', function () {
		let x = 5;

		let result = x;
		assert.equal(pow(x, 1), result);

		result *= x;
		assert.equal(pow(x, 2), result);

		result *= x;
		assert.equal(pow(x, 3), result);
	});
}

// The only significant issue with the test above is that there are three
// assertions in a single it block. THese should be split into separate  `it`
// blocks to make test results more clear:

{
	describe('Raises 5 to the power n', () => {
		for (let n = 1, result = 5; n < 4; n++, result *= 5) {
			it(`5 to the power of ${n} equals ${result}`, () => {
				assert.equal(pow(5, n), result);
			});
		}
	});
}

// In this new example, a for loop is used to generate the test cases. The suite
// has also been reformatted to use arrow functions and template literals.
