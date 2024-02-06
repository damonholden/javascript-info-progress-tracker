# Notes on Array methods

## Cheat sheat

### To add/remove elements

- push(...items) - adds items to the end,
- pop() - extracts an item from the end,
- shift() - extracts an item from the beginning,
- unshift(...items) - adds items to the beginning.
- splice(pos, deleteCount, ...items) - at index pos deletes deleteCount elements and inserts items.
- slice(start, end) - creates a new array, copies elements from index start till end (not inclusive) into it.
- concat(...items) - returns a new array: copies all members of the current one and adds items to it. If any ofitems is
  an array, then its elements are taken.

### To search among elements

- indexOf/lastIndexOf(item, pos) - look for item starting from position pos, return the index or -1 if not found.
- includes(value) - returns true if the array has value, otherwise false.
- find/filter(func) - filter elements through the function, return first/all values that make it return true.
- findIndex is like find, but returns the index instead of a value.

### To iterate over elements

- forEach(func) - calls func for every element, does not return anything.

### To transform the array

- map(func) - creates a new array from results of calling func for every element.
- sort(func) - sorts the array in-place, then returns it.
- reverse() - reverses the array in-place, then returns it.
- split/join - convert a string to array and back.
- reduce/reduceRight(func, initial) - calculate a single value over the array by calling func for each element and
  passing an intermediate result between the calls.

### Additionally

- Array.isArray(value) checks value for being an array, if so returns true, otherwise false.
  Please note that methods sort, reverse and splice modify the array itself.

- arr.some(fn)/arr.every(fn) check the array for an element or all elements matching a condition.
- We can use every to compare arrays:

  function arraysEqual(arr1, arr2) {
  return arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index]);
  }

- arr.fill(value, start, end) - fills the array with repeating value from index start to end.
- arr.copyWithin(target, start, end) - copies its elements from position start till position end into itself, at
  position target (overwrites existing).
- arr.flat(depth)/arr.flatMap(fn) create a new flat array from a multidimensional array.

## Notes

- Array methods exist in javascript for common operations on Arrays.

### Add/remove items

- `push`, `pop`, `shift`, `unshift` are all methods for adding/removing array items in different ways. All either
  add/remove an item from beginning/end of the array in some combination.
- `splice` is used to remove none, one or more elements starting from a specific position in the array and optionally
  insert elements from the same index.
- `splice` as well as other array methods accept negative indexes.
- the `delete` keyword shouldn't be used on array elements as it will leave behind `undefined`
- `slice` (not to be confused with `splice`) takes a segment of a provided array and return those elements as a new
  array.
- `slice` does not mutate the provided array.
- `concat` combines arrays and values into one single array.
- Whether or not `concat` extracts elements from a passed in object into the new array depends on if the object has
  the `[Symbol.isConcatSpreadable]: true` property.

### Iteration

- `forEach` loops over elements in an array which can then have a function ran on each of them.
- The `for... of` imperative construct is more appropriate for pure iteration.
- `forEach` should only be used at the end of a lengthy array method chain.

### Searching

- `indexOf`, `lastIndexOf` are useful for identifying the index of an element and can be used in combination to identify
  duplication.
- `indexOf`, `lastIndexOf` use strict equality.
- `includes` is a useful boolean check for a value in an array.
- key difference between `indexOf`/`lastIndexOf`, and `includes` is that includes handles `NaN` correctly.
- `find`, `findIndex`, `findLastIndex` are useful for finding an element of an array based on some complex search
  criteria.
- `filter` is useful for finding all the elements in an array that meet some criteria.

### Transform

- `map` is a useful method that takes the array, loops over it, runs a function against each element and returns the end
  result in a new array.
- `sort` reorders an array based on a function ran against each element.
- `sort` converts array items to strings by default.
- If elements are strings, `String.localeCompare` should be used to ensure correct sorting in elements with multiple
  alphabets.
- `reverse` simply returns a reversed version of an array.
- `split` and `join` are useful for converting arrays into strings and viceversa.
- `reduce` and `reduceRight` can reduce arrays to a single value.
- `reduceRight` does the same thing as `reduce` but goes from right to left.

### Type checking

- Arrays are just objects so `typeof` is not useful to ensure that a value is an array.
- the `Array.isArray` array method is used to check if a value is an array.

### thisArg

- all array methods other than `sort` have an optional second parameter (`thisArg`).
- `thisArg` is used to provide the context of `this` for the callback function.
- best to avoid this as complex mental model.

## Link

- <https://javascript.info/array-methods>
