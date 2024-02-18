# Notes on Iterables

Iterables in javascript are a mechanism of objects that allow them to be passed into iteration based constructs - such as the `for..of` loop.

Arrays and Strings are iterable by default.

## Symbol.iterator

`Symbol.iterator` is a method that can be added to objects in order to make them iterable.

The requirements of this method are:

1. When for..of starts, it calls that method once (or errors if not found). The method must return an iterator - an object with the method next.
2. Onward, for..of works only with that returned object.
3. When for..of wants the next value, it calls next() on that object.
4. The result of next() must have the form {done: Boolean, value: any}, where done=true means that the loop is finished, otherwise value is the next value.

## Link

[Iterables](https://javascript.info/iterable)
