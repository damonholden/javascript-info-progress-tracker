// implementation here is pretty bad. Though the code reads like it should be random, the sorting algorithm has issues which mean each element is not sorted with the same probability

export function shuffle(array) {
	array.sort(() => {
		return Math.random() - 0.5;
	});
}

const tracker = {
	oneTwoThree: 0,
	oneThreeTwo: 0,
	twoOneThree: 0,
	twoThreeOne: 0,
	threeOneTwo: 0,
	threeTwoOne: 0,
};

for (let i = 0; i < 1000; i++) {
	let arr = [1, 2, 3];

	shuffle(arr);

	if (arr[0] === 1 && arr[1] === 2 && arr[2] === 3) {
		tracker.oneTwoThree++;
	}
	if (arr[0] === 1 && arr[1] === 3 && arr[2] === 2) {
		tracker.oneThreeTwo++;
	}
	if (arr[0] === 2 && arr[1] === 1 && arr[2] === 3) {
		tracker.twoOneThree++;
	}
	if (arr[0] === 2 && arr[1] === 3 && arr[2] === 1) {
		tracker.twoThreeOne++;
	}
	if (arr[0] === 3 && arr[1] === 1 && arr[2] === 2) {
		tracker.threeOneTwo++;
	}
	if (arr[0] === 3 && arr[1] === 2 && arr[2] === 1) {
		tracker.threeTwoOne++;
	}
}

console.log(tracker);