import { describe, it } from "node:test";
import expect from "node:assert/strict";
import { getDateAgo } from "./getDateAgo.js";

describe("getDateAgo", () => {
	it("should return a new Date abject x days ago", () => {
		const date = new Date("2000");
		expect.deepEqual(getDateAgo(date, 1), 31);
	});
});