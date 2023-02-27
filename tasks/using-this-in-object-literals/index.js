{
	function makeUser() {
		return {
			name: 'John',
			ref: this,
		};
	}

	let user = makeUser();

	alert(user.ref.name);
}

// The result of the `alert` invocation in the previous snippet will be an error
// as the `ref` property of user wil be undefined and trying to access a
// property of undefined is an error in JavaScript. The error occurs because
// `this` is evaluated in the context of the function and not in the `user`
// object.

// This could be resolved by converting `ref` to a method that returns `this`:

{
	{
		function makeUser() {
			return {
				name: 'John',
				ref() {
					return this;
				},
			};
		}

		let user = makeUser();

		alert(user.ref().name);
	}
}
