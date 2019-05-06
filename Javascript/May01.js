console.log("Hello world")
 
class Living extends Object{

    constructor(age) {
    	super();
        this.age = age;
    }

	show() {
		console.log("From living ",this.age)
	}

	birthday(age) {
		this.age=this.age+1
		console.log("from Birthday",this.age)
	}
}

class Animal extends Living {
	constructor(age,name){
		super(age)
	
		this.name=name;
	}
}

let j= new Living(3);
console.log("jjj",j)
console.log("again age", j.age);
j.show()
j.birthday()

let y=new Living(100);
y.birthday();
y.birthday(); 

y.show();
j.show();

let z = new Animal(8,"popy");
console.log("-----------");
z.show();
z.birthday();
console.log("Animal name", z.name)
console.log("Animal age", z.age)


