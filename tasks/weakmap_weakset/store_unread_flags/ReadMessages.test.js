import { describe, it } from "node:test"
import assert from "node:assert/strict"
import { ReadMessages } from "./ReadMessages.js";

describe("ReadMessages", () => {
    it("should allow storage of message objects", () => {
        const readMessages = new ReadMessages

        let messages = [
            { text: "Hello", from: "John" },
            { text: "How goes?", from: "John" },
            { text: "See you soon", from: "Alice" }
        ];

        readMessages.add(messages[0])
        readMessages.add(messages[1])
        readMessages.add(messages[2])

        assert.deepEqual(readMessages.readMesages.has(messages[0]), true)
        assert.deepEqual(readMessages.readMesages.has(messages[1]), true)
        assert.deepEqual(readMessages.readMesages.has(messages[2]), true)
    })

    // The problem here is I can't test whether or not the WeakSet is functioning properly as removing all references to an object means i can't see if it exists in the weakset

})