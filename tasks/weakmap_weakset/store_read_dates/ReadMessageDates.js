export class ReadMessageDates {
    readMessages = new WeakMap

    addReadMessageDate(message, date) {
        this.readMessages.set(message, date)
    }
}