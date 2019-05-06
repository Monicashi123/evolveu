import Account from './account.js';

test ('Test Account Class',()=> {
	// console.log('Test the class Constructor');
	let x = new Account(25, 'Savings');

	// expect(x.balc).toBe(25);
	// expect(x.accname).toBe('Savings');

	// console.log('Testing the check method');

	console.log("Test check", x.check());
	expect(x.check()).toBe(25);

	// x.deposit(10);
	expect(x.deposit(10)).toBe(35);
	console.log("test deposit")

	// x.withDraw(30);
	expect(x.withDraw(30)).toBe(5);
	console.log("test withdraw")

 });







