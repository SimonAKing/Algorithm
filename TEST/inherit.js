// ES5 构造函数
function Student(name, studentId) {
  // 调用父类的构造函数来初始化父类的成员变量
  Person.call(this, name);

  // 初始化子类自己的成员变量
  this.studentId = studentId;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

// ES6 类
class Student extends Person {
  constructor(name, studentId) {
    super(name);
    this.studentId = studentId;
  }
}
