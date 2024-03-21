
import { describe, it } from "node:test";
import expect from "node:assert/strict";
import { getSecondsToday } from "./getSecondsToday.js";
import { isContext } from "node:vm";

describe("getSecondsToday", () => {
	it("should return the correct amount of seconds elapsed from the beginning of the day", (context) => {
		context.mock.timers.enable({ apis: ['Date'] });
	});
});