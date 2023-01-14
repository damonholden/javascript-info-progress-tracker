'use strict';

// The result of the following code will be two alerts:
// - The first will alert 1.
// - The second will alert undefined.

// This is because the outer alert function is invoked, which then evaluates the
// AND condition. The first operand is an alert which is invoked and alerts 1,
// then the function returns undefined. The AND chain short circuits, returning
// undefined and resolving the outer alerts parameter and alerting undefined.

alert(alert(1) && alert(2));
