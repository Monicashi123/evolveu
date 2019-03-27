console.log("Hello from exercises");
const array1 = [1,3];
function orderArray (xyz){
console.log("in orderArray", xyz);
return (xyz[0] < xyz[1]) ? [xyz[0],xyz[1]] : [xyz[1],xyz[0]];
}
console.log("Should Be: 1, 3:", 
	orderArray(array1));

console.log("Should Be: 1, 5:", 

	orderArray([1, 5]));

console.log("Should Be: 10, 20:", 
	orderArray([20, 10]));

//=========================================

// 

