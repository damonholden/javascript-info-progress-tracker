import { describe, it } from 'node:test';
import assert from "node:assert/strict";
import { aclean } from './aclean.js';

describe("aclean", () => {
	it("return an array of unique anagrams based on the passed in array", () => {

		let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

		assert.deepEqual(aclean(arr), [
			'PAN',
			'hectares',
			'era'
		]);
	});
});