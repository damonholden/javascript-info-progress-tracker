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
    2. `space` - either a number or a string. If a number - it will be the amount of spaces used for each indentation in the JSON. If a string - it will be prepended to each indented line in the JSON output. The `space` parameter should not be used if the stringified JSON is being sent over the network, and should only be used for logging/visual purposes.

## Custom "toJSON" method

-   when `JSON.stringify` is called, it calls the passed in values `toJSON` method.
-   just like `toString`, any object can have its own custom `toJSON` method that customises the output of `JSON.stringify`.

## JSON.parse

-   `JSON.parse(str[, reviver])`:
    -   `str` - the JSON-string to be decoded
    -   `reviver` - an optional function that will be called for each key/value pair for transforming the value. This can be useful when you want to turn some parts of the parsed JSON to more complex data types (like a `Date` object for a parsed date string).
-   used for decoding JSON-strings

## JSON standard

-   the rule-set for JSON can be found here - https://www.json.org/json-en.html.
-   There are other formats that expand on JSON to add extra functionality but they are standalone libraries.
-   JSON is strict to allow for simplicity and easy parsing
