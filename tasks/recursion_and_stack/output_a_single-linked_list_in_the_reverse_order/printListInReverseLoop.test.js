import { printListInReverseLoop } from "./printListInReverseLoop.js";
import { describe, test } from "node:test";
import assert from "node:assert/strict";

describe("PrintListInReverseLoop", () => {
    test("should log all the values in a linked list in reverse", (test) => {
        const list = {
            value: 1,
            next: {
                value: 2,
                next: {
                    value: 3,
                    next: {
                        value: 4,
                        next: null,
                    },
                },
            },
        };

        test.mock.method(console, "log");

        printListInReverseLoop(list);

        assert.equal(console.log.mock.calls.length, 4);
        assert.equal(console.log.mock.calls[0].arguments[0], 4);
        assert.equal(console.log.mock.calls[1].arguments[0], 3);
        assert.equal(console.log.mock.calls[2].arguments[0], 2);
        assert.equal(console.log.mock.calls[3].arguments[0], 1);
    });
});
