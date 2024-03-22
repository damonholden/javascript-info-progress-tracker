
import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { getSecondsToday } from "./getSecondsToday.js";

describe("getSecondsToday", () => {
	it("should return the correct amount of seconds elapsed from the beginning of the day", (context) => {
		context.mock.timers.enable({ apis: ['Date'], now: 946720800000 });

		assert.strictEqual(getSecondsToday(), 36000);
	});
});