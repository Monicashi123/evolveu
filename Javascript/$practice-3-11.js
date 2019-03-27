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
	if (p1 !== p2 ){
	console.log("*** the two values are not the same:");
	console.log(" p1--> ", p1);
	console.log(" p2--> ", p2);
	return true;
	} else { 
		console.log("ok-->",p1);
		return false
	}
}

// and before this comment ---

assertEquals("a","b");
assertEquals("a","a");
assertEquals(1,2);
assertEquals(2,2);
assertEquals("2",2);
assertEquals("This value","This value");

// March 13 =========================
/*	
	Write the function to format an email based on an array
*/

// Write the function after this comment ---
function makeEmailArr (arrayLarry) { 
emailout= arrayLarry[0] + "." + arrayLarry[1] + "@evolveu.ca"
return emailout
}

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
function makeEmailObj (objLarry) {

	emailobj=objLarry.fname + "."+ objLarry.lname + "@evolveu.ca"
	return emailobj
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
function makeEmailObj(emailok){
 return emailok.fname + '.' + emailok.lname + '@evolveu.ca'
}
// and before this comment ---
function loopStaff(emailok) {
 let loopArr = []
   for (i of emailok) {
     loopArr.push(makeEmailObj(i))
   }
   return loopArr
 }

console.log('-----loopStaff')
const staffEmail = loopStaff(data.staff);
console.log(staffEmail);
assertEquals('Jane.Smith@evolveu.ca', staffEmail[0]);
assertEquals('Olivia.Notly@evolveu.com', staffEmail[3]);
assertEquals('Benjamin.Amis@evolveu.ca', staffEmail[6]);

// March 18 People array
// makeemailarray
const people =[{name:'joe',age:18},
               {name:'mit',age:12},
               {name:'tylor',age:10},
               {name:'mark',age:30},
               ]

let total=0;
console.log (" The array people:", people);
console.log ("First element", people[0].age);

function totalAve (newPeople){
	 x=newPeople.length
	for (i=0; i< x; i++) {
	console.log("newPeople", newPeople[i].age);
	console.log('total ' + total);
	total+=newPeople[i].age;
	}
	let average = total/x;
	console.log('average: ' + average)
	return total;
}
console.log("Total ages of people:", totalAve(people))
// and before this comment ---



// 
// March 21

// console.log('-----emailForOf')
// const emailForOf = loopWithForOf(data.staff);
// // console.log(emailForOf);
// assertEquals('Jane.Smith@evolveu.ca', emailForOf[0]);
// assertEquals('Olivia.Notly@evolveu.com', emailForOf[3]);
// assertEquals('Benjamin.Amis@evolveu.ca', emailForOf[6]);

// console.log('-----emailForIn')
// const emailForIn = loopWithForIn(data.staff);
// // console.log(emailForIn);
// assertEquals('Jane.Smith@evolveu.ca', emailForIn[0]);
// assertEquals('Olivia.Notly@evolveu.com', emailForIn[3]);
// assertEquals('Benjamin.Amis@evolveu.ca', emailForIn[6]);


