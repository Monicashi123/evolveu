 
//"Add"
 // myadd=document.getElementById("Addbtn")
   
 // myadd.addEventListener("click",myFunction)

 document.getElementById("Addbtn").addEventListener("click", myFunction);

 function myFunction() {
	  var node = document.createElement("LI");
	  var textnode = document.createTextNode("Item 4");
	  node.appendChild(textnode);
	  document.getElementById("myList").appendChild(node);
	 
}
 
 // Creat Card
 div = document.getElementById("cards");
 Count = 0; 

// addCardN = document.getElementById("btnaddcard");
// addCardN.addEventListener("click", addCard);

document.getElementById("btnaddcard").addEventListener("click", addCard);

// Function to create new div (new card):
function createCard (){
	Count++;
	newAdd = document.createElement("div"); 
	newAdd.className = "newcard";
	newHead = document.createElement("head");  
	newText = document.createTextNode("Card#" + " " + Count); 
	Node= newHead.appendChild(newText); 

	addBefore = document.createElement("button"); 
	addBefore.textContent = "Add New Before";
	addAfter = document.createElement("button"); 
	addAfter.textContent = "Add New After";
	btnDelete = document.createElement("button"); 
	btnDelete.textContent = "Delete This";
	
	addBefore.addEventListener("click", AddBefore);
	addAfter.addEventListener("click", AddAfter);
	btnDelete.addEventListener("click", Delete);
    
    newAdd.appendChild(Node); 						//append full H2 to the new card
	newAdd.appendChild(addBefore); 					//append buttons to new card (newDiv)
	newAdd.appendChild(addAfter);
	newAdd.appendChild(btnDelete);

	return newAdd;
}

// Function for add Card button:
function addCard(event) {
	newAdd = createCard();
	// console.log('addcard', event.target);
	// eventAdd = event.target.parentElement;				
	// eventAdd.appendChild(newAdd); 
							//append newDiv (new card) to cards div
	event.target.parentElement.appendChild(newAdd)
}

// Function for the Add Before button:
function AddBefore(event) {
	newAdd = createCard();
	// eventAdd = event.target.parentElement; 
	// eventAdd.parentNode.insertBefore(newAdd, eventAdd); 

	event.target.parentElement.parentNode.insertBefore(newAdd, eventAdd); 

}

// Function for Add after button:
function AddAfter (event) {
	newAdd = createCard();
	// console.log('addafter', event.target);
	// eventAdd = event.target.parentElement;
	// eventAdd.parentNode.insertBefore(newAdd, eventAdd.nextSibling); 

	event.target.parentElement.parentNode.insertBefore(newAdd, eventAdd.nextSibling)
}

// Function for Delete Button:
function Delete(event) {
	// console.log('delete', event.target);
	// eventAdd = event.target.parentElement; 
	// eventAdd.parentNode.removeChild(event.target.parentNode);				
event.target.parentElement.parentNode.removeChild(event.target.parentNode)
}


