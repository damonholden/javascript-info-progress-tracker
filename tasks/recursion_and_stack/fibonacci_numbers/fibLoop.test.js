import { fibLoop } from "./fibLoop.js";
import { describe, test } from "node:test";
import assert from "node:assert/strict";

describe("fibLoop", () => {
    test("returns 1 for 1", () => {
        assert.strictEqual(fibLoop(1), 1);
    });
    test("returns 1 for 2", () => {
        assert.strictEqual(fibLoop(2), 1);
    });
    test("returns 2 for 3", () => {
        assert.strictEqual(fibLoop(3), 2);
    });
    test("returns 3 for 4", () => {
        assert.strictEqual(fibLoop(4), 3);
    });
    test("returns 5 for 5", () => {
        assert.strictEqual(fibLoop(5), 5);
    });
    test("returns 8 for 6", () => {
        assert.strictEqual(fibLoop(6), 8);
    });
    test("returns 13 for 7", () => {
        assert.strictEqual(fibLoop(7), 13);
    });
    test("returns 5_527_939_700_884_757 for 77", () => {
        assert.strictEqual(fibLoop(77), 5_527_939_700_884_757);
    });
});
