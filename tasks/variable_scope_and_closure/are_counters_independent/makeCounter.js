// Here, counter2 will output 0 and then 1 because it was created from a new invocation of `makeCounter` and thus has a different lexical environment to the first.

function makeCounter() {
    let count = 0;

    return function () {
        return count++;
    };
}

let counter = makeCounter();
let counter2 = makeCounter();

alert(counter()); // 0
alert(counter()); // 1

alert(counter2()); // ?
alert(counter2()); // ?
