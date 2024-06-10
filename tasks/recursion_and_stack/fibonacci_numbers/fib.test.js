import { fib } from "./fib.js";
import {describe, test} from "node:test"
import assert from "node:assert/strict"

describe("fib", () => {
    test("returns 1 for 1", () => {
        assert.strictEqual(fib(1), 1)
    })
    test("returns 1 for 2", () => {
        assert.strictEqual(fib(2), 1)
    })
    test("returns 2 for 3", () => {
        assert.strictEqual(fib(3), 2)
    })
    test("returns 3 for 4", () => {
        assert.strictEqual(fib(4), 3)
    })
    test("returns 5 for 5", () => {
        assert.strictEqual(fib(5), 5)
    })
    test("returns 8 for 6", () => {
        assert.strictEqual(fib(6), 8)
    })
    test("returns 13 for 7", () => {
        assert.strictEqual(fib(7), 13)
    })
    test("returns 5_527_939_700_884_757 for 77", () => {
        assert.strictEqual(fib(77), 5_527_939_700_884_757)
    })
})
