// Here, `newCounter` will output 1, 2, 1.
// This is because both `up` and `down` methods share the same count variable in its outer lexical environment.

function Counter() {
    let count = 0;

    this.up = function () {
        return ++count;
    };
    this.down = function () {
        return --count;
    };
}

let newCounter = new Counter();

alert(newCounter.up()); // ?
alert(newCounter.up()); // ?
alert(newCounter.down()); // ?
