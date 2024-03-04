import { describe, it } from "node:test"
import assert from "node:assert/strict"
import { topSalary } from "./topSalary.js"

describe("topSalary", () => {
    it("returns the name of the highest salary from the passed in object", () => {

        const salaries = {
            "John": 100,
            "Pete": 300,
            "Mary": 250
        };

        assert.strictEqual(topSalary(salaries), "Pete")
    })

    it("returns null if the salaries object is empty", () => {
        assert.strictEqual(topSalary({}), null)
    })
})