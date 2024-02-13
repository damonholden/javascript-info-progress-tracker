import { describe, it } from "node:test";
import assert from 'node:assert/strict';
import { sortByAge } from "./sortByAge.js";

describe('sortByAge', () => {
	it("should return a an array of the same objects sorted by age", () => {
		const users = [
			{ name: "John", age: 25 },
			{ name: "Pete", age: 30 },
			{ name: "Mary", age: 28 },
		];

		assert.deepEqual(sortByAge(users), [
			{ name: "John", age: 25 },
			{ name: "Mary", age: 28 },
			{ name: "Pete", age: 30 },
		]);
	});

});