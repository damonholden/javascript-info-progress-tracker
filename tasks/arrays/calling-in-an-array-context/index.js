// The result of the following code would be the contents of the array `arr` in
// the typical `toString` form - so `'a,b,function(){...}'`. This is because a
// function declaration is appended to the `arr` array, which is executed by
// getting the function definition with `arr[2]` and then invoking it with `()`.

let arr = ['a', 'b'];

arr.push(function () {
	alert(this);
});

arr[2]();
