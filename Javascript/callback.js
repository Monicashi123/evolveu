// console.log("Callback function")
// function mySandwich(param1, param2, callback) {  
//     alert('Started eating my sandwich.\n\nIt has: ' + param1 + ', ' + param2);  
//     if (callback && typeof(callback) === "function") {  
//         callback();  
//     }  
// }  
  
// mySandwich('ham', 'cheese', 'vegetables');  



// function mySandwich(param1, param2, callback) {  
//     alert('Started eating my sandwich.\n\nIt has: ' + param1 + ', ' + param2);  
    
//     $('#sandwich').animate({  
//         opacity: 0  
//     }, 5000, function() {  
//         // Animation complete.  
//     });  
    
//     if (callback && typeof(callback) === "function") {  
//         callback();  
//     }  
// }  
  
// mySandwich('ham', 'cheese', function() {   
//     alert('Finished eating my sandwich.');  
// });  

 // function myCallBackFunction( )
// const test=["a","b","c"];
 
// forEach(function(a,b,c){console.log(a,b,c)})
//  


// function myCallbackFunction(ar,fun) {
// 	console.log("in myCallbackFunction");
// }
// function myWorkerFunction(p1){
// 	console.log("in myWorkerFunction");
// }

// myCallbackFunction();
// myWorkerFunction('asdf');
const data = {
	staff: [
		{fname:"Jane", lname:"Smith", balance:10},
		{fname:"Liam", lname:"Henry", balance:1000},
		{fname:"Emma", lname:"Jones", balance:1330},
		{fname:"Olivia", lname:"Notly", balance:310},
		{fname:"Noah", lname:"Ho", balance:503},
		{fname:"William", lname:"Lee", balance:520},
		{fname:"Benjamin", lname:"Amis", balance:150},
	],
	company: "EvolveU",
	city: "Calgary",
	prov: "Alberta"
};


function myCallBackFunction(ar,func){
	console.log("inin myWorkerFunction") ;
	console.log("ar -->,ar");
	console.log("func -->,func");
	for(let i=0;i<ar.length;i++){
		console.log('==>',ar[i]);
	}
}

function myWorkerFunction(p1){
	console.log("in myWorkerFunction", p1);
}
 myCallBackFunction(data.staff, myWorkerFunction);