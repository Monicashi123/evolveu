/*	
	Write the function that will create this output:

*** the two values are not the same:
    p1--> a
    p2--> b
*** the two values are not the same:
    p1--> 1
    p2--> 2
*** the two values are not the same:
    p1--> 2
    p2--> 2
*/

// Write the function after this comment ---
function assertEquals(p1,p2){
if (p1===p2)
	// return true

console.log("Ok");
else {
	console.log( "the two values are not the same:")
	console.log( "p1-->", p1)
	console.log( "p2-->", p2)
}

}

// and before this comment ---

assertEquals("a","b");
assertEquals("a","a");
assertEquals(1,2);
assertEquals(2,2);
assertEquals("2",2);
assertEquals("This value","This value");

// March 13
/*	
	Write the function to format an email based on an array
*/

// Write the function after this commen

function makeEmailArr(myEmail){
	output=myEmail[0] + "." + myEmail[1] + "@evolveu.ca";
	return output
}

// makeEmailArr();
// and before this comment ---

const arrayLarry = ['larry', 'shumlich'];
assertEquals('larry.shumlich@evolveu.ca', makeEmailArr(arrayLarry));
assertEquals('bill.smith@evolveu.com', makeEmailArr(['bill','smith']));
assertEquals('amy.jones@evolveu.ca', makeEmailArr(['amy','jones']));


// March 14

/*	
	Write the function to format an email based on an object / map
*/

// Write the function after this comment ---

function makeEmailObj( emailArr){
output=emailArr.fname + "." + emailArr.lname +"@evolveu.ca";
return output;
}
// and before this comment ---

const objLarry = {fname:'larry', lname:'shumlich'};
assertEquals('larry.shumlich@evolveu.ca', makeEmailObj(objLarry));
assertEquals('bill.smith@evolveu.ca', makeEmailObj({fname:'bill',lname:'smith'}));
assertEquals('amy.jones@evolveu.ca', makeEmailObj({fname:'amy',lname:'jones'}));

// March 18

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

// Write the function after this comment ---


// function makeEmailObj(data.staff){
// output=data.staff.fname + "." + data.staff.lname +"@evolveu.ca";
// return output;
// }

// function loopStaff(staffEmail){ 


// }

function loopStaff(arrEmail) {
	let result = [];
	
	function staffEmail(staffInfo) {
		email = makeEmailObj(staffInfo);
		result.push(email)
		
	}

	arrEmail.forEach ( staffEmail )
    return result;
}
// and before this comment ---

console.log('-----loopStaff')
const staffEmail = loopStaff(data.staff);
console.log(staffEmail);
assertEquals('Jane.Smith@evolveu.ca', staffEmail[0]);
assertEquals('Olivia.Notly@evolveu.com', staffEmail[3]);
assertEquals('Benjamin.Amis@evolveu.ca', staffEmail[6]);

// March 19


console.log('-----emailForOf')
const emailForOf = loopWithForOf(data.staff);
console.log(emailForOf);
assertEquals('Jane.Smith@evolveu.ca', emailForOf[0]);
assertEquals('Olivia.Notly@evolveu.com', emailForOf[3]);
assertEquals('Benjamin.Amis@evolveu.ca', emailForOf[6]);

function loopWithForOf(emailForOf){
newArry=[];
for (i of emailForOf)
    {newArry.push(makeEmailObj(i))}
return newArry
}


console.log('-----emailForIn')
const emailForIn = loopWithForIn(data.staff);
console.log(emailForIn);
assertEquals('Jane.Smith@evolveu.ca', emailForIn[0]);
assertEquals('Olivia.Notly@evolveu.com', emailForIn[3]);
assertEquals('Benjamin.Amis@evolveu.ca', emailForIn[6]);

function loopWithForIn(emailForIn){
	newArry=[];
	for (i in emailForIn )
		newArry.push(makeEmailObj(emailForIn[i]))
return newArry
}



// March 20 Call back 


console.log('-----emailWithEach')
const emailWithEach = loopWithEach(data.staff);
console.log("Email====",emailWithEach);
assertEquals('Jane.Smith@evolveu.ca', emailWithEach[0]);
assertEquals('Olivia.Notly@evolveu.com', emailWithEach[3]);
assertEquals('Benjamin.Amis@evolveu.ca', emailWithEach[6]);
   

function loopWithEach(arrEmail) {
	let result = [];
		function emailWithEach(person) {
		// email = makeEmailObj(person);
		// result.push(email)
		// }
	
		result.push(makeEmailObj(person));
	};
	arrEmail.forEach (emailWithEach)
    return result;
    console.log("result is :",result);
}


console.log('-----emailWithMap')
const emailWithMap = loopWithMap(data.staff);
console.log(emailWithMap);

function loopWithMap(myEmail){
	newArry=[];
	function emailWithMap(person){
// 	email=(makeEmailObj(person))
// newArry.push(email);
newArry.push(makeEmailObj(person))
};
myEmail.map(emailWithMap)
return newArry
console.log("hooooooooooo",newArry);
};

assertEquals('Jane.Smith@evolveu.ca', emailWithMap[0]);
assertEquals('Olivia.Notly@evolveu.com', emailWithMap[3]);
assertEquals('Benjamin.Amis@evolveu.ca', emailWithMap[6]);



// March 21 Array

let total=data.staff.map(item=>item.balance).reduce((temp,item)=>temp+item);
// console.log([data.staff]);
console.log("Total balance is :",total);
console.log("Average balance is" , total/data.staff.length);

 data.staff.forEach(function(item,index){
     console.log(item);
   })


