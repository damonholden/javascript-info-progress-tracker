// Here, because the script is ran in strict mode, the `sayHi` invocation will result in a reference error.
// in non-strict mode, sayHi will be executed and alert "Hello, John".
// This is because functions are always hoisted to the top of function scope (or global if not defined within a function).

"strict mode";

let phrase = "Hello";

if (true) {
    let user = "John";

    function sayHi() {
        alert(`${phrase}, ${user}`);
    }
}

sayHi();
