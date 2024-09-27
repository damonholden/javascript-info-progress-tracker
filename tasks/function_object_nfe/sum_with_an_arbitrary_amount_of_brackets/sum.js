// Weird solution here, but its the one JavaScript.info demonstrates. Would never do something like this in real code.

export function sum(number) {
    let currentSum = number;

    function nextSum(nextNumber) {
        currentSum += nextNumber;
        return nextSum;
    }

    nextSum[Symbol.toPrimitive] = () => currentSum;

    return nextSum;
}
