 
//"Add"
 myadd=document.getElementById("Addbtn")
   
 myadd.addEventListener("click",myFunction)

 function myFunction() {
	  var node = document.createElement("LI");
	  var textnode = document.createTextNode("Item 4");
	  node.appendChild(textnode);
	  document.getElementById("myList").appendChild(node);
	 
}
 

// "delete"
// idBtndel = document.getElementById("Delbtn");
// var parent = document.getElementById("LI");
// var child = document.getElementById("mylist");
// // parent.removeChild(child);
// var btn=document.createElement("Delbtn");




//  var btn=document.createElement("Delbtn");
//  addEventListener("click", myFunction);


// function myFunction() {
//   var list = document.getElementById("myList");
//   list.removeChild(list.childNodes[0]);
// }



 
	
// // 	btn.appendChild(document.createTextNode("Delete"));
// // 	myList[i].appendChild(btn);
// // 	btn.onclick=remove("LI");
// // }

// 	for( i=0;i<listLength();i++){

// 	deleteButton();

// 	}
// 	// var btn=document.createElement("Delbtn");
// 	btn.addEventListener("click", deleteButton);

// function removeParent(evt){
// 	evt.target.parentNode.remove();

// }


// document.getElementById("Delbtn").addEventListener("click", dellist);
// function dellist() {
//     document.getElementById("LI") = remove()

 
// showOL = document.querySelector("myList");

// idBtndel.addEventListener("click", ondelClick);

// function ondelClick() {
// 	remove(idBtndel.textContent)
// }

// show

// showOL = document.querySelector("myList");
// idBtnShow = document.getElementById("showbtn");
// idBtnShow.addEventListener("click", onShowClick);

// function onShowClick(e) {
// 	console.log("list items",showOL.children);
// }




 div = document.getElementById("cards");
 currentCount = 0; //initialize card count to zero

btnAddCard = document.getElementById("btnaddcard");
btnAddCard.addEventListener("click", onAddCard);

// Function to create new div (new card):
function createCard (){
	currentCount++;
	let newDiv = document.createElement("div"); //create new card
	newDiv.className = "newcard";
	let newH2 = document.createElement("h2");  //create new header
	let newH2Text = document.createTextNode("Card" + " " + currentCount); //text for header
	let fullH2 = newH2.appendChild(newH2Text); //full header

	let btnAddBefore = document.createElement("button"); //creating add before button and text
	btnAddBefore.textContent = "Add Before";
	let btnAddAfter = document.createElement("button"); //creating add after button and text
	btnAddAfter.textContent = "Add After";
	let btnDelete = document.createElement("button"); //create delete button and text
	btnDelete.textContent = "Delete";

	newDiv.appendChild(fullH2); 						//append full H2 to the new card
	newDiv.appendChild(btnAddBefore); 					//append buttons to new card (newDiv)
	newDiv.appendChild(btnAddAfter);
	newDiv.appendChild(btnDelete);

	btnAddBefore.addEventListener("click", onAddBefore);
	btnAddAfter.addEventListener("click", onAddAfter);
	btnDelete.addEventListener("click", onDelete);

	return newDiv;
}

// Function for the Add Before button:
function onAddBefore(event) {
	newDiv = createCard();
	console.log('addbefore', event.target);
	targetBtn = event.target.parentElement; 
	targetBtn.parentNode.insertBefore(newDiv, targetBtn); //add before current card (use targetBtn to add before the targetBtn pushed)
}

// Function for Add after button:
function onAddAfter (event) {
	newDiv = createCard();
	console.log('addafter', event.target);
	targetBtn = event.target.parentElement;
	targetBtn.parentNode.insertBefore(newDiv, targetBtn.nextSibling); //add after current card (read up on insertBefore, nextSibling - W3Schools, MDN)
}

// Function for Delete Button:
function onDelete(event) {
	console.log('delete', event.target);
	targetBtn = event.target.parentElement; 
	targetBtn.parentNode.removeChild(event.target.parentNode);				//remove parent of button being clicked
}

// Function for add Card button:
function onAddCard(event) {
	newDiv = createCard();
	console.log('addcard', event.target);
	targetBtn = event.target.parentElement;				//define targetBtn as a variabe of clicking on Add Card Btn
	targetBtn.appendChild(newDiv); 						//append newDiv (new card) to cards div
}


