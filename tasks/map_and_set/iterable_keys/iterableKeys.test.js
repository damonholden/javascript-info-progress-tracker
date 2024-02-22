import { describe, it } from "node:test";
import expect from "node:assert/strict";
import { iterableKeys } from "./iterableKeys.js";

describe("iterableKeys", () => {
	it("return an array of keys when passed a map", () => {
		const map = new Map();

		map.set("name", "John");

		expect.deepEqual(iterableKeys(map), ["name"]);
	});
});