import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { excludeBackreferences } from "./excludeBackreferences.js";

describe("excludeBackreferences", () => {
    test("should remove any properties from an object that reference the object itself when used as a replacer function in JSON.stringify", () => {
        const object = { blah: "blah" };
        object.self = object;

        assert.strictEqual(
            JSON.stringify(object, excludeBackreferences),
            '{"blah":"blah"}'
        );
    });
});
