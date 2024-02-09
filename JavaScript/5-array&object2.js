// JavaScript is basically construct with objects, all the data type are base from the object
// if variable are writing with low level programming will display as object
let str = new String("hello");
console.log(str); // result =>[String: 'hello']
// output is the same as normal variable result
let str1 = "hello"; // result => hello

// str result is display as object as it writhing with low level programming
// so all the object's method can use
let newStr = str.toUpperCase(); // to change to upperCase
console.log(newStr); // result => HELLO

let newStr1 = str.toLowerCase(); // to change to lowerCase
console.log(newStr1); // result =>hello

let newStr2 = str.trim(); // to auto delete space into the first latter and last latter
console.log(newStr2); // result => hello

let str2 = "hello world again";
let newStr3 = str2.split(" "); // to split the data into different index nos. that have space between
console.log(newStr3); // result => [ 'hello', 'world', 'again' ]

let str3 = "Hello , world again";
let newStr4 = str3.split(",");
console.log(newStr4); // result => [ 'Hello ', ' world again' ]

let num = new Number(12.7);
let newNum = num.toFixed(); // to fix the float into int number:
console.log(newNum); // result => 13

let bool = new Boolean(true);
bool = bool.toString(); // to change the value to string data type
console.log(bool); // result => "true"

// Create Object
// let person = {} this is the object with name person - need to write properties and method in {}
let person = {
  name: "john", // this call key:value pair
  age: "28",
};
// two type of taking properties
// dot notation
console.log(person.name);
// bracket notation
console.log(person["age"]);
// overwride the properties
person.name = "John Doe";
// at add more data
person.haircolor = "black";
console.log(person);

// add function in properties
let person2 = {
  eat: function () {
    console.log(person.name + " is eating");
  },
  drive() {
    console.log(person.name + " is Driving"); // function short-hand writing normally use this way
  },
};
person2.eat();
person2.drink = function () {
  console.log(person.name + " is drinking");
};
person2.drink();
person2.drive();

// .this keyword
// defalt object => window objects
// all object are basically come from window objects

// setTimeout(() => {
//   console.log("after 3 seconds");
// }, 3000);
//setTimeout function is the call back function cus it will work after setting time.

// this keyword is one of the object which pointing the current function's objects

let person3 = {
  name: "May",
  age: "28",
  drive() {
    console.log(person3.name + " is Driving");
  },
  drink() {
    console.log(person3.name + " is drinking");
  },
  eat() {
    console.log(person3.name + " is eating");
  },
};
console.log(person3);
// like this person3.name is writing many times.
// to solve the proplem use .this keyword

let person4 = {
  name: "May",
  age: "28",
  drive() {
    console.log(this.name + " is Driving");
  },
  drink() {
    console.log(this.name + " is drinking");
  },
  eat() {
    console.log(this.name + " is eating");
  },
};
console.log(person4);
// this keyword is pointing the main/current function/method of the object
// ** note that this is point the object for
// 1 - method  => method's object
// 2 - regular function => window object.
// 3 - arrow function => parent object (lexical scoping);

// arrow function don't have this keyword so if use this keyword in arrow function it will point the parent this of the objects.

let person5 = {
  name: "A Yin",
  eat() {
    console.log(this.name);
    setTimeout(() => {
      console.log(this.name);
    }, 3000);
  },
};
person5.eat();

// object spread (...)
// to store two object's data in one object
let obj1 = {
  name: "sai",
  age: 20,
};
console.log(obj1);
let obj2 = {
  haircolor: "black",
};
console.log(obj2);
let obj3 = {
  ...obj1,
  ...obj2,
};
console.log(obj3);

// destructing
// to create two object with the same properties
let { name, gae } = {
  name: "Nang",
  age: 25,
};
console.log(name);

// properites short hand
// use when you want to store the variable in object
let name1 = "Sai";
let age = 25;

let person7 = { name1, age };
console.log(person7);
