'use strict';

// The result of the following code will be an alert containing 3. This is
// because the AND operator has a higher precedence than OR, so the left
// operand, 2, evaluates truthy, the right operand evaluates truthy and is
// returned. The first OR operator evaluates the left operand, null, which is
// falsy, then the right operand, 3, which is truthy. This short circuits the OR
// chain and resolves it ro the alert function and alerts 3.

alert(null || (2 && 3) || 4);
