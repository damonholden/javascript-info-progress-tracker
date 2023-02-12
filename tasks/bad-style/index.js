// The following code snippet could be seen to have code style issues:

{
	function pow(x,n)
	{
		let result=1;
		for(let i=0;i<n;i++) {result*=x;}
		return result;
	}

	let x=prompt("x?",''), n=prompt("n?",'')
	if (n<=0)
	{
		alert(`Power ${n} is not supported, please enter an integer number greater than zero`);
	}
	else
	{
		alert(pow(x,n))
	}
}

// the following code snippet is a revised version of the above code snippet:

{
	function pow(x, n) {
		let result = 1;

		for (let i = 0; i < n; i++) {
			result *= n;
		}

		return result;
	}

	let x = prompt('x?');
	let n = prompt('n?');

	if (n <= 0) {
		alert(
			`Power ${n} is not supported, please enter an integer number greater than zero`,
		);
	} else {
		alert(pow(x, n));
	}
}

// Some points:
// - Space between function arguments (`pow(x, n)`).
// - Opening figure bracket on the same line (`for (let i = 0; i < n; i++) {`,
//   `function pow(x, n) {`, etc).
// - Spaces between operators (`result = 1`).
// - No single line for loops or if statements.
// - Variable declarations on separate lines (no `let x=prompt("x?",''),
//   n=prompt("n?",'')`).
// - Long lines are split into multiple:
// 		```
//    alert(
//     `Power ${n} is not supported, please enter an integer number greater than zero`,
//    );
// 		```
//  - Else clause on single line (`} else {`).