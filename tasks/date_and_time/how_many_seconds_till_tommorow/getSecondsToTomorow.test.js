import { test, describe } from "node:test";
import assert from "node:assert";
import { getSecondsToTomorrow } from "./getSecondsToTomorrow.js";

describe("getSecondsToTomorrow", () => {
	test("if today's date was January 1st 2000 23:00:00, getSecondsToTomorrow should correctly return 3600 seconds until the next day", (context) => {
		context.mock.timers.enable({ apis: ['Date'], now: 946767600000 });

		assert.strictEqual(getSecondsToTomorrow(), 3600);
	});
});