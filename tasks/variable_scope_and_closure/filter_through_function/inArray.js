export function inArray(array) {
    return (element) => {
        if (array.find((el) => el === element)) {
            return true;
        }
        return false;
    };
}
