import { describe, test } from "node:test";
import assert from "node:assert/strict";
import { formatDate } from "./formatDate.js";

const january1st2000 = 946_720_800_000;

describe("formatDate", () => {
    test("returns right now if the passed in date is from less than a second ago", () => {
        assert.strictEqual(formatDate(new Date()), "right now");
    });

    test("returns 'n sec. ago' if the passed in date is more than a second but less than a minute ago", (context) => {
        context.mock.timers.enable({ apis: ["Date"], now: january1st2000 });
        const date = new Date(january1st2000 - 50_000);
        assert.strictEqual(formatDate(date), "50 sec. ago");
    });

    test("returns 'n min. ago' if the passed in date is more than a minute but less than an hour ago", (context) => {
        context.mock.timers.enable({ apis: ["Date"], now: january1st2000 });
        const date = new Date(january1st2000 - 3_000_000);
        assert.strictEqual(formatDate(date), "50 min. ago");
    });

    test('returns the full date in the format "DD.MM.YY HH:mm". That is: "day.month.year hours:minutes", all in 2-digit format', (context) => {
        context.mock.timers.enable({ apis: ["Date"], now: january1st2000 });
        const twoHoursInMilliseconds = 7_200_000;
        const date = new Date(january1st2000 - twoHoursInMilliseconds);
        assert.strictEqual(formatDate(date), "01.01.00 08:00");
    });
});
