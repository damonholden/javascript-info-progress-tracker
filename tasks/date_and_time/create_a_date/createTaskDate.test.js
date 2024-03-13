import { createTaskDate } from "./createTaskDate.js";
import { test, describe } from "node:test";
import assert from "node:assert/strict";

describe("createDateTask", () => {
	test("returns a date that represents Feb 20, 2012, 3:12am", () => {
		assert.strictEqual(createTaskDate().toString(), "Mon Feb 20 2012 03:12:00 GMT+0000 (Greenwich Mean Time)");
	});
});