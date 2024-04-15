export function formatDate(date) {
    const now = new Date();

    if (now - date < 1000) {
        return "right now";
    }

    const timeDifference = now - date;

    if (now - date < 60_000) {
        const differenceAsSeconds = timeDifference / 1000;
        return `${differenceAsSeconds} sec. ago`;
    }

    if (now - date < 3_600_000) {
        const differenceAsMinutes = timeDifference / 1000 / 60;
        return `${differenceAsMinutes} min. ago`;
    }
}
