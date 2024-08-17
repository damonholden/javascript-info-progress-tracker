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

