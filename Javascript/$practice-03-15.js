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

} else console.log(myAnswer1);
       console.log(MyShouldBe1);
       

console.log("SB 5" ,addNumbers(2,3));

console.log("SB 15" ,addNumbers(10,15));

console.log("SB 500" ,addNumbers(200,300));

const larryEmail = makeEmail("larry", "shumlich");
const shouldBeLarryEmail = "larry.shumlich@evolveu.ca";

function makeEmail(x,y) {
	email=x+"."+y+ "@evolveu.ca"
	return email
}

if (larryEmail !== shouldBeLarryEmail) {
	console.log("***** We have an error here *****",
		larryEmail,
		" is not = ",
		shouldBeLarryEmail,
		" and it should be.")

	console.log("a",larryEmail);
	
	} else {console.log("b",shouldBeLarryEmail);
		
}

console.log("Larry:", larryEmail);
console.log("Jane:", makeEmail("jane", "lee"));
console.log("Bill:", makeEmail("jane", "lee"));
console.log("Sam:", makeEmail("jane", "lee"));


// March-11-2019

// Write the function that will create this output:

// *** the two values are not the same:
//     p1--> a
//     p2--> b
// *** the two values are not the same:
//     p1--> 1
//     p2--> 2
// *** the two values are not the same:
//     p1--> 2
//     p2--> 2
// */

// // Write the function after this comment ---
function assertEquals(p1,p2){
if (p1 === p2)
	{return true;
	console.log("ok-->", p1, p2)

	} else {
	// return false
	console.log( "*** the two values are not the same:",)
    console.log( "p1-->", p1);
    console.log("p2-->", p2);
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

// March-13-2019

/*	
	Write the function to format an email based on an array
*/

// Write the function after this comment ---


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
	console.log(x);
	total=total+newPeople[i].age;
	}
	return total
}
console.log("Total ages of people:", totalAve(people))
// and before this comment ---
console.log("Average age is:", totalAve(people)/x)




