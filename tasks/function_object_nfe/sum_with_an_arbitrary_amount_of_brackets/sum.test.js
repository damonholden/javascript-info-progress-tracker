import {test, describe} from "node:test"
import assert from "node:assert/strict"
import { sum } from "./sum.js"

describe("sum", () => {
	test("when curried with multiple numbers, it should return the sum of all those numbers when used in an expression with type coercion", () => {
		const total = sum(1)(2)(3)(4)
		assert.strictEqual(+total, 10)
	})
})