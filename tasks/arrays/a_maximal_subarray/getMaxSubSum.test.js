import { describe, it } from "node:test";
import assert from 'node:assert/strict';
import { getMaxSubSum } from "./getMaxSubSum.js";

describe('getMaxSubSum', () => {
	it('return the sum of entire array if all numbers are positive', () => {
		assert.strictEqual(getMaxSubSum([1, 2, 3, 4]), 10);
	});
});
