console.log("Hello from javascript");
console.log("document",document)
function onButtonClick(){
      //console.log("Hello from the function");
      if (idH1.textContent ==="Hello World")
      {
        idH1.textContent="Hello Universe"
      } else {
      	idH1.textContent = "Hello World"
      }
}

document.getElementById("mybutton")
addEventListener("click",onButtonClick);
//console.log("string",idH1);



function onMousOover(){
      // console.log("Hello from the function");
      if (idH3.textContent === "Hello Albeta")
      {
        idH3.textContent="Hello Saskatchewan"
      } else {
      	idH3.textContent = "Hello Albeta"
      }
}

document.getElementById("idH3")
addEventListener("mouseover", onMousOover);
//console.log("string",idH3);




function onMousOut(){
      // console.log("Hello from the function");
      if (idH4.textContent === "Hello Calgary")
      {
        idH4.textContent="Hello Saskaton"
      } else {
      	idH4.textContent =  "Hello Calgary"
      }
}

const idH4=document.getElementById("idH4")
addEventListener("mouseout", onMousOut);
//console.log("string",idH4);

//Add elements

const aBc = document.getElementById("idH5");
idH6.addEventListener("click", listenidH5);

function listenidH5() {
	myMe = document.createElement("H1"); //creates the tag
	myMe.textContent="Hello my city";  //puts text in the tag
	aBc.appendChild(myMe);  //puts element under parents idH5
}

//Add new title
NewTitle=document.createElement("Title");
NewTitle.textContent="I am a magician";
document.head.appendChild(NewTitle);


// DOM insertBefore


function myFunction1() {
  newItem = document.createElement("li");
  textNode = document.createTextNode("Water");
  newItem.appendChild(textNode);

  list = document.getElementById("myList");
  list.insertBefore(newItem, list.childNodes[0]);

}







