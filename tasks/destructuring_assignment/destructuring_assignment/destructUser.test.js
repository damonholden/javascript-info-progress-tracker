import { describe, it } from "node:test"
import assert from "node:assert/strict"
import { destructUser } from "./destructUser.js"

describe("destructUser", () => {
    it("should return a new object from a user object with the same name property, the years proterty mapped to an age propety, and the same isAdmin property that defaults to false if it does not exist", () => {
        const user = {
            name: "John",
            years: 30
        };

        assert.deepEqual(destructUser(user), { name: "John", age: 30, isAdmin: false })
    })
})