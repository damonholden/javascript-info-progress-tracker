# Variable scope, closure

-   3 ways to declare variables in javascript:
    -   let - modern, re-assignable
    -   const - modern, cannot be reassigned
    -   var - the old way of declaring all variables

## Code blocks

-   if a variable (`let` or `const`) is defined in any code block (`{...}`), it is only accessible from within that block:
    ```JavaScript
    {
    	let x = 1;
    }
    console.log(x); // ReferenceError: x is not defined
    ```
-   code blocks can be used to isolate code that justifies its own scope, and has variables only accessible to that block.

    ```JavaScript
    {
    	const message = "Hello"
    	alert(message)
    }

    {
    	const message = "Goodbye"
    	alert(message)
    }
    ```

-   in the example above, without code blocks there would be an error because the same variable is being declared twice in the same scope.
-   for `if`, `for`, `while`, etc. (constructs that define code blocks), the logic of code blocks remains the same.

    ```JavaScript
    for (let i = 0; i < 3; i++) {
    	alert(i)
    }

    alert(i) // ReferenceError: i is not defined
    ```

-   in the above case even though `let i` is visibly outside of the code block, anything within the for loops brackets are considered part of the loop.
