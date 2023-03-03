// with the following code, it is possible to have two objects derive from two
// different constructors referentially equal:

const object = {};

function A() {
	return object;
}

function B() {
	return object;
}

const a = new A();
const b = new B();

console.log(a === b);

// This is possible because constructors can return any object, not just the
// object created by the constructor. This does not work with primitive values
// however. Here, both constructors return an external object, so they are
// referentially equal.
