import { describe, test } from "node:test"
import assert from "node:assert/strict"
import { formatDate } from "./formatDate.js"

describe("formatDate", () => {
    test("returns right now if the pased in date is from less than a second ago", () => {
        assert.strictEqual(formatDate(new Date), "right now")
    })
})