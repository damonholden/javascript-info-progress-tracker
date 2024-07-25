// import { makeArmy } from "./makeArmy.js";
import util from "util";
import { describe, test } from "node:test";
import assert from "node:assert/strict";

describe("makeArmy", () => {
    test("should return an array of functions, that when invoked, should alert their number", async (t) => {
        global.alert = t.mock.fn();
        const { makeArmy } = await import("./makeArmy.js");
        const army = makeArmy();

        for (const shooter of army) {
            shooter();
        }

        assert.deepStrictEqual(
            global.alert.mock.calls.map((call) => call.arguments),
            [[0], [1], [2], [3], [4], [5], [6], [7], [8], [9]]
        );
    });
});
