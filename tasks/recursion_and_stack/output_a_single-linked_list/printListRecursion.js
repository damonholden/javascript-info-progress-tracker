export function printListRecursion(linkedList) {
	console.log(linkedList.value);

	if (linkedList.next) {
		printListRecursion(linkedList.next);
	}
}
