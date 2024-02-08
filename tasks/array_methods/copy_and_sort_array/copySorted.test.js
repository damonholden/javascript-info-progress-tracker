import { describe, it } from "node:test";
import assert from 'node:assert/strict';
import { copySorted } from "./copySorted.js";

describe('copySorted', () => {
	it("return a sorted array", () => {
		const arr = ["HTML", "JavaScript", "CSS"];
		assert.deepEqual(copySorted(arr), ["CSS", "HTML", "JavaScript"]);
	});


	it("not mutate the original array", () => {
		const arr = ["HTML", "JavaScript", "CSS"];
		copySorted(arr);
		assert.deepEqual(arr, ["HTML", "JavaScript", "CSS"]);
	});
});
