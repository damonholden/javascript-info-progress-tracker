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

## Link

-   https://javascript.info/rest-parameters-spread
