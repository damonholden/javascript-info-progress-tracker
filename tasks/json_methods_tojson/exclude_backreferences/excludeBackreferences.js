export function excludeBackreferences(_, value) {
    if (value === this) {
        return;
    }

    return value;
}
