# Destructuring Assignment Notes

destructuring allows developers to "unpack" values from Arrays or Objects into variables.

Really useful when dealing with functions and methods that return Arrays or Objects you only want a couple values from - `let [firstName, surname] = "John Smith".split(' ');`.

Destructuring does not modify the source object.

Extra commas can be used to ignore values from arrays - `let [firstName, , title] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];`.

Array destructuring can also be used on any iterable:

```
let [a, b, c] = "abc"; // ["a", "b", "c"]
let [one, two, three] = new Set([1, 2, 3]);
```
You can also assign to any "assignable" on the left side of the operation:

```
[user.name, user.surname] = "John Smith".split(' ');
```

Destructuring is also pretty useful in for loops: 

```
let user = {
  name: "John",
  age: 30
};

// loop over the keys-and-values
for (let [key, value] of Object.entries(user)) {
  alert(`${key}:${value}`); // name:John, then age:30
}
```

Array destructuring is also useful for swapping variables:

```
let guest = "Jane";
let admin = "Pete";

// Let's swap the values: make guest=Pete, admin=Jane
[guest, admin] = [admin, guest];

alert(`${guest} ${admin}`); // Pete Jane (successfully swapped!)
```

Any values of an Array unaccounted for can be collected using the `...` syntax - `let [name1, name2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];`

Any abscent values are undefined:

```
// default values
let [firstName, surname] = [];

alert(firstName); // undefined
alert(surname); // undefined
```

To address missing values, default values can be used:

```
// default values
let [name = "Guest", surname = "Anonymous"] = ["Julius"];

alert(name);    // Julius (from array)
alert(surname); // Anonymous (default used)
```

Default values can even be function calls or more complex expressions and they are only evaluated if the destructured value is missing.

Object destructuring has to match the property name and can be in any order:

```
let {height, width, title} = { title: "Menu", height: 200, width: 100 }
```

Mapping propeties to new variable names can be done:

```
let options = {
  title: "Menu",
  width: 100,
  height: 200
};

// { sourceProperty: targetVariable }
let {width: w, height: h, title} = options;

// width -> w
// height -> h
// title -> title

alert(title);  // Menu
alert(w);      // 100
alert(h);      // 200
```

Default values are also available for object destructuring and can be combined with the mapping syntax:

```
let options = {
  title: "Menu"
};

let {width: w = 100, height: h = 200, title} = options;

alert(title);  // Menu
alert(w);      // 100
alert(h);      // 200
```

The `...rest` syntax is also available for object destructuring and the result is effectively a shallow copy of the remaining properties.

To reassign variables with destructuring, we need to wrap the destructuring in `(...)`, otherwise JavaScript will think the destrucuting is actually anonymous scope:

```
let title, width, height;

({title, width, height} = {title: "Menu", width: 200, height: 100});

alert( title ); // Menu
```

Nested destructuring is possible if the object thats being destructured have objects or arrays as values:

```
let options = {
  size: {
    width: 100,
    height: 200
  },
  items: ["Cake", "Donut"],
  extra: true
};

// destructuring assignment split in multiple lines for clarity
let {
  size: { // put size here
    width,
    height
  },
  items: [item1, item2], // assign items here
  title = "Menu" // not present in the object (default value is used)
} = options;

alert(title);  // Menu
alert(width);  // 100
alert(height); // 200
alert(item1);  // Cake
alert(item2);  // Donut
```

## Smart function parameters 

There are two issues with normal function parameters:

1. large amouts of optional parameters can result in ugly call signatures - `showMenu("My Menu", undefined, undefined, ["Item1", "Item2"])`.
2. parameter order matters, so bugs can arise if arguments are passed the wrong way.

Destructuring can be used to address the above problems by always passing an object into the function and have it imedietly destructured:

```
let options = {
  title: "My menu",
  items: ["Item1", "Item2"]
};

// ...and it immediately expands it to variables
function showMenu({title = "Untitled", width = 200, height = 100, items = []}) {
  // title, items – taken from options,
  // width, height – defaults used
  alert( `${title} ${width} ${height}` ); // My Menu 200 100
  alert( items ); // Item1, Item2
}

showMenu(options);
```

This usage also has full support for the destructuring syntax. so default values and mapping can be used:

```
let options = {
  title: "My menu",
  items: ["Item1", "Item2"]
};

function showMenu({
  title = "Untitled",
  width: w = 100,  // width goes to w
  height: h = 200, // height goes to h
  items: [item1, item2] // items first element goes to item1, second to item2
}) {
  alert( `${title} ${w} ${h}` ); // My Menu 100 200
  alert( item1 ); // Item1
  alert( item2 ); // Item2
}

showMenu(options);
```

One gotcha with this is an object must be passed into the function every time, even when there are no parameters:

```
showMenu({}); // ok, all values are default

showMenu(); // this would give an error
```


This can be fixed by making the empty object the default value of the destructuring syntax:

```
function showMenu({ title = "Menu", width = 100, height = 200 } = {}) {
  alert( `${title} ${width} ${height}` );
}

showMenu(); // Menu 100 200
```












