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

## Recursive Structures

-   a recursive data structure is one that replicates itself in parts.
-   a good example of this is a HTML document which will contain HTML tags that either contain HTML components, text, or other HTML tags - thus creating a recursive pattern in the data structure.

### linked list

-   An Array can be used for a list but removing elements from inside the array can be costly as all the other elements need to be reordered.
-   A linked list can be used for fast insertion and deletion.
-   in javascript, a linked list can be defined as a recursive object with two properties - value and next:

    -   value is the actual value held in that position of the list.
    -   next is the link to the next value in the list.

-   An example of a linked list in javascript could be the following:

    ```javascript
    let list = {
        value: 1,
        next: {
            value: 2,
            next: {
                value: 3,
                next: {
                    value: 4,
                    next: null,
                },
            },
        },
    };
    ```

-   linked list elements in javascript can be easily inserted and removed by resignment of the next property:

    -   for inserting a value:

        ```javascript
        let list = { value: 1 };

        list.next = { value: 2 };
        list.next.next = { value: 3 };
        list.next.next.next = { value: 4 };

        // prepend the new value to the list
        list = { value: "new item", next: list };
        ```

    -   for removing a value:

        ```javascript
        list.next = list.next.next;
        ```

-   removing values from linked lists will have their values removed from memory through the garbage collection process.
