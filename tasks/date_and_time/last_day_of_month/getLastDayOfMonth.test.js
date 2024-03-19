
import { describe, it } from "node:test";
import expect from "node:assert/strict";
import { getLastDayOfMonth } from "./getLastDayOfMonth.js";

describe("getLastDayOfMonth", () => {
	it("should return the highest day of the given month", () => {
		const date = new Date(2000);
		expect.strictEqual(getLastDayOfMonth(2000, 0), 31);
	});


	it("should account for february in leap years", () => {
		const date = new Date(2012, 1);
		expect.strictEqual(getLastDayOfMonth(2012, 1), 29);
	});
});