// if _ else
// depending on the condition and what you need to do or not

// if (condition) {
// statement 1 or more} // if only one statement no need to write{}
// else if (condition){
// statement 1 or more}
// else {
// statement 1 or more}

// let tired = prompt("are you tired? 'yes/no' : ");
// if (tired === "yes") console.log("Take a rest");
// else if (tired === "no") console.log("Go back to work");
// else console.log("please enter yes or no");

let product = [100, 500, 400, 300, 100, 600];
// let minus every 100 -20
let price = product.map((price) => {
  if (price === 100) price -= 30;
  return price;
});
console.log(price); // result => [ 70, 500, 400, 300, 70, 600 ]

let people = [
  { name: "john", age: 25, gender: "M" },
  { name: "Sai", age: 24, gender: "M" },
  { name: "Nang", age: 22, gender: "F" },
  { name: "May", age: 21, gender: "F" },
];
// let fill up Male and Female
people = people.map((person) => {
  if (person.gender === "M") person.gender = "Male";
  else if (person.gender === "F") person.gender = "Female";
  else person.gender = "unknown";
  return person;
});
console.log(people);
// result => [
//   { name: 'john', age: 25, gender: 'Male' },
//   { name: 'Sai', age: 24, gender: 'Male' },
//   { name: 'Nang', age: 22, gender: 'Female' },
//   { name: 'May', age: 21, gender: 'Female' }
// ]

// if _ else ternary operator

let age = 20;
let permission;
if (age > 18) {
  permission = "authorized";
} else {
  permission = "unauthorized";
}
console.log(permission); // result =>authorized

//use ternary operator because only one condition and one statement
let permission1 = age > 18 ? "authorized" : "unauthorized";
console.log(permission1); // result =>authorized
// let VariableName = condition ? if : else ;

// switch
// depend on the expression cases to work

// switch (expression)
//        case : 1
//        console.log ('one')
//        case : 2
//        console.log ('two')
//        brake;  // to brake the expression
//        case : 3
//        console.log ('three')
//        brake;
//        default: // if don't math with any expression
//        console.log ('this is default')

let people2 = [
  { name: "John", age: 28, gender: "M" },
  { name: "Sai", age: 26, gender: "M" },
  { name: "Nang", age: 25, gender: "F" },
  { name: "May", age: 27, gender: " " },
];
people2.map((person2) => {
  switch (person2.gender) {
    case "M":
      person2.gender = "Male";
      break;
    case "F":
      person2.gender = "Female";
      break;
    default:
      person2.gender = "unknown";
      break;
  }
});
console.log(people2);
