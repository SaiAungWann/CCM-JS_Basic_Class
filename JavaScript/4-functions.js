// function & procedure

// procedure is the combinatio of statements

// function
// function is the procedure of the workflow.
// fucntion can return the result of user input.
// user can use the goble function or create the own function.
// after created the function the user must call the function to run.

// function structure
// function name (parameters) {
//    procedure;
// }

// function must use when the same paocedure of code need to run.
// example
function shopping(material, person) {
  console.log(person);
  console.log("buy a " + material);
  console.log("from shopping mall");
}
shopping("book", "Mg Mg");
// reuslt =>    Mg Mg
//              buy a book
//              from shopping mall

function add(num1, num2) {
  return num1 + num2; // use return keyword instead of console.log user can use console.log to see the result
  // if the function have no return statement it will be automatic underfine data type.
  // return must be use only one time in a single function
}
add(5, 7);
console.log(add); //result => [function: add]

//to directly see the result function can directly add into the variable
let add1 = add(6, 7);
console.log(add1); //result => 13

// home work => age calcular

function calAge(birthYear) {
  let age = 2024 - birthYear;
  console.log(age + " years old");
}
calAge(1997); //result => 27 years old

//defalt parameter
function test(aa, bb) {
  console.log(aa + bb);
}
test(2, 3); // result => 5 - a value is 2 and b is 3 so 2+3=5
test(2); // result => NaN because a value 2 and b is underfine
//here want to use the b as a defalt parameter

function test1(ab, ba = 0) {
  console.log(ab + ba);
}
test1(5); //result =>5 - ab value is 5 and ba is o.
test1(5, 7); //result => 12 - ab value is 5 and ba is 7.

//rest parameter
function restPra(a, b, ...c) {
  console.log(a); // result => a value is 2
  console.log(b); // result => b value is 3
  console.log(c); // result => c value is [4, 5, 6, 7, 8, 9]- (rest parameter)
}
restPra(2, 3, 4, 5, 6, 7, 8, 9);

//function statement
// function not only can use after it created but also can use before it.
// But must be create.
// Eg. for using function before create
name2("Aung Aung");
// other codes may be here
function name2(personName) {
  console.log(personName); // result => Aung Aung
}

// function expression
// function expression is the same as the variable concept
// because function is create in variable
// call the variable name when to use function
let Sayhi = function () {
  console.log("hello");
};
Sayhi(); // result => hello

//call back function
// to use more functions in function

function SayName(Name3, funs) {
  funs(); // this is call back function.
}
SayName("Aung Wann", function () {
  // function()will go to funs and than to funs(); and working
  console.log("Aung Aung");
});

function SayName1(name4, funs1) {
  let relust2 = funs1(name4);
  console.log(relust2);
}
SayName1("Aung Wann", function (name4) {
  // in function here can add more procedure for name4
  return name4;
}); // // result => Aung Wann

function twice(num3) {
  let result3 = num3 * 2;
  console.log(result3); // result => 10
}
twice(5);
// write shorter want to do something about the value of num3

function twice1(num3, modifine) {
  let result4 = modifine(num3) * 2;
  console.log(result4); // result => 22
}
twice1(5, function (num3) {
  return num3 + 6;
});

// arrow function
let sayHii = function () {
  console.log("hello");
};
sayHii();
// function is directly created in in variable can use arrow function
// EG.

let sayHii2 = () => {
  console.log("hello");
};
sayHii2();

// if the function only include single code no need to write {};
// if the function is return procedure no need to write return procedure because JS will auto return
// if there was a single parameter no need to write ()

//Eg.
let sayHii3 = (word) => word; // prettier extension is auto write ();
console.log(sayHii3);

let twice2 = (num4) => num4 * 2; //prettier extension is auto write ();
console.log(twice2);
