import Node from './Node'
import LinkedList from './LinkedList'

test('Test LinkedList', () => {
	
    var newLinkedList = new LinkedList();
    expect(newLinkedList.head.amount).toBe(0);

	newLinkedList.insert('A',1);
    expect(newLinkedList.current.subject).toEqual('A');
	expect(newLinkedList.current.amount).toEqual(1);
	expect(newLinkedList.current.previous.subject).toEqual('')
	expect(newLinkedList.current.next.subject).toEqual('');

	newLinkedList.insert('B',2)
    expect(newLinkedList.current.subject).toEqual('B')
	expect(newLinkedList.current.amount).toEqual(2)
	expect(newLinkedList.current.previous.subject).toEqual('A')
	expect(newLinkedList.current.next.subject).toEqual('')


	newLinkedList.insert('C',3)
    expect(newLinkedList.current.subject).toEqual('C')
	expect(newLinkedList.current.amount).toEqual(3)
	expect(newLinkedList.head.amount).toEqual(0)
	
	// console.log(newLinkedList)

	// console.log('Testing the firstPosition method')
	newLinkedList.jumpToHead();
	expect(newLinkedList.current.subject).toBe('');
	
	// console.log('Test inserting a new Node between Head and a');
	newLinkedList.insert('D', 4);
	expect(newLinkedList.current.amount).toBe(4);
	// console.log('add D',newLinkedList)

	// console.log('Testing the nextPosition method');

	newLinkedList.moveToNext()
	expect(newLinkedList.current.subject).toBe("A")

	// console.log('moveForward')
	newLinkedList.movePrevious()
	expect(newLinkedList.current.subject).toEqual('D')

	// console.log(newLinkedList);

	newLinkedList.jumpToHead()
	expect(newLinkedList.head.subject).toEqual("")

    newLinkedList.jumpToTail()
	expect(newLinkedList.jumpToTail().subject).toEqual("")

	// console.log('moveForward')
	newLinkedList.movePrevious()
	expect(newLinkedList.current.subject).toEqual('C')

	// console.log('Testing the deleteNode method');

	newLinkedList.delete();
	expect(newLinkedList.current.subject).toBe('B');
	// console.log(newLinkedList);

})