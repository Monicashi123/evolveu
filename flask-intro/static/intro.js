console.log('Hello World from intro.js');

window.onload = onWindowHasLoaded;

// function onWindowHasLoaded() {
// 	console.log('222 The page has finished loading.');
// }
console.log('hello Canada')
let people;
async function onWindowHasLoaded() {
	console.log('The page has finished loading.');
	let response;
	try {
		response = await fetch('/info');
		if (response.status != 200)
			throw 'Invalid HTTP Response:' + response.status;
		console.log('Response:', response);
	      const data = await response.text();
	      console.log('Data:', data);
	} catch (error) {
		console.trace();
		console.log('*** We Have nooooooooooand error onWindowHasLoaded:', error);
		console.log('Response:', response);
	}
}


console.log('hello Canada')