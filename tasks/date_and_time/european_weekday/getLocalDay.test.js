import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { getLocalDay } from "./getLocalDay.js";

describe("getLocalDay", () => {
	describe("should return european day of the week represented as mon-sun - 1-7", () => {
		test("a date on Monday should return 1", () => {
			const dateOnSaturday = new Date(2000, 0, 3);

			assert.strictEqual(getLocalDay(dateOnSaturday), 1);
		});
		test("a date on Tuesday should return 2", () => {
			const dateOnSaturday = new Date(2000, 0, 4);

			assert.strictEqual(getLocalDay(dateOnSaturday), 2);
		});
		test("a date on Wednesday should return 3", () => {
			const dateOnSaturday = new Date(2000, 0, 5);

			assert.strictEqual(getLocalDay(dateOnSaturday), 3);
		});
		test("a date on Thursday should return 4", () => {
			const dateOnSaturday = new Date(2000, 0, 6);

			assert.strictEqual(getLocalDay(dateOnSaturday), 4);
		});
		test("a date on Friday should return 5", () => {
			const dateOnSaturday = new Date(2000, 0, 7);

			assert.strictEqual(getLocalDay(dateOnSaturday), 5);
		});
		test("a date on Saturday should return 6", () => {
			const dateOnSaturday = new Date(2000, 0, 1);

			assert.strictEqual(getLocalDay(dateOnSaturday), 6);
		});
		test("a date on Sunday should return 7", () => {
			const dateOnSaturday = new Date(2000, 0, 2);

			assert.strictEqual(getLocalDay(dateOnSaturday), 7);
		});
	});
});