# Rest parameters and spread syntax notes

-   There are many built-in functions in JavaScript that support any number of arguments from one.
-   Math.max(arg1, arg2, ..., argN) – returns the greatest of the arguments.
-   Object.assign(dest, src1, ..., srcN) – copies properties from src1..N into dest.
-   Functions can also be defined like this.

## Rest parameters

-   a function can be called with any number of arguments, no matter how many parameters are defined - no excessive argument exception exists in JavaScript.
-   Despite excessive amounts of arguments not being an error in JavaScript, but arguments that go over the amount of parameters defined for a function will have those exceeding arguments ignored during function execution.
-   To account for any number of arguments in a function, a rest parameter can be used to capture all the exceeding arguments in an Array - `function someFunc(...params)`.
-   the rest parameter can be used to capture all arguments into a function - like `function someFunc(...params)`, or just the arguments that go passed the amount of defined parameters - like `function someFunc(a, b, ...params)` (`...params` must be defined at the end of a parameter list, doing otherwise causes an error).

## The `arguments` variable

-   within a function, there exists an Array-like object - `arguments`, that contains all the arguments passed to a function accessible by index.
-   `arguments` existed before rest parameters existed, so it shouldn't be used in modern code.
-   while `arguments` is array-like and iterable, it is not an array, and doesn't support array methods, unlike rest parameters.
-   unlike rest parameters, there is no way to capture only some of the passed arguments with `arguments`, it will always contain all the arguments.
-   arrow functions (`() => {}`) do not have access t the `arguments` variable.

## Spread syntax

- spread syntax has an identical syntax to rest parameters, but almost does the opposite - where rest parameters turn values (function parameters) into an array, the spread operator extracts the values from an iterable to be used for some other data structure.
- spread syntax can be used in multiple contexts:
    - for function arguments - `func(...args)`
    - for array spreading - `[...arr]` (a useful way do shallow copy an array)
    - for object spreading - `{...obj}` (a useful way do shallow copy an object)
- the spread syntax can also be used to spread multiple iterables - `func(...args, ...moreArgs)`
    - this is also useful for merging arrays - `[...vals, ...moreVals]`
- spread syntax can be used alongside other values as well - `[...vals, 1, 2, 3]`
- typically, spread syntax is used with arrays, but any iterable will do:
    - strings - to get each character.
    - while this is useful for turning any iterable into an array by spreading an iterable into an array literal, `Array.from()` is likely the better option for this use case.


## Link

-   https://javascript.info/rest-parameters-spread
