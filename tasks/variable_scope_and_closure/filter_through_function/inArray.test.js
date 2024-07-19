import { describe, test } from "node:test";
import assert from "assert/strict";
import { inArray } from "./inArray.js";

describe("inBetween", () => {
    test("should return true for values that are in the provided array", () => {
        assert.strictEqual(inArray([1, 2])(2), true);
    });

    test("should return false for values that are not in the provided array", () => {
        assert.strictEqual(inArray([1, 2])(4), false);
    });

    test("when used in a filter method of an Array, should return only elements that are in the provided array", () => {
        let arr = [1, 2, 3, 4, 5, 6, 7];
        let result = arr.filter(inArray([1, 3, 4]));
        assert.deepStrictEqual(result, [1, 3, 4]);
    });
});
