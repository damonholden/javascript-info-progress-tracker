export function sumToRecursion(n) {
    if (n === 1) {
        return 1;
    }

    return n + sumToRecursion(n - 1);
}


