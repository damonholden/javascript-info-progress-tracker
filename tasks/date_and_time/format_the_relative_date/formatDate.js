export function formatDate(date) {
    const now = new Date

    if (now - date < 1000) {
        return "right now"
    }

}