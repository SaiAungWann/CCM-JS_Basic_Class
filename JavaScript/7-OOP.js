// OOP => Object Oriented Programming
// class => this is one of the blue print keyword that use before create the objects
// base on the class can create many object with the same data
// class name muct be start with cap Little Eg. class Car = ....
class Car {
  wheel = 4;
  color = "black";
  drive() {
    console.log(" Car is Driving");
  }
}

// to create object from object need to use new keyword
let car = new Car();
let car2 = new Car();
car2.color = "white";
car2.wheel = 8;

console.log(car2);

class Calculator {
  plus(n1, n2) {
    return n1 + n2;
  }
  minues(n1, n2) {
    return n1 - n2;
  }
  multi(n1, n2) {
    return n1 * n2;
  }
}
let calculator = new Calculator();
console.log(calculator.plus(2, 3));
// class used to write the blue print package
// that provide the example what are the adv that programmer can get the code that already created

// static method ()
// to call the class properties must crate the variable and object
// if not can use the static keyword infont of the properties

class Calcular1 {
  static PI = 3.14;
}
console.log(Calcular1.PI); // result => 3.14

// Math keyword
// math one of the JavaScript class package that can use directly the math value
console.log(Math.PI); // result => 3.141592653589793

// this Keyword in class
// when need to recall and use properties and methods of class use this keyword

class Calculator2 {
  static Pi = Math.PI;
  static area(r) {
    return this.Pi * r ** 2;
  }
  static vol(r, h) {
    return this.Pi * r ** 2 * h;
  }
}
console.log(Calculator2.area(5)); //result =>78.53981633974483
console.log(Calculator2.vol(5, 6)); // result => 471.23889803846896

// this keyword is pointing the object of the current function, so cannot use with the static method which don't have the object.
// constructor
// constructor is one of the method of class that auto run when created the object

class Car2 {
  Name = "";
  wheel = 4;
  constructor(name) {
    this.Name = name;
    this.drive();
  }
  drive() {
    console.log(this.Name + " is Driving");
  }
}
let toyota = new Car2("Toyota");

// Access modifier
// All modifier => static , public, private, protected.
// in JavaScript => static , public, private only. protected don't have in JS

// Public => the object properties that create normally in class are public modifier
// can ues outside of class {} by creating object

// Private => cannot use the properties outside of class {}
// only can use in class by creating function and call the function in the object
// private modifier are used when need to hide the data form user
// but if they want to see need to send the request
// to write private modifier use # infont the properties

class Car3 {
  Name = "BMW";
  #hp = 300; // this is private modifier
  getHorsePower() {
    console.log("Hourse Power is  " + this.#hp);
  }
}
let car3 = new Car3();
car3.getHorsePower(); // to get the private modifier
console.log(car3);

// inheritance
// the class that use the properties from the parents class
class Car_name {
  constructor(name) {
    this.name = name;
  }

  car_name() {
    return "My car name is " + this.name;
  }
}

class Car_color extends Car_name {
  constructor(name, color) {
    super(name);
    this.color = color;
  }

  car_color() {
    return this.car_name() + " and it's color is " + this.color;
  }
}

class Car_age extends Car_color {
  constructor(name, color, age) {
    super(name, color);
    this.age = age;
  }

  car_age() {
    let date = new Date().getFullYear();
    let ages = date - this.age;
    return this.car_color() + " and it is " + ages + "years old";
  }
}

const myCar = new Car_age("BMW", "black", 1997);
