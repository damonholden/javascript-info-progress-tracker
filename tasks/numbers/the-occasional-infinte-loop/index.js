// The following code snippet is an infinite loop:

let i = 0;
while (i != 10) {
	i += 0.2;
	console.log(i);
}

// The reason for the infinite loop is because of the numeric inaccuracies
// inherent to the iEEE double floating point standard that JavaScript uses for
// numbers. Logging each input until the first goes over 10 it goes:

// - 0.2
// - 0.4
// - 0.6000000000000001
// - 0.8
// - 1
// - 1.2
// - 1.4
// - 1.5999999999999999
// - 1.7999999999999998
// - 1.9999999999999998
// - 2.1999999999999997
// - 2.4
// - 2.6
// - 2.8000000000000003
// - 3.0000000000000004
// - 3.2000000000000006
// - 3.400000000000001
// - 3.600000000000001
// - 3.800000000000001
// - 4.000000000000001
// - 4.200000000000001
// - 4.400000000000001
// - 4.600000000000001
// - 4.800000000000002
// - 5.000000000000002
// - 5.200000000000002
// - 5.400000000000002
// - 5.600000000000002
// - 5.8000000000000025
// - 6.000000000000003
// - 6.200000000000003
// - 6.400000000000003
// - 6.600000000000003
// - 6.800000000000003
// - 7.0000000000000036
// - 7.200000000000004
// - 7.400000000000004
// - 7.600000000000004
// - 7.800000000000004
// - 8.000000000000004
// - 8.200000000000003
// - 8.400000000000002
// - 8.600000000000001
// - 8.8
// - 9
// - 9.2
// - 9.399999999999999
// - 9.599999999999998
// - 9.799999999999997
// - 9.999999999999996
// - 10.199999999999996

// As we can see, there is never a pont where `i` will equal 10 as imprecisions
// eventually add up to th point that 10 is missed.

// The takeaway here is to avoid equality checks when working with fractions.
