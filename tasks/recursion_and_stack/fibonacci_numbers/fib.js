// This solution works but it almost freezes the javascript engine with large enough numbers as the recursion tree calculates the same fibonacci number multiple times.

export function fib(n) {
    if (n < 3) {
        return 1
    }

    return fib(n - 1) + fib(n - 2)
}