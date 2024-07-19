export function inBetween(numberA, numberB) {
    return (element) => {
        if (element >= numberA && element <= numberB) {
            return true;
        }
        return false;
    };
}