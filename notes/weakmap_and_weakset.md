# WeakMap and WeakSet

Unlike traditional objects, objects referenced in the WeakMap and WeakSet data structures do not get accounted for when objects are garbage collected. If the only reference to an object is in a WeakMap or a WeakSet, then it will be garbage collected.

## WeakMap

The `WeakMap` data structure is very similar
