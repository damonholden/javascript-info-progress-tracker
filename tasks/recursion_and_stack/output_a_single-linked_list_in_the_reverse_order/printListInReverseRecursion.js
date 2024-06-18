// The recursive logic here is a little bit tricky to wrap your head around.

export function printListInReverseRecursion(linkedList) {
    if (linkedList.next) {
        printListInReverseRecursion(linkedList.next);
    }

    console.log(linkedList.value);
}
