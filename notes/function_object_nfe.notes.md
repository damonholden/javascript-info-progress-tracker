# Function object, NFE

In JavaScript, functions are values. More specifically, functions are objects. The main implications of this are:

1. Properties can be added/removed from functions.
2. Functions can be used as values in function arguments, return values, array elements, etc.

## The `name` property

Function objects do contain some useful properties.

a functions name is accessible as the `name` property:

```JavaScript
function sayHi() {
	alert("Hi")
}

alert(sayHi.name) // sayHi
```

The `name` property of a function object is also dynamic, so will be correct even if a function is initially created without a name, for example:

```JavaScript
const sayHi = function() {
	alert("Hi")
}

alert(sayHi.name) // sayHi
```

This behaviour is also the same for default values:

```JavaScript
function f(sayHi = function() {}) {
	alert(sayHi.name); // sayHi
}

f();
```

The Ecmascript specification calls this feature a "contextual name". If a function does not have an explicit name, then in an assignment, it is figured out from the context.

Object methods have names too:

```JavaScript
const user = {
	sayHi() {
		alert("Hi")
	},

	sayBye: function() {
		alert("Bye")
	}
}

alert(user.sayHi.name) // sayHi
alert(user.sayBye.name) // sayBye
```

in situations where there is no way to contextually identify a name, then the name property will be an empty string:

```JavaScript
const arr = [function() {}]

alert(arr[0].name) / ""
```

## The `length` property

The `length` property of a function returns the number of parameters of that functio:

```JavaScript
function f(a, b) {}

alert(f.length) // 2
```

Rest parameters are not counted in the `length` property of a function:

```JavaScript
function f(...args) {}

alert(f.length) // 0
```

The length property is sometimes used for introspection (runtime type checking) in functions that operate on other functions:

```JavaScript
function f(bool, handler) {
	if (handler.length > 0) {
		handler(bool)
		return
	}

	if (bool) {
		handler()
	}
}
```

What happens above is an example of introspection as well as polymorphism - providing a single interface for entities of different types (in this case, functions with a different `length`) property.

## Custom properties

Just like basic objects, function objects also allow the setting of custom properties:

```JavaScript
function sayHi() {
	alert("Hi")

	sayHi.counter++
}

sayHi.counter = 0

sayHi() // Hi
alert(sayHi.counter) // 1

sayHi() // Hi
alert(sayHi.counter) // 2
```

Its important to note that properties on a function do not become variables within the function. A variable defined in a function called `counter` and a property also called `counter` on that same function are two different entities.

Function properties can replace the use of closures in some cases:

```JavaScript
function makeCounter() {
	function counter() {
		return counter.count++
	}

	counter.count = 0;

	return counter
}

let counter = makeCounter();

alert(counter()) // 0
alert(counter()) // 1
```

Above, the `count` is a property stored on the function directly so no need to store a variable in outer scope to persist it.

The main functional difference in storing values on the function itself is that it also allows external code to modify those function property values directly. When you store values in the parent scope (a maker function, for example), then no external code can access that value directly.

## Named function expressions

Named Function Expression (NFE) is a term for function expressions that have a name:

```JavaScript
const sayHi = function sayHiFunc() {
	alert("Hi")
}
```

It's important to note that even though the function above has a name in its definition, it is not a function declaration. Because the function is still within the context of an assignment expression, it is still considered a function expression.

The example above still results in `sayHI()` being the syntax to invoke the function.

There are two main implications of the Named Function Expression above:

1. The function can reference itself internally.
2. The function name is not visible outside of the function.

An example of these two implications in action can be seen in the code below:

```JavaScript
const sayHi = function sayHiFunc(who) {
	if (who) {
		alert ("Hi, " + who)
		return
	}

	sayHiFunc("stranger")
}

sayHi() // Hi, stranger


sayHiFunc() // ReferenceError: sayHiFunc is not defined
```

You can still reference the function internally by using the variable name the function is assigned to. The problem is that if the variable gets reassigned - then there will be errors.

```JavaScript
let sayHi = function sayHiFunc(who) {
	if (who) {
		alert ("Hi, " + who)
		return
	}

	sayHi("stranger")
}

const sayHiFunc = sayHi

sayHiFunc() // Hi, stranger

sayHi = null

sayHiFunc() // ReferenceError: sayHi is not defined
```

This happens because `sayHi` is defined in the outer lexical environment, and is therefore used inside `sayHiFunc`. If the `sayHi` value changes before an execution of the `sayHiFunc` function, then it will invoke a different a different value if it invokes `sayHi`.

When you give the function in a function expression a name, it is guaranteed to always be a reference to the current function when it is referenced from within the function. The specification makes this mandatory.

### There's no such thing for function declarations

The "internal name" feature described above is only available for function expressions. Function declarations have not such feature, so this may be a good reason to write a function as a Named Function Expression.

## Summary

Functions are objects.

Functions have properties that can be useful:

`name` - the function's name. The value is taken from the declaration, but there is a process to "guess" the value if a name can't be sourced from the declaration.

`length` - the number of parameters in the function. Rest parameters are not included.

If the function is a function expression, and still carries the name, then it is a Named Function Expression (NFE). The name in this case can be used for the function to reference itself safely.

functions can have new properties added to them as well, which is a feature libraries make use of.
