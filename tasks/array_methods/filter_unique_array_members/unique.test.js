import { describe, it } from "node:test";
import { unique } from "./unique.js";
import assert from "assert/strict";
describe("unique", () => {
	it("returns an array of all unique values in a given array", () => {
		const values = [1, 2, 3, "string", 1, 2, 3, "yo", "hi", 0, true, "hi"];

		assert.deepEqual(unique(values), [1, 2, 3, "string", "yo", "hi", 0, true]);
	});
});