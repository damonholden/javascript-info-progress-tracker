import { describe, test } from "node:test";
import assert from "node:assert/strict";
import { toJsonAndBack } from "./toJsonAndBack.js";

describe("toJsonAndBack", () => {
    test("should return an identical object with a different reference", () => {
        const user = {
            name: "John Smith",
            age: 35,
        };

        const duplicateUser = toJsonAndBack(user);

        assert.deepEqual(user, duplicateUser);
        assert.notStrictEqual(user, duplicateUser);
    });
});
