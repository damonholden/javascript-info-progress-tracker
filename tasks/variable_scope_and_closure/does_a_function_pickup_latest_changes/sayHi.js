// When this script executes, this code will alert the name Pete instead of John.
// the lexical environment updates the value of variables as they change throughout code execution.
// when `sayHi` executes, it evaluates `someName` at runtime with the latest value.

let someName = "John";

function sayHi() {
  alert("Hi, " + someName);
}

someName = "Pete";

sayHi(); // what will it show: "John" or "Pete"?