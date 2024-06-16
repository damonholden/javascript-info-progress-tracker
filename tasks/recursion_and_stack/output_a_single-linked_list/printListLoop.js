// Important to note that while this solution does work, it can be an issue if you reasign linkedList and want to do something else with it in the function later expecting to be dealing with the original parameter the function was called with. 

export function printListLoop(linkedList) {
    while (linkedList) {
        console.log(linkedList.value)
        linkedList = linkedList.next
    }
}