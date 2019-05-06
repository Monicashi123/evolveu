console.log("Make me an Email");

// ---- put function here ----

	// return
	 // x+"."+y+"@evolveu.ca"}

// const ans14 = my_email('jane','smith'

console.log("Make me a Train");

// ---- put function here ----

const myTrain = makeTrain('one', 'two', 'three');
const shouldTrain = 'one.two.three';

function makeTrain(x,y,z) {
	Train = x+"."+y+"."+z
	return Train
}
if (myTrain != shouldTrain) {
	console.log("***** We have an error here *****",
		myTrain,
		" is not = ",
		shouldTrain,
		" and it should be."
	)
}
console.log("SB " ,shouldTrain, myTrain);
console.log("SB a.b.c:", makeTrain("a", "b", "c"));


/////////////////////////////////////

console.log("Add numbers");

// ---- put function here ----

const myAnswer1 = addNumbers(1,2);
const MyShouldBe1 = 3;

function addNumbers(number1,number2) {
	// total=0;
total=number1+number2
return  total
}
if (myAnswer1 != MyShouldBe1) {
	console.log("***** We have an error here *****",
		myAnswer1,
		" is not = ",
		MyShouldBe1,
		" and it should be."
	)
}
console.log("SB 5" ,addNumbers(2,3));

console.log("SB 15" ,addNumbers(10,15));

console.log("SB 500" ,addNumbers(200,300));


/////////////////////////////////////////////////////////////
// make me an email
	// Write the function that will make this code work.

console.log("Make me an Email");

// ---- put function here ----
function makeEmail(a,b) {
	outPut = a + "." + b +"@evolveu.ca";
 return outPut;
}
const larryEmail = makeEmail('larry', 'shumlich');
const shouldBeLarryEmail = 'larry.shumlich@evolveu.ca';

if (larryEmail != shouldBeLarryEmail) {
	console.log("***** We have an error here *****",
		larryEmail,
		" is not = ",
		shouldBeLarryEmail,
		" and it should be.")
} 
console.log("Larry:", larryEmail);
console.log("Jane:", makeEmail("jane", "lee"));
console.log("Bill:", makeEmail("jane", "lee"));
console.log("Sam:", makeEmail("jane", "lee"));

// ==================================

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
	if (p1 === p2) {
		console.log("--->ok")
		// console.log("They are same");
		return true
		// console.log("They are same");
		// console.log(p1, "====", p2);
	}  {
		console.log ("Two values aren't same:");
	    console.log ("p1-->",p1);
		console.log ("p2-->",p2);
		return false;
	}
}
// and before this comment ---
assertEquals("a","b");
assertEquals("a","a");
assertEquals(1,2);
assertEquals(2,2);
assertEquals("2",2);
assertEquals("This value","This value");



// makeEmailArr - March 13, 2019====================================

/*	
	Write the function to format an email based on an array
*/

// Write the function after this comment ---
// function assertEquals (element1, element2) {


function makeEmailArr(namearr) {
		output=namearr[0] + "." + namearr[1] + "@evolveu.ca"
		return output
}


const arrayLarry = ['larry', 'shumlich'];
assertEquals('larry.shumlich@evolveu.ca', makeEmailArr(arrayLarry));
assertEquals('bill.smith@evolveu.com', makeEmailArr(['bill','smith']));
assertEquals('amy.jones@evolveu.ca', makeEmailArr(['amy','jones']));


// makeEmailObj - March 14, 2019 
/*	
	Write the function to format an email based on an object / map
*/

// Write the function after this comment ---
// var emails = users.map(function (user) { return user.email; });

function makeEmailObj(emailok){
	console.log(emailok.fname + '.' + emailok.lname + '@evolveu.ca')
    return emailok.fname + '.' + emailok.lname + '@evolveu.ca'

 // console.log("makeEmailObj is here");
 
}
console.log("makeEmailObj is here")
// console.log(emailok.fname + '.' + emailok.lname + '@evolveu.ca')


// and before this comment ---

const objLarry = {fname:'larry', lname:'shumlich'};
assertEquals('larry.shumlich@evolveu.ca', makeEmailObj(objLarry));
assertEquals('bill.smith@evolveu.ca', makeEmailObj({fname:'bill',lname:'smith'}));
assertEquals('amy.jones@evolveu.ca', makeEmailObj({fname:'amy',lname:'jones'}));



// March 18 People array
// makeemailarray
const people =[{name:'joe',age:18},
               {name:'mit',age:12},
               {name:'tylor',age:10},
               {name:'mark',age:30},
               ]

