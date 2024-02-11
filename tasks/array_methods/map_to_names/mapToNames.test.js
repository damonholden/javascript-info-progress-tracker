import { describe, it } from "node:test";
import assert from 'node:assert/strict';
import { mapToNames } from "./mapToNames.js";

describe("mapToNames", () => {
	it("when passed an array of objects all with name properties, it should return an array of those names", () => {
		const users = [
			{ name: "john", age: 20 },
			{ name: "leah", age: 30 },
			{ name: "chris", age: 40 }
		];

		assert.deepEqual(mapToNames(users), ["john", "leah", "chris"]);
	});
});