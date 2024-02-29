import { it, describe } from "node:test"
import assert from "assert/strict"
import { count } from "./count.js"

describe("count", () => {
    it("returns the amount of properties in the passed in object", () => {
        const user = {
            name: 'John',
            age: 30
        };

        assert.strictEqual(count(user), 2)
    })
})
