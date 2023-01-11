// What will be the result for these expressions?

// my answers:

5 > 4; // true
'apple' > 'pineapple'; //false
'2' > '12'; // true
undefined == null; // true
undefined === null; // false
null == '\n0\n'; // false
null === +'\n0\n'; // true

// correct answers:

5 > 4; // true
'apple' > 'pineapple'; //false
'2' > '12'; // true
undefined == null; // true
undefined === null; // false
null == '\n0\n'; // false
null === +'\n0\n'; //! false

// Need to make sure I notice strict equality.
