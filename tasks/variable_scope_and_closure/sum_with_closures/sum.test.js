import { describe, test } from "node:test";
import assert from "node:assert/strict";
import { sum } from "./sum.js";

describe("sum", () => {
    test("works", () => {
        assert.strictEqual(sum(1)(2), 3);
    });
});
