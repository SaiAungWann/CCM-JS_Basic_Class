// Array and Objects

// Objects
// Object is very important because JS is constructed with objects.
// Object is a normal Noun with can move or do something which is call functin for method in programming.
// Every Object have their own property and method
// object can use stantand or global method which already include together whith Js or can create by our own.

// Array is one of the standard object already include in JS
// Array can store varrious data types and datas which varable can do a single storage.
// Eg.
let array = ["dog", 25, 1.2, true, null, "etc."];
console.log(array);
// if want to output the length can use .length keyword.
console.log(array.length);

// result => 6 ['dog', 25, 1.2 , true, null, 'etc.']
// length are=>[    0,   1,  2 ,   3 ,   4,     5]
// click => _proto_ to see the method can use in array

// if want to output the length only.
console.log(array[0]); // result => dog

// array length can store directly in variable
let bobo = array[0];
console.log(bobo);

// data can add in the created array
array[7] = "something";
console.log(array);
// data also can overide in the created array
array[2] = 2.4;
console.log(array);
// output array length
// array length call index nos.
console.log(array.length - 1); // result => 7

// Nested Array
// Nested Array mean there were one or more in array in one array
let array1 = [
  ["a", "b", "c"],
  [1, 2, 3],
];
console.log(array1);

// to output only one index
console.log(array1[0][2]); // result => c

//spread opreator
// spread opreator can use to add the datas into array in the form of single array don't want to become nested array
// if do not use the spread opreator need to write like this
let data1 = [1, 2, 3];
let data2 = [4, 5, 6];
let result5 = [data1, data2]; // result will be nested array
console.log(result5);
// result => [ [ 1, 2, 3 ], [ 4, 5, 6 ] ]
// use spread operator ... infort of the data want to input
let result6 = [...data1, ...data2];
console.log(result6); // result =>[ 1, 2, 3, 4, 5, 6 ]

//De-sturcturing
// de-structuring is the way to destruct the array into the sigle variable
let dests = ["Mg Mg", 25, "TTU"];
// if do not use de-structuring need to write like this
let name = dests[0];
let age = dests[1];
let school = dests[2];
console.log(name, age, school); //result => Mg Mg 25 TTU

// by de-structuring
let [name4, age1, school1] = dests;
console.log(name4, age1, school1); //result => Mg Mg 25 TTU

// Array Basci Method
// can  check array method in _proto_
let animals = ["dogs", "cats", "lions"];

// **method and function are the same just different in name because array is comming from the JS objects
// push method
animals.push("bird"); // add one more data at the end for the array
console.log(animals); // result => [ 'dogs', 'cats', 'lions', 'bird' ]

// pop method
animals.pop(); // remove the data at the end of the array
console.log(animals); // result => ["dogs", "cats", "lions"];

//shift method
animals.shift(); // remove the data at the start of the array
console.log(animals); // result => ["cats", "lions"];

//unshift method
animals.unshift("newDogs"); // add new data at the start of the array
console.log(animals); // result => [ 'newDogs', 'cats', 'lions' ]

//indexOf method
let cats = animals.indexOf("cats"); // will return the index no. of the data so need to store in new variable
console.log(cats); // result => 1

// join method
let string = animals.join("-"); // make all the data in array into the string data type, sparater can add-in () if not it will auto add , .
console.log(string); // result => newDogs-cats-lions

// splice method
animals.push("new1", "new2", "new3", "new4"); // to see clearly how slice is work
console.log(animals); // result =>["newDogs", "cats", "lions", "new1", "new2", "new3", "new4"];
animals.splice(0, 2); // splice is to delete the data from index no.1 to index no.3
console.log(animals); // result => [ 'lions', 'new1', 'new2', 'new3', 'new4' ]

// map method
// to change all the single datas in the  array in the same things like editing or others.
// mostly use with call back function

let nums = [0, 1, 2, 3, 4, 5, 6];
let newaNum = nums.map((num1) => {
  return num1 + 100;
});
console.log(newaNum);
// result =>[100, 101, 102,103, 104, 105, 106]

let name5 = ["John", "Chri", "Mg Mg"];
let personName = name5.map((namep) => {
  return "Mr. " + namep;
});
console.log(personName); // result => [ 'Mr. John', 'Mr. Chri', 'Mr. Mg Mg' ]

// filter method
// to filter out the data according the condition
let nums1 = [0, 1, 2, 3, 4, 5, 6];
let filterNos = nums1.filter((num2) => {
  return num2 % 2 === 0; // to fine the remainder 0 when it divided by 2
});
console.log(filterNos);

//reduce method
// to edit the array datas step by step to get the result of only one data
// Eg. to sum [0,1,2,3,4,5] - 0+1=1, 1+2=3, 3+3=6, 6+4=10, 10+5=15 so the final answer is 15
// reduce method provide two parameter (prev, current) and use call back function

let reduce = nums1.reduce((prev, current) => {
  return prev + current;
});
console.log(reduce); // reult =>21
