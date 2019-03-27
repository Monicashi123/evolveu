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

	// let myTrain=Train
	console.log(Train)
	console.log(myTrain)
	console.log(shouldTrain)

if(myTrain !== shouldTrain) {

	console.log (" It should be.", myTrain,)
} else {console.log ("**error here **",
		Train,
		" is not = ",
		shouldTrain,)};
}
console.log("SB " ,shouldTrain, myTrain);
console.log("SB a.b.c:", makeTrain("a", "b", "c"));
console.log("SB o.p.q:", makeTrain("o", "p", "q"));

/////////////////////////////////////

console.log("Add numbers");

// ---- put function here ----

const myAnswer1 = addNumbers(1,2);
const MyShouldBe1 = 3;

function addNumbers(number1,number2) {
return number1+number2
}
if (myAnswer1 !== MyShouldBe1) {
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
// function makeEmail(a,b) {
// 	outPut = a + "." + b +"@evolveu.ca"
//  return outPut
// }
const larryEmail = makeEmail('larry', 'shumlich');
const shouldBeLarryEmail = 'larry.shumlich@evolveu.ca ';

function makeEmail("aa","bb") {
	email="aa"+"."+"bb"+ "@evolveu.ca"
	return email
}

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
		console.log("ok ->", p1);
		return true;
		// console.log("They are same");
		// console.log(p1, "====", p2);
	}  {
		console.log ("the two values are not the same:");
	    console.log ("p1-->",p1);
		console.log ("p2-->",p2);
		return false;
	}
}

// // and before this comment ---
// assertEquals("a","b");
// assertEquals("a","a");
// assertEquals(1,2);
// assertEquals(2,2);
// assertEquals("2",2);
// assertEquals("This value","This value");

/*	
	Write the function to format an email based on an array
*/

// Write the function after this comment ---

function makeEmailArr(namearr) {
		output=namearr[0] + "." + namearr[1] + "@evolveu.ca"
		return output
}
	// assertEquals();

// and before this comment ---

const arrayLarry = ['larry', 'shumlich'];
assertEquals('larry.shumlich@evolveu.ca', makeEmailArr(arrayLarry));
assertEquals('bill.smith@evolveu.com', makeEmailArr(['bill','smith']));
assertEquals('amy.jones@evolveu.ca', makeEmailArr(['amy','jones']));



