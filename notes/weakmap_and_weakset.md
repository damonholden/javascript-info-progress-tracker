# WeakMap and WeakSet

Unlike traditional objects, objects referenced in the WeakMap and WeakSet data structures do not get accounted for when objects are garbage collected. If the only reference to an object is in a WeakMap or a WeakSet, then it will be garbage collected.

## WeakMap

The `WeakMap` data structure is very similar to a `Map`. The difference is a `WeakMap`'s key must be an object. This means a `WeakMap` allows objects to have values attached to them in a data structure where the keyed objects are not considered when garbage collected.This could be useful for the following cases:

- Caching - where an objects being passed into a function can have its return value cached, and the caching will not impact garbage collection.
- additional data - where an object which cannot be mutated needs additional data attached to it during its lifecycle.

A `WeakMap` cannot be iterated over due to the uncertain nature of their contents.

## WeakSet

Similarly to a `WeakMap`, a `WeakSet` can only have objects as values. an entry exists as long as it is reachable from somewhere else.

A `WeakSet` is used as a true/false reference for objects. For example it can be used to keep track of what users are on a server.

There is also no iteration on `WeakSet`.
