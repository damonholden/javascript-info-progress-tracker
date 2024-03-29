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
- `getTimezoneOffset()` - returns difference between UTC and local timezone in minutes.

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

Every method above, other than `setTime` has a UTC variant.

Any component not part of one of these methods; parameters will not be modified.

## Autocorrection

`Date` objects have a autocorrection feature where out-of-range component values will be handled automatically. For example:

```
new Date(2013, 0, 32); // 1st Feb 2013
```

This can also be used to get a date or time in the future or past in a readable way:

```
const date = new Date();
date.setSeconds(date.getSeconds() + 70);
```

## Date to number, date diff

a `Date` object converted to a number becomes an epoch timestamp, the same behaviour as `date.getTime()`.

This behaviour allows  `Date`objects to be used in mathematical operators:

```
const startTimeMeasurement = new Date();

for (let i = 0; i < 100000; i++) {
  doSomething(i * i * i)
}

const endTimeMeasurement = new Date();

alert( `The loop took ${endTimeMeasurement - startTimeMeasurement} ms` );
```

## Date.now()

If all you want is to get the current epoch timestamp, you can simply use the `now` method on the `Date` class in order to get this, without the need to instantiate the class:

```
Date.now() // equivalent to `new Date().getTime()`
```

Not only is this method of getting the epoch timestamp simpler, but its also faster and reduces intensity on the garbage collector.

## Date.parse from a string

`Date.parse()` can return an epoch timestamp when passed a valid date string where `YYYY-MM-DDTHH:mm:ss.sssZ`:

- `YYYY-MM-DD` – is the date: year-month-day.
- The character `T` is used as the delimiter.
- `HH:mm:ss.sss` – is the time: hours, minutes, seconds and milliseconds.
- The optional `Z` part denotes the time zone in the format +-hh:mm. A single letter Z would mean UTC+0.

Shorter variants can also be provided, like `YYYY-MM-DD`, `YYYY-MM`, `YYYY`.

`Date.parse()` returns `NaN` if the date is invalid.

## Microseconds

JavaScripts `Date` class can only be accurate to the millisecond, if accuracy is needed to the microsecond - JavaScript environments typically provide an API that provides that. Browsers have `performance.now()`, that gives the amount of milliseconds from page load, and Node.js provides the `microtime` module. Just remember, microseconds are not part of `Date`.