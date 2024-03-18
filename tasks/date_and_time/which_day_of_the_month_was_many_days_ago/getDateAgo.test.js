import { describe, it } from "node:test";
import expect from "node:assert/strict";
import { getDateAgo } from "./getDateAgo.js";

describe("getDateAgo", () => {
	it("should return a new Date abject x days ago", () => {
		const date = new Date("2000");
		expect.strictEqual(getDateAgo(date, 1), 31);
	});


	it("should not modify the original date", () => {
		const date = new Date("2000");
		getDateAgo(date, 1);

		expect.deepEqual(date, new Date("2000"));
	});


	it("should correctly handle days ago more than 365", () => {
		const date = new Date("2000");

		expect.strictEqual(getDateAgo(date, 366), 31);
	});
});