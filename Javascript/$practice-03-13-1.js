
/*	
	Write the function to format an email based on an array
*/

// Write the function after this comment ---

function assertEquals(p1, p2) {
 if (p1 !== p2) {
   console.log('the two values are not the same \n' + 'p1--> ' + p1 + '\n' + 'p2--> ' + p2);
   return false;
 } else {
   return console.log('ok');
 }
}

function makeEmailObj(ok){
 return ok.fname + '.' + ok.lname + '@evolveu.ca'
}

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


function loopStaff(ok) {
 let loopArr = []
   for (i of ok) {
     loopArr.push(makeEmailObj(i))
   }
   return loopArr
 }



// and before this comment ---

console.log('-----loopStaff')
const staffEmail = loopStaff(data.staff);
// console.log(staffEmail);
assertEquals('Jane.Smith@evolveu.ca', staffEmail[0]);
assertEquals('Olivia.Notly@evolveu.com', staffEmail[3]);
assertEquals('Benjamin.Amis@evolveu.ca', staffEmail[6]);


// and before this comment ---

const arrayLarry = ['larry', 'shumlich'];
assertEquals('larry.shumlich@evolveu.ca', makeEmailArr(arrayLarry));
assertEquals('bill.smith@evolveu.com', makeEmailArr(['bill','smith']));
assertEquals('amy.jones@evolveu.ca', makeEmailArr(['amy','jones']));


