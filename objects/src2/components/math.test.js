import math from "./math";
test('Test the math functions', ()=> {
	console.log('Hello World');
	expect(math.sum(1,2)).toBe(3);
});
test('Test the math functions', ()=> {
	// console.log('Result is');
	expect(math.min(1,2)).toBe(-1);
	console.log('Result is',math.min(1,2));
});
test('Test the math functions', ()=> {
	console.log('Result is',);
	expect(math.multi(1,2)).toBe(2);
});
test('Test the math functions', ()=> {
	console.log('Result is');
	expect(math.div(1,2)).toBe(0.5);
});