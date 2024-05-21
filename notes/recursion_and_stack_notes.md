# Recursion and Stack Notes

## Recursion

-   Recursion is when a function calls itself.
-   Recursion is useful when tasks can be naturally split into simpler tasks or similar variants.
-   Recursive code is normally a fair bit shorter than its iterative counter-part.
-   Typically a recursive stack can be reliable to about 10_000 in most javascript engines.

## the Execution and Context stack

-   the execution context is an internal data structure that detailed information regarding a functions execution - like where the control flow is, the current variables, the value of `this`, etc.
-   one function has one execution context associated with it.
-   when a function makes a nested call to another function, the following happens:

    1.  the current function's execution is paused.
    2.  the execution context is stored in a data structure called the execution context stack.
    3.  the nested called function executes.
    4.  after the nested function's execution ends, the execution context that was stored in the execution context stack is retrieved and the original function resumes execution from where it was paused.
