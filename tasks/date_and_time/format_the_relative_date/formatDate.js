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

    let days = convertSingleDigitStringToTwoDigits(String(date.getDate()));

    let month = convertSingleDigitStringToTwoDigits(
        String(date.getMonth() + 1)
    );

    const year = String(date.getFullYear());

    const lastTwoDigitsOfYear = year.substring(year.length - 2);

    const hours = convertSingleDigitStringToTwoDigits(String(date.getHours()));

    const minutes = convertSingleDigitStringToTwoDigits(
        String(date.getMinutes())
    );
    return `${days}.${month}.${lastTwoDigitsOfYear} ${hours}:${minutes}`;
}

function convertSingleDigitStringToTwoDigits(string) {
    if (string.length === 1) {
        string = `0${string}`;
    }

    return string;
}
