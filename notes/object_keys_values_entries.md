# Object.keys, values, entries

The `keys`, `values`, `entries`, methods of objects are generic methods - meaning they are supported accross most object types in JavaScript and other custom data structures should also have them aswell.

The syntax for plain objects is slightly different as the method is static so it has to be called from the Object class itself and have the object passed in as a parameter. The main reason this was done was to allow other data structures to have their own implementation of these methods.

These methods also don't retren symbol properties, similar to the `for...in` loop.

## Transforming Objects

A problem with objects is that they lack some of the useful methods that exist for `Array`s (`map`, `filter`, etc.). This can be achived however through a combination of `Object.entries` and `Object.fromEntries`:

1. `Object.entries` returns an array of key/value pairs.
2. use array methods on the returned array.
3. use `Object.fromEntries` turns the resulting array back into an object

