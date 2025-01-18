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

The value of the identifier returned by `setTimeout` is an integer, except for Node - <https://developer.mozilla.org/en-US/docs/Web/API/Window/setTimeout#browser_compatibility>, where setTimeout instead returns an object.

Clearing a timeout is useful for when the program knows that the execution of the function passed into `setTimeout` is invalid, or as a step in context tear-down, when the execution of the callback would be redundant.

Browser timers are described in the timers section of the HTML Living Standard - <https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers>.

## `setInterval`

The `setInterval` function has the same syntax as `setTimeout`:

```JavaScript
let timer_id = setInterval(func|code, [delay], [arg1], [arg2], ...)
```

All the arguments to `setInterval` have the same meaning as they do in `setTimeout`. The difference is that it runs the function not only once, but regularly after the given interval of time.

To stop any further calls, `clearInterval(timerId)` is used.

The following example sets up a function to be called every 2 seconds via `setInterval` which is then cleared via invoking `clearInterval` within a `setTimeout`:

```JavaScript
const timer_id = setInterval(() => console.log("tick", Date.now()), 1_000)
setTimeout(() => { clearInterval(timer_id); console.log("stop", Date.now()); }, 5_000)
```

### Time goes on while `alert` is invoked

In most browsers, the internal timer continues while invoking user-interaction functions like `alert`, `confirm`, and `prompt`.

If a setInterval is invoked and passes a function that invokes `alert` every second, and the first alert is not interacted with for 5 seconds, then there would be 4 more "queued" `alert` dialogs that would each subsequently appear with no delay.

### Nested setTimeout

There are actually two ways of running some code on a regular interval. One, of course, is `setInterval` and the other is a nested `setTimeout`:

```JavaScript
let timer_id = setTimeout(function tick() {
	console.log("tick")
	timer_id = setTimeout(tick, 1_000);
}, 1_000)
```

Using recursion, a new timeout is created with the same callback after rest of the callback execution in the previous timer has finished executing - practically replicating `setInterval`.

Nested `setTimeout` calls, like the example above, are not useful because `setInterval` does the same thing in a less verbose way, but nested `setTimeout`s can be more flexible, as subsequent timer delays can be conditionally changed. An example of where this could be useful is for creating growing delays for retrying failed web requests:

```JavaScript
let delay = 1_000
setTimeout(async function get_resource() {
	const response = await fetch("example.com");

	if (!response.ok) {
		delay *= 2;
	}

	setTimeout(get_resource, delay);
}, delay);
```

Another benefit of using nested `setTimeout` for intervals is that you can control when the next timer starts. consider these two examples:

```JavaScript
setInterval(function tick() {
	alert("tick")
}, 1_000)
```

```JavaScript
setTimeout(function tick() {
	alert("tick")
	setTimeout(tick, 1_000);
}, 1_000)
```

In the first example, `tick` is invoked in 1 second intervals and each interval delay is started immediately when the previous has finished, meaning if the `alert` dialog is not interacted with, `alert` is still being invoked after each second. In the second example, the behavior is different, further invocations to `setTimeout` after the first happen after `alert` has finished executing - in practice meaning the next timeout isn't started until the `alert` dialog is acknowledged. This same behavior could be useful for intervals that should be spaced out between complete function executions. In short, the real delay between invocations of functions passed into setInterval is less than in the code - as the callbacks execution consumes some amount of the interval delay.

### Garbage collection and setInterval