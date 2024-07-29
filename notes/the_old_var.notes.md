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
