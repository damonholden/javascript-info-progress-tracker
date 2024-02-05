import { describe, it } from "node:test";
import assert from 'node:assert/strict';
import { filterRange } from "./filterRange.js";

describe('filterRange', () => {
	it("return an array of elements with values higher or equal to a and lower or equal to b", () => {
		assert.deepEqual(filterRange([1, 6, 4, 70, 40, 10], 4, 10), [6, 4, 10]);
	});

	it("not modify the original array", () => {
		const arr = [1, 2, 3, 4, 5, 6];
		const copyOfArr = [...arr];

		assert.deepEqual(filterRange(arr, 3, 4), [3, 4]);
		assert.deepEqual(arr, copyOfArr);
	});

});
