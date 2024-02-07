import { describe, it } from "node:test";
import assert from 'node:assert/strict';
import { sortInDecreasingOrder } from "./sortInDecreasingOrder.js";

describe('sortInDecreasingOrder', () => {
	it("return an array of elements with values higher or equal to a and lower or equal to b", () => {
		const arr = [1, 6, 4, 4, -4, 70, 40, -10];
		sortInDecreasingOrder(arr);
		assert.deepEqual(arr, [70, 40, 6, 4, 4, 1, -4, -10]);
	});

});
