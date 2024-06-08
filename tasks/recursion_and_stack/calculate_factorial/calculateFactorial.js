export function calculateFactorial(n) {
    if (n === 1) {
        return 1;
    }

    return n * calculateFactorial(n - 1);
}