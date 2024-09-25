function makeCounter() {
    function counter() {
        return counter.count++;
    }

    counter.count = 0;

    counter.set = (value) => {
        counter.count = value;
    };

    counter.decrease = () => {
        counter.count--;
    };

    return counter;
}

export { makeCounter };
