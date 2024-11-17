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

- `func|code` - a function or a string of code to execute. String representation of code (`code`) only exists for historical reasons, it's not recommended to use it in new code.

- `delay` - the delay that has to elapse before executing the passed `func|code` in milliseconds. This is optional and the default if not passed is `0`.

- `arg1, arg2, ...` - arguments that will be passed into the function argument when invoked after the delay. This is useful for calling functions without having to invoke them in some anonymous function passed as the `func` argument.

### Example:

The following example of `setTimeout` calls `say_hi` after 1 second.

```JavaScript
function say_hi() {
	alert("hi")
	return
}

setTimeout(say_hi, 1000)
```
