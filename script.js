//complete this code
class Person {
	constructor(age ,name){
		this.name=name;
		this.age=age;
	}
	get name(){
		return this.name; 
	}

	set age(age){
		if(age >=0){
			this._age=age;
		}else{
			console.log("Age cannot be negative.");
		}
	}
	get age(){
		return this._age;
	}
}

class Student extends Person {
	study(){
		console.log(`${this._name}is studying.`);
	}
}

class Teacher extends Person {
	teach(){
		console.log(`${this._name}is teaching.`);
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
