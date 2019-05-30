import FIFO from './FIFO'

test('Testing the FIFO ', () => {
    console.log("Testing for constructor");
    const ll =  new FIFO();
    expect(ll.arr.length).toBe(0);
    
    console.log("Testing for Insert method");
    ll.insert("a");
    expect(ll.arr.length).toBe(1);
       ll.insert("b");
    expect(ll.arr.length).toBe(2);
    ll.insert("c");
    expect(ll.arr.length).toBe(3);
    ll.insert("d");
    expect(ll.arr.length).toBe(4);

    console.log("Testing for delet function");
    ll.delF();
    expect(ll.arr.length).toBe(3);

    console.log("Testing for delet LIFO function");
    ll.delO();
    expect(ll.arr.length).toBe(2);

    ll.insert("e");
    expect(ll.arr.length).toBe(3);

});