# Date and Time notes

`Date` is another built-in object in JavaScript that is used to store date and time values and provides methods to manage those values. 

## Creation

a `Date` object is created by instantiating the `Date` class:

```
const now = new Date()
```

a date object can also be instantiated with a preset date by passing a number in the constructor that represents an amount of miliseconds from Jan 1st 1970 UTC+0 (epoch).

negative numbers passed in go backwards from the epoch date.

a string can also passed in to the class constructor and it is parsed using the same algorithim as `Date.parse`:

```
const date = new Date("2017-01-26");
```

Instantiations with multiple arguments will be parsed using the following pattern:

```
new Date(year, month, date, hours, minutes, seconds, ms)
```

- The year should have 4 digits. For compatibility, 2 digits are also accepted and considered 19xx, e.g. 98 is the same as 1998 here, but always using 4 digits is strongly encouraged.
- The month count starts with 0 (Jan), up to 11 (Dec).
- The date parameter is actually the day of month, if absent then 1 is assumed.
- If hours/minutes/seconds/ms is absent, they are assumed to be equal 0.

The Maximal precision for a date is 1ms.

## Access date components

There are various methods that exist to get different parts of a date:

- `getFullYear()` - some engineers implement a custom `getYear`, which has been deprecated.
- `getMonth()`
- `getDate()`
- `getHours()`
- `getMinutes()`
- `getSeconds()`
- `getMilliseconds()`
- `getDay()`

There are also UTC alternatives, that follow the same pattern as above, but with "UTC" after "get".

There are also two "special" methods:

- `getTime()` - Returns the epoch time for the date. 
- `getTimezoneOffset()` - returns difference beween UTC and local timezone in minutes.

## Setting Date Component

The following methods allow setting individual parts of a Date object:

- `setFullYear(year, [month], [date])`
- `setMonth(month, [date])`
- `setDate(date)`
- `setHours(hour, [min], [sec], [ms])`
- `setMinutes(min, [sec], [ms])`
- `setSeconds(sec, [ms])`
- `setMilliseconds(ms)`
- `setTime(milliseconds)` (sets the whole date by milliseconds since 01.01.1970 UTC (epoch))

Every method above, other than `setTime` has a UTC varient.

Any component not part of one of these methods; parameters will not be modified.

