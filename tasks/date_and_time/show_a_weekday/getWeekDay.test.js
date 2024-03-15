import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { getWeekDay } from "./getWeekDay.js";

describe("getWeekDay", () => {
	test("returns the first two letters in uppercase of the day of the passed in date object", () => {
		const dateOnSaturday = new Date(2000, 0, 1);

		assert.strictEqual(getWeekDay(dateOnSaturday), "SA");
	});
});