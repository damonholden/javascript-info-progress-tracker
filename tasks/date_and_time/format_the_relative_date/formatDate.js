export function formatDate(date) {
    const now = new Date

    if (now - date < 1000) {
        return "right now"
    }

    if (now - date < 60_000) {
        const difference = now - date
        const differenceAsSeconds = difference / 1000
        return `${differenceAsSeconds} sec. ago`
    }
}