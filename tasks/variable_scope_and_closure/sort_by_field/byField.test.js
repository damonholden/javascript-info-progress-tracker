import { describe, test } from "node:test";
import assert from "node:assert/strict";
import { byField } from "./byField.js";

describe("byField", () => {
    describe("should return a sorting function that can be used in `Array.sort` to sort an object by one of its properties", () => {
        const users = [
            { name: "John", age: 20, surname: "Johnson" },
            { name: "Pete", age: 18, surname: "Peterson" },
            { name: "Ann", age: 19, surname: "Hathaway" },
        ];
        test("sort by name", () => {
            assert.deepStrictEqual(users.sort(byField("name")), [
                { name: "Ann", age: 19, surname: "Hathaway" },
                { name: "John", age: 20, surname: "Johnson" },
                { name: "Pete", age: 18, surname: "Peterson" },
            ]);
        });
        test("sort by age", () => {
            assert.deepStrictEqual(users.sort(byField("age")), [
                { name: "Pete", age: 18, surname: "Peterson" },
                { name: "Ann", age: 19, surname: "Hathaway" },
                { name: "John", age: 20, surname: "Johnson" },
            ]);
        });
    });
});
