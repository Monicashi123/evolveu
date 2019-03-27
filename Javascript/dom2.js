//  addL=document.getElementById("addbtn")
//  addL.addEventListener("click", myFunction)
//  function myFunction() {
// 	  var node = document.createElement("LI");
// 	  var textnode = document.createTextNode("Item ");
// 	  node.appendChild(textnode);
// 	  document.getElementById("myList").appendChild(node);
	 
// }
//  
myadd=document.getElementById("Addbtn")
   
myadd.addEventListener("click",myFunction)

 function myFunction() {
	  var node = document.createElement("LI");
	  var textnode = document.createTextNode("Item 4");
	  node.appendChild(textnode);
	  document.getElementById("myList").appendChild(node);
	 
}

// Delte button
// var parent = document.getElementByClassName("list")[0];
// var child = document.getElementByClassName("item")[0];
myDel=document.getElementById("Delbtn")
myDel.addEventListener("click", myFunctiondel)
function myFunctiondel() {
var parent = document.getElementById("myList");
var child = document.getElementById("item3");
parent.removeChild(child);
}

// Show button
// showItem=document.getElementById("showbtn")
// showItem.addEventListener("click", myFunction3)


div = document.getElementById("h3");

 currentCount = 0;

  function createDiv() {
  	currentCount++;
  	// newH2 = document.createElement("h3");  //create new header
	let newH2Text = document.createTextNode("Card # " + " " + currentCount); 
    // var div = document.createElement('h3');
    console.log(newH2Text);

    div.innerHTML = document.getElementById('div2').innerHTML;
    document.body.appendChild(div);

  }


