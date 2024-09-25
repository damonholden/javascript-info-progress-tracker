import { describe, test } from "node:test";
import assert from "node:assert/strict";
import { makeCounter } from "./counter.js";

describe("makeCounter", () => {
    test("the returned function should have a set method that when called sets the count to the passed number", () => {
        const counter = makeCounter();
        counter.set(6);

        assert.strictEqual(counter.count, 6);
    });

    test("the returned function should have a decrease method that when called - decreases the count property", () => {
        const counter = makeCounter();
        counter.set(6);
        counter.decrease();

        assert.strictEqual(counter.count, 5);
    });
});
