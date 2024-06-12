// this loop variation of the fib function is likely the best iteration of the algorithm as no recursive function calls are required and every value is calculated only once.
// apparently this method is called dynamic programming - worth looking into.

export function fibLoop(n) {
    if (n < 3) {
        return 1;
    }

    let firstVal = 1;
    let secondVal = 1;

    for (let i = 3; i <= n; i++) {
        let thirdVal = firstVal + secondVal;
        firstVal = secondVal;
        secondVal = thirdVal;
    }

    return secondVal;
}
