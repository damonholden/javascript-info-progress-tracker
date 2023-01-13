// The following code will result in two alerts:
// - alert(1)
// - alert(2)

alert(alert(1) || 2 || alert(3));

// This is because the first OR operator evaluates the left operand as falsy as
// the alert function returns undefined. Then the second operand (2) is
// evaluated which evaluates truthy, which short circuits the OR chain and returns
// 2 to the outer alert.
