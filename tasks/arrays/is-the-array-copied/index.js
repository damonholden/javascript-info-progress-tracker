// The following code will result in the browser alerting `4`. This is because
// while `'banana'` is pushed to the array that`shoppingCart` references, it has
// the same reference as `fruits`, so the push operation was executed against
// the array that **both** `fruits` and`shoppingCart` reference.

let fruits = ['apple', 'pair', 'orange'];

let shoppingCart = fruits;
shoppingCart.push('banana');

alert(fruits.length);
