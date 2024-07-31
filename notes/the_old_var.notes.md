# the old var

The information here is for understanding old scripts. New code should not be written like this.

There are 3 ways to declare a variable:

-   `let`
-   `const`
-   `var`

`var` is similar to `let`. Most of the time, `var` declarations can be replaced with `let` ones and things should work the same.

internally, `var` behaves very differently to `let` and `const`.

## `var` has no block scope

Variables declared with `var` are either function-scoped, or global-scoped. `var` declared variables in any other code blocks will "leak" out to either function-scope or global-scope, whichever is the closest enclosing scope:

```JavaScript
if (true) {
  var test = true;
}

alert(test); // true, the `var` declared `test` variable is part of global scope
```

`let` and `const` do not have the same scope behaviour as `var`. `let` and `const` are both scoped to the nearest code block:

```JavaScript
if (true) {
  let test = true;
}

alert(test); // ReferenceError: test is not defined
```

The scope behaviour of `var` applies to variables declared inside the brackets and code-block of a `for` loop:

```JavaScript
for (var i = 0; i < 10; i++) {
  var one = 1;
  // ...
}

alert(i);   // 10, "i" is visible after loop, it's a global variable
alert(one); // 1, "one" is visible after loop, it's a global variable
```

If any code-block is inside a function, then any `var` variable becomes scoped to that function:

```JavaScript
function sayHi() {
  if (true) {
    var phrase = "Hello";
  }

  alert(phrase); // works as expected
}

sayHi();
alert(phrase); // ReferenceError: phrase is not defined
```

## `var` tolerates redeclarations

when declaring a variable with `let` twice, the result is a syntax error:

```JavaScript
let user;
let user; // SyntaxError: 'user' has already been declared
```

With `var`, a variable can be redeclared any number of times.

## `var` variables can be declared below their use

`var` declarations are processed when the function is executed (or when the script is executed for global variables). Wherever a `var` variable is defined, its definition is hoisted to the top of its scope.

The following code:

```JavaScript
function sayHi() {
  phrase = "Hello";

  alert(phrase);

  var phrase;
}
sayHi();
```

…Is technically the same as:

```JavaScript
function sayHi() {
  var phrase;

  phrase = "Hello";

  alert(phrase);
}
sayHi();
```

…when the function is executed. As the `var` declaration for `phrase` is raised to the top of function scope.

This rule also applies for the following code:

```JavaScript
function sayHi() {
  phrase = "Hello"; // (*)

  if (false) {
    var phrase;
  }

  alert(phrase);
}
sayHi();
```

Even though the `var` declaration above is in an if loop that should never execute as `false` is falsy, a `var` declaration's scope is always either the function or global scope, and is therefore hoisted to the top of that scope.

people can sometimes name this behaviour differently (raising, hoisting, etc.), but these all mean the same thing.

An important thing to note is that **`var` declarations are hoisted, but assignments are not**. This is demonstrated in the following code:

```JavaScript
function sayHi() {
  alert(phrase);

  var phrase = "Hello";
}

sayHi();
```

In the above code, while the `var` declaration is hoisted to the top of function scope, the assignment of the value `"Hello"`that happens on the same line does not, and always happens in the place that it appears. The code effectively executes like the code block below:

```JavaScript
function sayHi() {
  var phrase; // declaration works at the start...

  alert(phrase); // undefined

  phrase = "Hello"; // ...assignment - when the execution reaches it.
}

sayHi();
```

Because all `var` declarations are always hoisted to the top of their scope, they can always be referenced anywhere in the code, but they remain undefined until their assignments take place where they are written.
