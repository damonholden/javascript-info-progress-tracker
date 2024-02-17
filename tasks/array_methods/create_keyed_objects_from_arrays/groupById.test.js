import { describe, it } from "node:test";
import assert from "assert/strict";
import { groupById } from "./groupById.js";

describe("groupById", () => {
	it("return an object with object id properties as keys", () => {

		const users = [
			{ id: 'john', name: "John Smith", age: 20 },
			{ id: 'ann', name: "Ann Smith", age: 24 },
			{ id: 'pete', name: "Pete Peterson", age: 31 },
		];

		assert.deepEqual(groupById(users),
			{
				john: { id: 'john', name: "John Smith", age: 20 },
				ann: { id: 'ann', name: "Ann Smith", age: 24 },
				pete: { id: 'pete', name: "Pete Peterson", age: 31 },
			});
	});
});