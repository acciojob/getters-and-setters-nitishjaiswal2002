//complete this code
class Person {
	constructor(name,age) {
		this._name=name;
		this._age=age;
	}
	get name(){
		return this._name=name;
	}
	set age(){
		this._age=age;
	}
}

class student extends Person{
	study(){
		console.log(`${this._name}is studying`);
	}
}
class Teacher extends Person {
	teach(){
		`(${this.age}is teaching)`
	}
}



