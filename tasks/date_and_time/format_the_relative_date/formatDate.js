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

    let days = String(date.getDate());
    if (days.length === 1) {
        days = `0${days}`;
    }

    let month = String(date.getMonth() + 1);
    if (month.length === 1) {
        month = `0${month}`;
    }

    const year = String(date.getFullYear());
    const lastTwoDigitsOfYear = year.substring(year.length - 2);

    let hours = String(date.getHours());
    if (hours.length === 1) {
        hours = `0${hours}`;
    }
    let minutes = String(date.getMinutes());
    if (minutes.length === 1) {
        minutes = `0${minutes}`;
    }
    return `${days}.${month}.${lastTwoDigitsOfYear} ${hours}:${minutes}`;
}
