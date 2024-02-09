//JavaScript data Structure

//when the data is store in variable and need so much data it will not ok cus need to create so much variable
// to solve this all the data are store in object and then store in object after that restore in variable
let people = [
  { name: "John", age: 28, gender: "Male" },
  { name: "Sai", age: 26, gender: "Male" },
  { name: "Nang", age: 25, gender: "Female" },
  { name: "May", age: 27, gender: "Female" },
];
// so the data can manage by using array method
let names = people.map((person) => {
  return person.name;
});
console.log(names); // result =>[ 'John', 'Sai', 'Nang', 'May' ]

let males = people.map((person) => {
  return person.gender === "Male";
});
console.log(males);

// search in JS
// let searchJS = prompt("searchPerson:");

// let filtter = people.filter((person) => {
//   return person.name.includes(searchJS);
// });
// console.log(filtter);

// Json => JavaScript Object Notation
// Json is the normal string data type. it mean json is a normal sentence that writing with object format
// It's use for programming language to transfer file to another programming language
// because every programming language have string data type
// So Json is one of the data sharing technology

// create own json
// must write with json format - write '  ' no space, no enter
// let person2 = '{name:"hlaing",age:18,haircolor:"black"}'; // this is the json format
let person3 = { name: "hlaing", age: 18, haircolor: "black" };
JSON.stringify(person3);
console.log(JSON.stringify(person3));

// json can store 6 nos. of data type
// string , number, boolean, array, object, null

// let assume person2 the json form other programming language need to use in javascript
// parse method

let obj = JSON.parse(person3); // create variable to store data from data
console.log(obj.name);
