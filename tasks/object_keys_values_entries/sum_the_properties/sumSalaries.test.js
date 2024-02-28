import { it, describe } from "node:test"
import assert from "node:assert/strict"
import { sumSalaries } from "./sumSalaries.js"

describe("sumSalaries", () => {
    it("return a sum of all the salary propeties from the passed in object", () => {
        let salaries = {
            "John": 100,
            "Pete": 300,
            "Mary": 250
        };

        assert.strictEqual(sumSalaries(salaries), 650)
    })
})