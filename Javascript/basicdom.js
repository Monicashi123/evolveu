console.log("Document",document,"Hello World from basicdom.js");
console.log("document", document);
console.log("document", document.body);
console.log("idHh1",idH1);

function onButtonClicked() {
	console.log("You push the button");
}

function onButtonClicked1() {
	console.log(idH1);
	console.log("Yea, I got it")
}

var button = document.getElementById("pushme");
var newbutton = document.getElementById("newbutton");

button.addEventListener("click",onButtonClicked);

newbutton.addEventListener("click",onButtonClicked);
console.log("----------", idH1);

 

function clickon() {
	let newclick=document.getElementById("idH1")
	if (idH1.textContent === "Hello World"){
	idH1.textContent = "Hello universe";
	} else{
	idH1.textContent = "Hello World"
	}
	}


let newclick2=document.getElementById("idH2")
newclick2.addEventListener("mouseout",mouseOver2);

function mouseOver2() {
  let newclick2=document.getElementById("idH2")
if (idH2.textContent === "Hello Alberta"){
idH2.textContent = "Hello Saskachewan";
	} else{
	idH2.textContent = "Hello Alberta"
	}
}


let newclick3=document.getElementById("idH3")
newclick3.addEventListener("mouseover",mouseOver3);
function mouseOver3() {
 let newclick3=document.getElementById("idH3")
if (idH3.textContent === "Hello Calgary"){
	idH3.textContent = "Hello Saskatoon";
	} else{
	idH3.textContent = "Hello Calgary"
	}
}

//Adding elements

//var button = document.getElementById("myBtn");
var i=0;
if (i<5)
{document.getElementById("myBtn").addEventListener("click", function(){
    alert(idH1.textContent);i++; alert(i);
});
}

// Even more on Events


