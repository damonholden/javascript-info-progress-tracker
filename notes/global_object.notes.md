# Global object

The global object provides variables and functions that are available anywhere. By default, those that are built into the language or the environment.

In the browser, the global object is named `window`, for Node.js it is `global`, for other environments it may have another name.

`globalThis` was added to the language as a standardised way to access the global object of the environment it is ran in, which should be supported across all environments.

If a script was designed to work in one single environment, its ok to use that environment's specific global object name (like `window` if you know your script is going to be ran in the browser). However, if the script may run in other environments, it's better to use `globalThis` instead.

All properties of the global object can be accessed directly without the property access through the global object itself:

```JavaScript
alert("Hello")
// …is the same as…
window.alert("Hello")
```

In the browser, global functions and variables declared with `var` (not `let` or `const`)become methods and properties respectively on the global object:

```JavaScript
var globalVar = 5

alert (window.globalVar)
```

For compatibility reasons, function declarations (not function expressions) also have the same effect:

```JavaScript
function globalFunc() {
  alert("Hello")
}

window.globalFunc()
```

This behaviour does not exist in JavaScript modules.

If it is appropriate that a value should be accessible globally, it should be explicitly assigned as a property to the global object:

```JavaScript
window.currentUser = {
	name: "John"
}

// somewhere else in code
alert(currentUser.name) // John

// or, if we have a local variable with the name "currentUser"
// get it from window explicitly (safe!)
alert(window.currentUser.name) // John
```

Generally, it is discouraged to add to the globalObject (what is often called global scope pollution). It can be very tricky to debug a function that is utilising properties of the global object as the functions behaviour varies depending of the current state of the system (the values stored in the global object).
