import { calculateFactorial } from "./calculateFactorial.js";
import { describe, test } from "node:test";
import assert from "node:assert/strict";

describe("calculateFactorial", () => {
    test("1! = 1", () => {
        assert.equal(calculateFactorial(1), 1);
    });
    test("2! = 2", () => {
        assert.equal(calculateFactorial(2), 2);
    });
    test("3! = 6", () => {
        assert.equal(calculateFactorial(3), 6);
    });
    test("4! = 24", () => {
        assert.equal(calculateFactorial(4), 24);
    });
    test("5! = 120", () => {
        assert.equal(calculateFactorial(5), 120);
    });
});
