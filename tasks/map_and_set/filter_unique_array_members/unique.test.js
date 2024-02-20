import { describe, it } from 'node:test';
import assert from "node:assert/strict";
import { unique } from './unique.js';

describe("unique", () => {
	it("return an array of the unique values in the passed in-array", () => {

		let values = ["Hare", "Krishna", "Hare", "Krishna",
			"Krishna", "Krishna", "Hare", "Hare", ":-O"
		];

		assert.deepEqual(unique(values), ["Hare", "Krishna", ":-O"]);
	});
});