import React from "react";
import "./App.css";

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hello, my name is ${this.name}.`;
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }

  greet() {
    return `Hello, my name is ${this.name} and I'm studying ${this.major}.`;
  }
}

class Teacher extends Person {
  constructor(name, age, subject) {
    super(name, age);
    this.subject = subject;
  }

  greet() {
    return `Hello, my name is ${this.name} and I teach ${this.subject}.`;
  }
}

export default function PersonHierarchy() {
  const person = new Person("Alex Johnson", 30);
  const student = new Student("Emma Watson", 20, "Computer Science");
  const teacher = new Teacher("Dr. James Wilson", 45, "Mathematics");

  return (
    <div className="person-container">
      <h1>Person Class Hierarchy</h1>

      <div className="person-card">
        <h2>Alex Johnson (Person)</h2>
        <p>Age: {person.age}</p>
        <p className="italic">{person.greet()}</p>
      </div>

      <div className="person-card">
        <h2>Emma Watson (Student)</h2>
        <p>Age: {student.age}</p>
        <p className="italic">{student.greet()}</p>
        <p>Major: {student.major}</p>
      </div>

      <div className="person-card">
        <h2>Dr. James Wilson (Teacher)</h2>
        <p>Age: {teacher.age}</p>
        <p className="italic">{teacher.greet()}</p>
        <p>Teaching: {teacher.subject}</p>
      </div>
    </div>
  );
}
