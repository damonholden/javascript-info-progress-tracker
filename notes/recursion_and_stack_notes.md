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

-   recursion depth can be referenced by the amount of context structures in the context stack.
-   recursion is less memory efficient than loop based algorithms because recursion requires context to be stored in memory for each nested function.
-   while recursion is generally inefficient, they can often be more readable, which may be more valuable.
-   any recursion can be written sas a loop

## Recursive traversals

-   recursive traversal is using recursion to traverse over a complex object
-   using loops to traverse complex objects can become ugly and unreadable, recursion can often be much more simpler:

    ```javascript
    let company = {
        sales: [
            { name: "John", salary: 1000 },
            { name: "Alice", salary: 1600 },
        ],
        development: {
            sites: [
                { name: "Peter", salary: 2000 },
                { name: "Alex", salary: 1800 },
            ],
            internals: [{ name: "Jack", salary: 1300 }],
        },
    };

    function sumSalaries(department) {
        if (Array.isArray(department)) {
            return department.reduce(
                (prev, current) => prev + current.salary,
                0
            );
        } else {
            let sum = 0;
            for (let subdep of Object.values(department)) {
                sum += sumSalaries(subdep);
            }
            return sum;
        }
    }

    alert(sumSalaries(company));
    ```