// var kvArray = [{key: 1, value: 10}, 
//                {key: 2, value: 20}, 
//                {key: 3, value: 30}];

// var reArray = data.staff.map(obj =>{ 
//    var rObj = {};
//    rObj[obj.fname] = obj.value;
//    // rObj[obj.lname] = obj.lname;
//    return rObj;

//    console.log("rObj",rObj)
// });



const people1 =[{name:'joe',age:18},
               {name:'mit',age:12},
               {name:'tylor',age:10},
               {name:'mark',age:30},
               ]

let totalAge=people1.map(item=>item.age).reduce((temp,item)=>temp+item);
console.log(people1);
console.log("total age is : " , totalAge);
console.log("Average age is : ", totalAge/people1.length);

// March 28 Array-filter
let largeBalances = data.staff.filter(item=>item.balance>=1000) 
console.log(largeBalances);
assertEquals(largeBalances[0].fname, "Liam");
assertEquals(largeBalances[1].fname, "Emma");

// March 29 reduce 

let tot = data.staff.map(item=>item.balance).reduce((temp,item)=>temp+item);
console.log("Total balance is ",tot);
assertEquals(tot, 3823);


var numbers = [1, 4, 9];
var doubles = numbers.map(function(num) {
  return num * 2;
});
console.log(doubles);



let people = [
	{fname:"Alex", lname:"Smith", province:"BC", age:33},
	{fname:"Angela", lname:"Jones", province:"AB", age:61},
	{fname:"Anne", lname:"Bird", province:"SK", age:35},
	{fname:"Brent", lname:"Riddle", province:"MN", age:79},
	{fname:"Byron", lname:"Cardenas", province:"BC", age:38},
	{fname:"Carrie", lname:"Ramirez", province:"AB", age:89},
	{fname:"Cheryl", lname:"Glenn", province:"SK", age:70},
	{fname:"Dima", lname:"Curry", province:"MN", age:67},
	{fname:"Dustin", lname:"Bullock", province:"BC", age:59},
	{fname:"Eva", lname:"Keiths", province:"AB", age:24},
	{fname:"Faith", lname:"Liu", province:"SK", age:46},
	{fname:"Fawad", lname:"Bowman", province:"MN", age:69},
	{fname:"Forest", lname:"Vaughn", province:"BC", age:52},
	{fname:"Giovanni", lname:"Browning", province:"AB", age:32},
	{fname:"Greg", lname:"Hogan", province:"SK", age:55},
	{fname:"Harpreet", lname:"Ramsey", province:"MN", age:18},
	{fname:"Ian", lname:"Fitzgerald", province:"BC", age:16},
	{fname:"James", lname:"Kramer", province:"AB", age:57},
	{fname:"Jarvis", lname:"Ortega", province:"SK", age:69},
	{fname:"Jawad", lname:"Huerta", province:"MN", age:35},
	{fname:"Jinbong", lname:"Robinson", province:"BC", age:26},
	{fname:"Jingnan", lname:"Hatfield", province:"AB", age:71},
	{fname:"Joe", lname:"Banks", province:"SK", age:37},
	{fname:"Kristina", lname:"Dalton", province:"MN", age:73},
	{fname:"Latora", lname:"Matthews", province:"BC", age:25},
	{fname:"Lauren", lname:"McClure", province:"AB", age:42},
	{fname:"Licedt", lname:"Rasmussen", province:"SK", age:30},
	{fname:"Linden", lname:"Pierce", province:"MN", age:68},
	{fname:"Luis", lname:"Price", province:"BC", age:23},
	{fname:"Marcela", lname:"Perez", province:"AB", age:20},
	{fname:"Marilou", lname:"Graham", province:"SK", age:32},
	{fname:"Matt", lname:"Novak", province:"MN", age:29},
	{fname:"Monica", lname:"Giles", province:"BC", age:34},
	{fname:"Niloufar", lname:"Carson", province:"AB", age:29},
	{fname:"Omar", lname:"Olson", province:"SK", age:69},
	{fname:"Roger", lname:"Woodard", province:"MN", age:84},
	{fname:"Roman", lname:"Swanson", province:"BC", age:21},
	{fname:"Seun", lname:"Kelly", province:"AB", age:60},
	{fname:"Shane", lname:"Frost", province:"SK", age:87},
	{fname:"Steven", lname:"Haynes", province:"MN", age:47},
	{fname:"Thomas", lname:"Hart", province:"BC", age:14},
	{fname:"Trent", lname:"Kerr", province:"AB", age:12},
	{fname:"Darrell", lname:"Koch", province:"SK", age:10},
	{fname:"Tylor", lname:"Torres", province:"MN", age:98}
];

let processPeople = function(data, callback) {
	for (let i=0; i<data.length; i++) {
		
				callback(data[i]);
		}
}
	
// Here is invoking the processPeople function.  Write the callback
// function as an anonymous function
//
processPeople(people, function(item) { 
	if (item.age>25 && (item.province==="AB" || item.province==="BC")) {
			console.log(item.fname + " " + item.lname + " " + "is over" + "  " + item.age
			+ " " + " and come from" + " " +item.province)
	}
});



// let determineTotal = function(people) {

// 	if (people.province == "AB" || "BC")

// 		return totalAge=people.map(item=>item.age).reduce((temp,item)=>temp+item);
// };
// //
// determineTotal();


