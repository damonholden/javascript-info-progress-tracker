import { describe, test } from "node:test"
import assert from "node:assert/strict"
import { formatDate } from "./formatDate.js"

const january1st2000 = 946_720_800_000

describe("formatDate", () => {
    test("returns right now if the passed in date is from less than a second ago", () => {
        assert.strictEqual(formatDate(new Date), "right now")
    })

    test("returns 'n sec. ago' if the passed in date is more than a second but less than a minute ago", (context) => {
        context.mock.timers.enable({ apis: ['Date'], now: january1st2000 });
        const date = new Date(january1st2000 - 50_000)
        assert.strictEqual(formatDate(date), "50 sec. ago")
    })
})