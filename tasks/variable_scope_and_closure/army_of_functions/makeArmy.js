// This code correctly outputs a unique `i` value that matches the iteration for each shooter function definition because in a for loop, incremented variables within the for loop are defined for each iterations lexical scope.

export function makeArmy() {
    const shooters = [];

    let i = 0;
    for (let i = 0; i < 10; i++) {
        const shooterNumber = i;
        function shooter() {
            alert(shooterNumber);
        }

        shooters.push(shooter);
    }

    return shooters;
}
