# Map and Set notes

Maps and Sets are more complex data structures than more commonly used ones like Objects and Arrays.

## Map

a `Map` is very similar to a plain JavaScript object except that Map keys can be of any value, not just strings.

The `set` and `get` methods of `Map` should be used as opposed to the typical `obj[key]` syntax used for objects, as the later has the limitation of only being able to use string values.

To test keys for equality, Maps use the SameValueZero algorithm, which is basically the same as strict equality (`===`), except that `NaN` is considered equal to `NaN` in SameValueZero.

All `Map` methods return the map itself, so further methods can be chained.

Maps can be iterated over with the following methods:

- map.keys() - returns an iterable for keys,
- map.values() - returns an iterable for values,
- map.entries() - returns an iterable for entries [key, value], it's used by default in for..of.

Iteration is in the same order as the values were inserted.

Maps can be created from another object using the `Object.entries` method, which returns an array of key/value pair arrays which can be used by the `Map` constructor.

`Object.fromEntries` can be used to generate a plain object from a `Map` by passing the `Map.entries` method into it.

## Set

A `Set` is like an `Array`, but values may appear only once.

A `Set` is much better suited for maintaining lists of unique entries as the data structure is optimised to handle this. Attempting to do the same thing with an array is possible but would likely be less readable and less performant.
