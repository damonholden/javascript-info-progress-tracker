export class ReadMessages {
    readMesages = new WeakSet()

    add(message) {
        this.readMesages.add(message)
    }
}