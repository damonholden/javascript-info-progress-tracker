export function sumToRecursion(n) {
    if (n === 1) {
        return 1;
    }

    return sumToRecursion(n - 1);
}
