import { describe, test } from "node:test";
import assert from "assert/strict";
import { inBetween } from "./inBetween.js";

describe("inBetween", () => {
    test("should return true for values that are between numberA and numberB", () => {
        assert.strictEqual(inBetween(1, 3)(2), true);
    });

    test("should return false for values that are not between numberA and numberB", () => {
        assert.strictEqual(inBetween(1, 3)(4), false);
    });

    test("when used in a filter method of an Array, should return only elements that are between numberA and numberB", () => {
        let arr = [1, 2, 3, 4, 5, 6, 7];
        let result = arr.filter(inBetween(3, 6));
        assert.deepStrictEqual(result, [3, 4, 5, 6]);
    });
});
