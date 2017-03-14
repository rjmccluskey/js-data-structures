const LinkedList = require('../linked-list');

// Create a function that can remove duplicates from an unsorted linked list

function removeDuplicates(linkedList) {
    let currentNode = linkedList.head;
    let lastNode;
    const lookup = {};
    while (currentNode) {
        const nextNode = currentNode.next;
        const lookupKey = JSON.stringify(currentNode.data); 
        if (lookup[lookupKey]) {
            lastNode.next = nextNode;
        } else {
            lookup[lookupKey] = true;
            lastNode = currentNode;
        }
        currentNode = nextNode;
    }
}

describe('function removeDuplicates', () => {
    it('works with a typical list', () => {
        const linkedList = new LinkedList('a', null, 3, 'a', null, undefined);
        removeDuplicates(linkedList);

        const expectedList = [undefined, null, 'a', 3];
        let callbackWasCalled = false;
        linkedList.forEach((item, index) => {
            expect(item).toEqual(expectedList[index]);
            callbackWasCalled = true;
        });
        expect(callbackWasCalled).toEqual(true);
    });

    it('works with an empty list', () => {
        const linkedList = new LinkedList();
        let error;
        try {
            removeDuplicates(linkedList)
        } catch (e) {
            error = e;
        }
        expect(error).toBeUndefined();
    });

    it('works with non primitive data in list', () => {
        const obj1 = {a: 1};
        const obj2 = {b: 2};
        const linkedList = new LinkedList(obj1, obj1, obj2);
        removeDuplicates(linkedList);
        expect(linkedList.peak()).toEqual(obj2);
        expect(linkedList.head.next.data).toEqual(obj1);
        expect(linkedList.head.next.next).toBeUndefined();
    });
});