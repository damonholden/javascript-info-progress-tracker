import { describe, test } from "node:test";
import assert from "node:assert/strict";
import { sumToForLoop } from "./sumToForLoop.js";

describe("sumToForLoop", () => {
    test("returns 1 for 1", () => {
        assert.strictEqual(sumToForLoop(1), 1);
    });

    test("returns 3 for 2", () => {
        assert.strictEqual(sumToForLoop(2), 3);
    });

    test("returns 6 for 3", () => {
        assert.strictEqual(sumToForLoop(3), 6);
    });

    test("returns 10 for 4", () => {
        assert.strictEqual(sumToForLoop(4), 10);
    });

    test("returns 15 for 5", () => {
        assert.strictEqual(sumToForLoop(5), 15);
    });

    test("return 5_000_050_000 for 100_000", () => {
        assert.strictEqual(sumToForLoop(100_000), 5_000_050_000);
    });
});
