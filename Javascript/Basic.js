console.log("hello world exterenal");
var myButton = document.getElementById("mybutton");
var myInput = document.getElementById("myinput");

function onButtonClicked() {
	console.log("I got myButton function here");
	//var inputField = Number(myInput.value);
	var inputField = Number(myInput.value);
    inputField += 1;
	console.log(inputField);
}

//onButtonClicked();
//myButton.addEventListener("click", onButtonClicked);

//var myInput1Number = number(document.getElementById("myinput1").value);
//var myInput2Number = number(document.getElementById("myinput2").value);
//var myRes = number(document.getElementById("myResult");

var myInput1 = document.getElementById("myinput1");
var myInput2 = document.getElementById("myinput2");

var myInput3 = document.getElementById("myinput3");
var myInput4 = document.getElementById("myinput4");



var myAddButton = document.getElementById("myAdd");
var mySubButton = document.getElementById("mySub");
var myMulButton = document.getElementById("myMul");
var myDivButton = document.getElementById("myDiv");

//"+"

myAddButton.addEventListener("click",addClicked)
function addClicked() {

let v1=Number(myInput1.value);
let v2=Number(myInput2.value);
let result1=v1+v2

console.log('value1:',v1);

console.log('value2:',v2);

const answer = document.getElementById("result1");
answer.textContent = "This is result: " + result1;
}

//"-"
mySubButton.addEventListener("click",subClicked)
function subClicked() {

let v3=Number(myInput3.value);
let v4=Number(myInput4.value);
let result2=v3-v4

console.log('value3:',v3);

console.log('value4:',v4);

const answer = document.getElementById("result2");
answer.textContent = "This is result is: " + result2;
}

//"*"

var myInput5 = document.getElementById("myinput5");
var myInput6 = document.getElementById("myinput6");
myMulButton.addEventListener("click",mulClicked)
function mulClicked() {
let v5=Number(myInput5.value);
let v6=Number(myInput6.value);
let result3=v5*v6
console.log('value5:',v5);
console.log('value6:',v6);
const answer = document.getElementById("result3");
answer.textContent = "This is result is: " + result3;
}


//"/"

var myInput7 = document.getElementById("myinput7");
var myInput8 = document.getElementById("myinput8");
myDivButton.addEventListener("click",divClicked)
function divClicked() {
let v7 = Number(myInput7.value);
let v8 = Number(myInput8.value);
let result4 = v7/v8
console.log('value7:',v7);
console.log('value8:',v8);
const answer = document.getElementById("result4");
answer.textContent = "This is result is: " + result4;
}


taxid.addEventListener("click",calcTaxes)
function calcTaxes(){
	const amount = Number(document.getElementById("inputincome").value);
    tax = 0;
		if(amount > 210371){
			tax = (47630 * 0.15) + (47629 * 0.205) + (52408 *0.26) + (62704 * 0.29) + ((amount-210371) * 0.33);
		}
		else if( amount >147667 && amount <=210371){
			tax = (amount - 147667) * 0.29 + (52408*0.26) + (47629*.205) + (47630*0.15);
		} 
		else if(amount > 95259 && amount <=147667){
			tax = (amount - 95259) * 0.26 + (47629 * 0.205) + (47630 * 0.15);
		} 
		else if(amount > 47630 && amount <= 95259){
			tax = (amount - 47630) * 0.205 + 47630 * 0.15;
	    }
        else {	tax = (amount * 0.15)
		}
		const answer = document.getElementById("tax");
		answer.textContent = "Total tax is : " + tax;
}



//Array==============================================

// const displaytext="Input not available"

// const myArayNumber= document.getElementById("arrayinput");
// const myArayButton= document.getElementById("addbtn");
// string1="";
// inputvalue=Number(myArayNumber.value);
// myArayButton.addEventListener("click",myFunctionAdd);
// //document.getElementById("message2").textContent=string1;
// //string1="";

// let myarraysample = [1,3,5,];


// function myFunctionAdd(){
	 
// 	if (isNaN(myArayNumber))
// 		{document.getElementById("message2").textContent="Not a number"};

// 	  else 
// 	   {

// 		myarraysample.push(Number(myArayNumber.value))
// 		document.getElementById("message2").textContent=string1;

// 		string1="";

// 		console.log(myarraysample[0])

// 		    while(myarraysample[0]){
// 			      console.log(myarraysample[0]);
// 			      string1=string1 + myarraysample[0];
// 			      myarraysample=myarraysample.splice(1);
// 			      document.getElementById("message2").textContent=string1;
// 			      console.log(myarraysample[0])
// 		                       }

// 		document.getElementById("message2").textContent="Number added" ;
	
// 	document.getElementById("message2").textContent=string1;


// 	console.log(myarraysample[0])
// 	    }



// Create variables for button action:
let arrinput = document.getElementById("arrayinput");
let outputarr = document.getElementById("message2")
let addItem = document.getElementById("addbtn");
let showArray  = document.getElementById("showbtn");
let arrayTotal = document.getElementById("totalbtn");
let clearArray = document.getElementById("clearbtn");

// initialize/set up empty array for array functions
let array1 = [1,3,5];

// set up functions & event listeners for each button:
function addTo() {
	if (isNaN(arrinput.value)) {
		outputarr.textContent = ("Input is not a valid number");
		                    } 
    else {
		array1.push(arrinput.value);
		outputarr.textContent = ("Number added to array");
		 }
	return outputarr.textContent;
}

function showContent() {
	outputarr.textContent = array1;
}


// let arr = [1, 2, 3, 4, 5];
// let sum = 0;
// for(var i = 0; i < arr.length; i++) {
//     sum += arr[i];
// }
// console.log(sum);


// function arraySum() {

// let sum=0;
// for(var i = 0; i < array1.length; i++) {
//     sum += arr[i];

// console.log(sum);
// output.textContent = array1;

// }


function arraySum() {
	const arrayPlus = array1.reduce((acc, num) => {
	return Number(acc) + Number(num); }, 0);
	outputarr.textContent = arrayPlus;
}


function clear() {
	arrinput.value = "";
	outputarr.textContent = "";
}

addItem.addEventListener("click", addTo);
showArray.addEventListener("click", showContent);
arrayTotal.addEventListener("click", arraySum); 
clearArray.addEventListener("click", clear);
                     
           
// Dictionary==================================
// function Dictionary () {
//     this.dataStore = [];
//     this.add = add;         // 添加元素
//     this.find = find;       // 查找元素
//     this.remove = remove;   // 删除元素
//     this.count = count;     // 字典中元素个数
//     this.showAll = showAll; // 显示字典元素
//     this.clear = clear;     // 清空字典
// }


// var directory = new dictionary();
let inputprov = document.getElementById("inputprov");
let lookupbtn = document.getElementById("lookup");
let txtOutput = document.getElementById("message3");
const provinceList = {
	BC: "British Colombia",
	AB: "Alberta",
	SK: "Saskatchewan",
	MB: "Manitoba",
	ON: "Ontario", 
	QC: "Quebec",
	NB: "New Brunswick",
	}
function LookUp() {
	for (let i in provinceList) { 
		if (inputprov.value.toUpperCase() === i) { 
			let answer = provinceList[i]; 
			txtOutput.textContent = answer;
			return 
	     } else {txtOutput.textContent = "Valid province";}

	}
}

lookupbtn.addEventListener("click", LookUp);
  
// =========================================================