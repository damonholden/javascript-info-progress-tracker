import { describe, it } from "node:test";
import assert from 'node:assert/strict';
import { filterRangeInPlace } from "./filterRangeInPlace.js";

describe('filterRangeInPlace', () => {
	it("mutate an array of elements with values higher or equal to a and lower or equal to b", () => {
		const arr = [1, 6, 4, 70, 40, 10];

		filterRangeInPlace(arr, 4, 10);

		assert.deepEqual(arr, [6, 4, 10]);
	});

	it("should not return any value", () => {

		assert.strictEqual(filterRangeInPlace([1, 2], 3, 4), undefined);
	});

});
