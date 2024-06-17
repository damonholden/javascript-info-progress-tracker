// As there is no way to traverse backwards in the linkedList, the values will need to be remembered in a list then reversed

export function printListInReverseLoop(linkedList) {
    const linkedListValues = [];

    while (linkedList) {
        linkedListValues.push(linkedList.value);
        linkedList = linkedList.next;
    }

    linkedListValues.reverse();

    for (const val of linkedListValues) {
        console.log(val);
    }
}
