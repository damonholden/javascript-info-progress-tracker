// Here, the invocation of `func` will result in a reference error because `x` was used before it was declared. This is because the function will use the `x` variable declared in it's own lexical environment.

let x = 1;

function func() {
    console.log(x); // ?

    let x = 2;
}
