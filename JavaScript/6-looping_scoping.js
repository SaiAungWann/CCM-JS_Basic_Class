// looping
// when need to use the same code for many times no need to write many just use looping
// type of loop
// 1 - for loop
// 2 - for of loop
// 3 - for in loop
// 4 - while loop
// 5 - do while loop

// while loop
// depend on the condition true while loop will continuous working if the condition is false while loop stop working
// need to careful infinity loop

let x = 0;
while (x < 10) {
  console.log("hello" + x);
  x++;
}
let people = ["Mg Mg", "Aung Aung", "Kyaw Kyaw", "Su Su"];
let a = 0;
while (a < people.length) {
  console.log("I am " + people[a]);
  a++;
}

// do while loop
// work the code one time before while loop is working
let b = 0;
do {
  console.log("Work" + b);
  b++;
} while (b < 5);

// for loop
// for loop is all the basically looping
for (let c = 0; c < 5; c++) {
  console.log("Hello " + c);
}
let people2 = ["Mg Mg", "Aung Aung", "Kyaw Kyaw", "Su Su"];
for (let d = 0; d < people2.length; d++) {
  console.log(people2[d]);
}

// for of loop
// mostly used in looping for array datas

let people3 = ["Mg Mg 1", "Aung Aung 1", "Kyaw Kyaw 1", "Su Su 1"];
for (person1 of people3) {
  console.log(person1);
}

// for in loop
// mostly used in looping for object
// also used in array

let person3 = {
  name: "Aung Wann", // name and age are obj's key
  age: 25, // " " and 25 are person3's key obj
};
for (key in person3) {
  console.log(person3[key]);
  console.log(`${key} is ${person3[key]}`);
}
// for in loop in array
let people4 = ["Mg Mg 1", "Aung Aung 1", "Kyaw Kyaw 1", "Su Su 1"];
for (key in people4) {
  console.log(`${key} is ${people4[key]}`);
}
// scooping
// globle scoop
let n = 0; // can use every where
// local scoop
{
  let m = 0;
} // can use in { } scoop only.
