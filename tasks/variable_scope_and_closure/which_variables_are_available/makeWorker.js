// here, the alerted name would be pete because `someKindOfName` is declared in `makeWorker`'s lexical environment, which is the outer lexical environmesomeNamef `work`.
// However, if `someKindOfName` was not defined in `makeWorker`, then the `someKindOfName` variable defined in global scope would be used.

function makeWorker() {
    let someKindOfName = "Pete";

    return function () {
        alert(someKindOfName);
    };
}

let someKindOfName = "John";

// create a function
let work = makeWorker();

// call it
work(); // what will it show?
