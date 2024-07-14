export function sum(firstNumber) {
    return function secondSum(secondNumber) {
        return firstNumber + secondNumber;
    };
}
