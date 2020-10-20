function Person(name) {
	this.name = name
}

function Student(name, studentId) {
	Person.call(this, name)
	this.studentId = studentId
}

Student.prototype = Object.create(Person.prototype)
Student.prototype.constructor = Student
