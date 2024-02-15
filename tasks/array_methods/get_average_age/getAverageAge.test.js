import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { getAverageAge } from "./getAverageAge.js";

describe("getAverageAge", () => {
	it("should return the average age of user objects", () => {
		const users = [
			{ name: "John", age: 25 },
			{ name: "Pete", age: 30 },
			{ name: "Mary", age: 29 },
		];

		assert.strictEqual(getAverageAge(users), 28);
	});
});