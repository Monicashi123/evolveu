import Node from './Node'

test('Test Node', () => {
    console.log('Testing creating new node');
    const newNode = new Node('apple', 1, null, null);

    console.log("newNode", newNode)

    //test show
   expect(newNode.show()).toBe('apple 1');

   console.log('newNode',newNode.show());

   
   const newNode1 = new Node('orange', 2, null, 'apple');

   expect(newNode1.show()).toBe('orange 2');

   console.log('newNode1', newNode1.show());


   const newNode2 = new Node('grape', 3, null, 'orange');

   expect(newNode2.show()).toBe('grape 3');
  
   console.log('newNode2',newNode2.show());

});

