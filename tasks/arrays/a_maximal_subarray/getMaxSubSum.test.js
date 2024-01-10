import { describe, it } from "node:test";
import assert from 'node:assert/strict';
import { getMaxSubSum } from "./getMaxSubSum.js";

describe('getMaxSubSum', () => {
	it("corectly return largest summed sub array", () => {
		getMaxSubSum([-1, 2, 3, -9]) == 5;
		getMaxSubSum([2, -1, 2, 3, -9]) == 6;
		getMaxSubSum([-1, 2, 3, -9, 11]) == 11;
		getMaxSubSum([-2, -1, 1, 2]) == 3;
		getMaxSubSum([100, -9, 2, -3, 5]) == 100;
		getMaxSubSum([1, 2, 3]) == 6;
	});
	it('return the sum of entire array if all numbers are positive', () => {
		assert.strictEqual(getMaxSubSum([1, 2, 3, 4]), 10);
	});
});
