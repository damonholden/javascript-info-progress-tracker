import { describe, test } from "node:test";
import assert from "node:assert/strict";
import { sumToRecursion } from "./sumToRecursion.js";

describe("sumToRecursion", () => {
    test("returns 1 for 1", () => {
        assert.strictEqual(sumToRecursion(1), 1);
    });

    test("returns 3 for 2", () => {
        assert.strictEqual(sumToRecursion(2), 3);
    });

    test("returns 6 for 3", () => {
        assert.strictEqual(sumToRecursion(3), 6);
    });

    test("returns 10 for 4", () => {
        assert.strictEqual(sumToRecursion(4), 10);
    });

    test("returns 15 for 5", () => {
        assert.strictEqual(sumToRecursion(5), 15);
    });
});
