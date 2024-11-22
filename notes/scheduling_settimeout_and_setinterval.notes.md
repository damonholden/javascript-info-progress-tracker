# Scheduling: `setTimeout` and `setInterval`

There may be cases where functions should be ran later rather than immediately. This is called scheduling and JavaScript provides two language APIs to facilitate this:

1. `setTimeout` - invokes a function after a set amount of time.
2. `setInterval`- repeatedly invokes a function on a defined interval.

Worth noting that both of the above scheduling functions are not part of the language specification, but most environments provide an implementation so it is effectively a standard.

## `setTimeout`

### Syntax

```JavaScript
let timer_id = setTimeout(func|code, [delay], [arg1], [arg2], ...)
```

#### Parameters

-   `func|code` - a function or a string of code to execute. String representation of code (`code`) only exists for historical reasons, it's not recommended to use it in new code.

-   `delay` - the delay that has to elapse before executing the passed `func|code` in milliseconds. This is optional and the default if not passed is `0`.

-   `arg1, arg2, ...` - arguments that will be passed into the function argument when invoked after the delay. This is useful for calling functions without having to invoke them in some anonymous function passed as the `func` argument.

### Example:

The following example of `setTimeout` calls `say_hi` after 1 second.

```JavaScript
function say_hi() {
	alert("hi")
	return
}

setTimeout(say_hi, 1000)
```

The following is another example of `setTimeout` which calls an implementation of `say_hi` with arguments:

```JavaScript
function say_hi(phrase, who) {
	alert(phrase + ', ' + who)
}

setTimeout (sayHi, 1000, "Hello", "John")
```

If the first argument of passed into `setTimeout` is a string, then JavaScript will parse it as a function:

```JavaScript
setTimeout("alert('Hello')", 1000);
```

passing function strings is considered bad practice. This functionality was introduced to facilitate anonymous functions back in a time when JavaScript had no such concept. In modern code, anonymous functions should be used instead:

```JavaScript
setTimeout(() => alert("Hello"), 1000)
```

### Pass a function definition, not an invocation

It can be an easy mistake to add invocation brackets after passing a function declaration into `setTimeout`:

```JavaScript
setTimeout(sayHi(), 1000);
```

The above implementation won't behave as one might expect, as instead of passing a function definition to `setTimeout` (`sayHi`), the code instead executes `sayHi` when evaluating the first argument (`sayHi()`). This can actually be correct if the function invocation returns a function declaration - which would be used as the argument, bt often function invocations here are a mistake.

### Cancelling with clearTimeout

When `setTimeout` is invoked, the function returns an identifier that can be used to cancel the execution, by passing it as the argument for `clearTimeout`:

```JavaScript
let timer_id = setTimeout(() => doSomething(), 1000)
clearTimeout(timer_id)
```

The value of the identifier returned by `setTimeout` is an integer, except for Node - https://developer.mozilla.org/en-US/docs/Web/API/Window/setTimeout#browser_compatibility, where setTimeout instead returns an object.

clearing a timeout is useful for when the program knows that the execution of the function passed into `setTimeout` is invalid, or as a step in context tear-down, when the execution of the callback would be redundant.
