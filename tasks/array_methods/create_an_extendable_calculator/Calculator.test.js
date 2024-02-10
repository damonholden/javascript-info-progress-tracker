import { describe, it } from "node:test";
import assert from 'node:assert/strict';
import { Calculator } from "./Calculator.js";

describe('Calculator', () => {
	it("construct an object with a calculate method", () => {
		const calculator = new Calculator();
		assert.strictEqual(typeof calculator.calculate, "function");
	});

	describe("Calculator.calculate", () => {
		it("should add both numbers if the `+` operator is used", () => {
			const calculator = new Calculator();
			assert.strictEqual(calculator.calculate("2 + 2"), 4);
		});

		it("should subtract the second number from the first if the `-` operator is used", () => {
			const calculator = new Calculator();
			assert.strictEqual(calculator.calculate("4 - 2"), 2);
		});
	});

	describe("Calculator.addMethod", () => {
		it("adds a new operator to the calculator that the .calculate function can use", () => {
			const calculator = new Calculator();

			try {
				calculator.calculate("2 / 2");
			} catch (error) {
				assert.strictEqual(error.message, 'an error occurred during calculation');
			}

			calculator.addMethod("/", (a, b) => {
				return a / b;
			});

			assert.strictEqual(calculator.calculate("2 / 2"), 1);
		});
	});
});
