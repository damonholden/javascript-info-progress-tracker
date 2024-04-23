# notes on JSON methods, toJSON

## JSON.stringify
-   `JSON.stringify` can be used to turn a complex object into a string, which is useful for sending over a network or outputting to a log.
-   `jSON.stringify` supports the following data types:
    -   Objects { ... }
    -   Arrays [ ... ]
    -   Primitives:
    -   strings,
    -   numbers,
    -   boolean values true/false,
    -   null.
-   `JSON.stringify` will skip and not include the following property types of an object:
    -   Function properties (methods).
    -   Symbolic keys and values.
    -   Properties that store undefined.
	
