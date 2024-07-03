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

## Nested functions

-   A function is called "nested" when it is defined inside another function.
-   a nested function is redefined every the outer function executes.
-   a nested function can also be returned from the outer function, which can then be used elsewhere. The returned and nested function will still have access to same outer variables from where it was defined.
-   relying on this functionality of JavaScript to solve problems can become complex and there are generally much simpler ways to achieve the same thing.

## Lexical Environment

-   In JavaScript, every running,function, and the script as a whole have an internal associated object - the Lexical Environment
-   The Lexical Environment object consists of two parts:
    1. Environment Record - an object that stores all the local variables as its properties and some other information (like the value of `this`).
    2. A reference to the outer Lexical Environment (code that sits outside the current Lexical Environment).
-   the Lexical Environment is purely theoretical and doesn't actually need to exist in engines, however engines need to function the same way as if it did.
-   the Lexical Environment object is generally not accessible from code, its purely an internal concept.

### Variables

-   A variable defined in a scope is the same as a property on the Lexical Environment's Environment Record object.
-   A whole JavaScript file will have its own Lexical Environment, but here, there would be no reference to the outer Lexical Environment as it does not exist.
-   when a script starts, the Lexical Environment object has all the properties defined that represent variable declarations in the file. In this state, the variable is in a special state called "Uninitialized".
-   when a let or const declaration is appears, the Lexical Environment gives it the value of `undefined` if declared without an assignment, this now allows it to be referenced by further code without an error.
-   whenever a variable is assigned a value, that value is then reflected in the Lexical Environments associated property.

### Function Declarations

-   in JavaScript, functions are values which are stored in variables (the function name)
-   a unique behaviour of functions in JavaScript is that a function declaration (`function adder() {}`) is instantly initialised when a Lexical Environment is created.
-   This is useful because it allows code to become more readable and easier to understand. More high-level functions can be defined at the top of a file and other utility functions can be defined later on without obscuring the intent of the code.
-   This initialisation behaviour of functions is unique to function declarations - `function func() {}`, function expressions - `let func = () => {}` do not behave like this.

### Inner and Outer Lexical Environment

-   a Lexical Environment is created when a function runs in order to store all the local variables defined in the function and the parameters passed to the function.
-   a functions lexical environment will also hold a reference to the outer Lexical Environment
-   the outer Lexical Environment could be an outer function's Lexical Environment or the files
-   when a variable is accessed in code, the Lexical Environment tree is searched to find that variable, which starts from the current Lexical Environment and traverses each of the outer environments until a reference matches.
-   in non-strict mode, if a variable isn't found, an assignment to a non-existing variable results in a new global variable. In strict mode, this is an error.

### returning a function

-   When a function is created, an `Environment` property is stored on it that keeps reference to the Lexical Environment where it was created.
-   The `Environment` property is set once and forever at function creation time.
-   When a call is made to a function, it's Lexical Environments `outer` properties is assigned the same reference as the function's `Environment` property.

## Closure

-   closure is a general programming term that refers to a function that can access its outer scope.
-   In some languages, unlike JavaScript, closures are not possible.
-   In JavaScript, almost all functions are closures, the only exception to this is defining a function using the `new Function()` syntax.
