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
});
