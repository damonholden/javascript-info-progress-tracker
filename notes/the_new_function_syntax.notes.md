# The `new Function` syntax

Functions can be instantiated from the `Function` class as a way to create functions:

```JavaScript
const func = new Function([arg1, arg2, ...argN], functionBody)
```

Calling the `Function` constructor with a single argument will be interpreted as the functions body:

```JavaScript
const func = new Function(functionBody)
```

One major difference is that this kind of function is created from a string passed at runtime. This allows for use cases like user generated functions or sending functions from a server.
