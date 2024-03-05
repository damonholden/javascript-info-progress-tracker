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








