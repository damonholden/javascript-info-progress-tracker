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
-   `JSON.stringify` will skip and not include the following property types of an object, as JSON is a data-only language:
    -   Function properties (methods).
    -   Symbolic keys and values.
    -   Properties that store undefined.
-   `JSON.stringify` will handle nested objects automatically.
-   important limitation - `JSON.stringify` can't handle circular references
-   `JSON.stringify` has a second and third optional parameter:
    1. `replacer` - either a mapping function that alters the stringify process, or an array of properties that should be included in the output from the value passed in as the first parameter. The mapping function could be used for filtering or formatting.
    2. `space` - either a number or a string. If a number - it will be the amount of spaces used for each indentation in the JSON. If a string - it will be prepended to each indented line in the JSON output.
