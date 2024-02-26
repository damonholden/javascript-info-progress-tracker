import { describe, it } from "node:test"
import assert from "node:assert/strict"
import { ReadMessageDates } from "./ReadMessageDates.js";

describe("ReadMessageDates", () => {
    it("should allow storage of message objects", () => {
        const readMessageDates = new ReadMessageDates

        let messages = [
            { text: "Hello", from: "John" },
            { text: "How goes?", from: "John" },
            { text: "See you soon", from: "Alice" }
        ];

        const dates = [Date.now(), Date.now(), Date.now(),]

        readMessageDates.addReadMessageDate(messages[0], dates[0])
        readMessageDates.addReadMessageDate(messages[1], dates[1])
        readMessageDates.addReadMessageDate(messages[2], dates[2])

        assert.strictEqual(readMessageDates.readMessages.get(messages[0]), dates[0])
        assert.strictEqual(readMessageDates.readMessages.get(messages[1]), dates[1])
        assert.strictEqual(readMessageDates.readMessages.get(messages[2]), dates[2])
    })

    // The problem here is I can't test whether or not the WeakMap is functioning properly as removing all references to an object means i can't see if it exists in the WeakMap.
})