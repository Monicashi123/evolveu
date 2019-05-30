import Node from './Node'

class LinkedList {
	constructor() {
		
		this.head = new Node('', 0);
		this.tail = new Node('', 0);
		this.current = this.head;

		this.head.previous = null;
		this.head.next = this.tail;
		this.tail.previous = this.head;
		this.tail.next = null;

	}

		 
	jumpToHead() {	
		this.current = this.head	
		return this.current
	}



	jumpToTail() {
		this.current = this.tail;
		
		return this.current;
	}


	moveToNext() {
		if(this.current.next !== null)						
		 this.current = this.current.next;
		return this.current;
	}

	movePrevious() {

		if (this.current.previous !== null) 				
		 this.current = this.current.previous;
		return this.current;
	}

	
	insert (subject, amount, next, previous) {
	    let newNode = new Node(subject, amount, next, previous);	//create new Node

	    newNode.next = this.current.next;							//connect new Node to current.next
	    this.current.next.previous = newNode;

	    newNode.previous = this.current;							//connect newNode to current node
	    this.current.next = newNode;

	    this.current = newNode;		

	    return this.current
	   								//set current to new Node
	}


	delete() {
		if(this.current !== this.head || this.current !== this.tail) {
			this.current.previous.next = this.current.next;
			this.current.next.previous = this.current.previous;
			this.current = this.current.previous;
		}
		return this.current;
	}

		
}

export default LinkedList;