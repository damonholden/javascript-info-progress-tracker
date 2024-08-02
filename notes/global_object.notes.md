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