let totala=0;
console.log (" The array people:", people);
console.log ("First element", people[0].age);

function totalAve (newPeople){
	 x=newPeople.length
	for (i=0; i< x; i++) {
	console.log("newPeople", newPeople[i].age);
	console.log('total ' + totala);
	totala+=newPeople[i].age;
	}
	let average = totala/x;
	console.log('average: ' + average)
	return totala;
}
console.log("Total ages of people:", totalAve(people))
// and before this comment ---

// loopStaff - March 18, 2019 

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

// function makeEmailObj(emailok){
//  return emailok.fname + '.' + emailok.lname + '@evolveu.ca'
// }
// function loopStaff(emailok) {
//  let loopArr = []
//    for (i of emailok) {
//      loopArr.push(makeEmailObj(i))
//    }

//    console.log("here loopstaff are", emailok)
//    return loopArr
//  }



function loopStaff(arrEmail) {
	let result = [];
	
	function staffEmail(person) {
		email = makeEmailObj(person);
		result.push(email)
		
	}

	arrEmail.forEach ( staffEmail )
    return result;
}

// staffEmail = loopStaff(data.staff);


 // function loopStaff(person) {
	// 	email = makeEmailObj(person);
	// 	result.push(email)
	// 	// console.log('person,email,result', person, email, result)
	// }

	// arrEmail.forEach ( makeAndPush )
	// return result;



// staffEmail = staffEmailforEach(data.staff);
// console.log('heres what we got using foreach', xuxuxu);




// and before this comment ---

console.log('-----loopStaff')
const staffEmail = loopStaff(data.staff);
console.log(staffEmail);
assertEquals('Jane.Smith@evolveu.ca', staffEmail[0]);
assertEquals('Olivia.Notly@evolveu.com', staffEmail[3]);
assertEquals('Benjamin.Amis@evolveu.ca', staffEmail[6]);


// March 19, 2019 - Noon Exercise

console.log('-----emailForOf')
const emailForOf = loopWithForOf(data.staff);

function loopWithForOf(emailOk) {
 let loopArr1 = []
   for (i of emailOk) {
     loopArr1.push(makeEmailObj(i))

   }
   
   return loopArr1
 }


console.log(emailForOf);
assertEquals('Jane.Smith@evolveu.ca', emailForOf[0]);
assertEquals('Olivia.Notly@evolveu.com', emailForOf[3]);
assertEquals('Benjamin.Amis@evolveu.ca', emailForOf[6]);

function loopWithForIn(emailok) {
 let loopArr1 = []
   for (i in emailok) {
     
     loopArr1.push(makeEmailObj(emailok[i]))

		}
   return loopArr1
 }

console.log('-----emailForIn')
const emailForIn = loopWithForIn(data.staff);
// console.log(emailForIn);
assertEquals('Jane.Smith@evolveu.ca', emailForIn[0]);
assertEquals('Olivia.Notly@evolveu.com', emailForIn[3]);
assertEquals('Benjamin.Amis@evolveu.ca', emailForIn[6]);

// loopStaff each / map - March 20, 2019

console.log('-----emailWithEach')
const emailWithEach = loopWithEach(data.staff);

function loopWithEach(arrEmail) {
	let result = [];
	
	function emailWithEach(person) {
		email = makeEmailObj(person);
		result.push(email)
		// console.log('person,email,result', person, email, result)
		// // return
	}

	arrEmail.forEach ( emailWithEach )
    return result;
}



   // for (i of emailok) {
   //   loopArr1.push(makeEmailObj(i))
   // }

 
console.log(emailWithEach);
assertEquals('Jane.Smith@evolveu.ca', emailWithEach[0]);
assertEquals('Olivia.Notly@evolveu.com', emailWithEach[3]);
assertEquals('Benjamin.Amis@evolveu.ca', emailWithEach[6]);

console.log('-----emailWithMap')
const emailWithMap = loopWithMap(data.staff);
function loopWithMap(emailok) {
 let loopArr1 = []
   for (i of emailok) {
     loopArr1.push(makeEmailObj(i))
   }
   return loopArr1
 }
console.log(emailWithMap);
assertEquals('Jane.Smith@evolveu.ca', emailWithMap[0]);
assertEquals('Olivia.Notly@evolveu.com', emailWithMap[3]);
assertEquals('Benjamin.Amis@evolveu.ca', emailWithMap[6]);

