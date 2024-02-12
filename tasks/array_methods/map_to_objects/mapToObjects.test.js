import { describe, it } from "node:test";
import assert from 'node:assert/strict';
import { mapToObjects } from "./mapToObjects.js";

describe("mapToObjects", () => {
	it("passed an array of objects all with name, surname, and id properties, it should return an array of objects that have combine the name and surname property into a fullName property; and also have an id property", () => {

		const users = [
			{ name: "John", surname: "Smith", id: 1 },
			{ name: "Pete", surname: "Hunt", id: 2 },
			{ name: "Mary", surname: "Key", id: 3 },
		];

		assert.deepEqual(mapToObjects(users), [
			{ fullName: "John Smith", id: 1 },
			{ fullName: "Pete Hunt", id: 2 },
			{ fullName: "Mary Key", id: 3 }
		]);
	});
});