import { describe, it } from "node:test";
import assert from 'node:assert/strict';
import { camelize } from "./camelize.js";

describe('camelize', () => {
	it("passed background-color, should correctly return camelized string backgroundColor", () => {
		assert.strictEqual(camelize("background-color"), 'backgroundColor');
	});

	it("passed list-style-image, should correctly return camelized string listStyleImage", () => {
		assert.strictEqual(camelize("list-style-image"), 'listStyleImage');
	});

	it("passed -webkit-transition, should correctly return camelized string WebkitTransition", () => {
		assert.strictEqual(camelize("-webkit-transition"), 'WebkitTransition');
	});
});
