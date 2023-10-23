//complete this code
class Person {
	constructor(age ,name){
		this._name=name;
		this._age=age;
	}
	get name(){
		return this._name; 
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
const person = new Person("Alice", 30);

// Get name and age
console.log(`Name: ${person.name}, Age: ${person.age}`);

// Set age
person.age = 35;
console.log(`Updated Age: ${person.age}`);

// Try to set a negative age
person.age = -5;  // This will log "Age cannot be negative."

// Create a Student
const student = new Student("Bob", 20);

// Create a Teacher
const teacher = new Teacher("Mr. Smith", 45);

student.study();  // This will log "Bob is studying."
teacher.teach();  // This will log "Mr. Smith is teaching."
// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
