// Asynchronous JavaScript
// JS is sync way (single - stage (or) synchronous way
// is automatic working step by step coding

// Asynchronous is one or more from all the codes will not working automatically and it will work by manage timing
// or working behind the other code
// ** Note => to read the block from CCM website -queue

// Promise
// promise is one of the asynchronous function which can help the code that can take so much time working behind the other code
// it means the other code will continuous working without waiting for the code that can take so much time.

// if writing with sync way
function syncWay() {
  let result = 0;
  for (let i = 0; i < 1000; i++) {
    // if writing 10000000000 can take so much time to run the other code below
    result += i;
  }

  return result;
}
console.log("first work");
console.log(syncWay()); // take so much time to finish the work
console.log("Important Work"); // this work is very important no time to wait until the upper code if finished

// to solve this need to use promise function
function asynchronous() {
  return new Promise((resolve, reject) => {
    // (resolve and reject) is the function that promise function automatic create // you can name what ever you want
    let result = 0;
    for (let i = 0; i < 1000000; i++) {
      // the work process that can take time must write before if function
      result += i;
    }
    if (result) {
      resolve(result);
    } else reject("I have an error");
  });
}
asynchronous().then((result) => {
  // .then to output the finished work
  console.log(result);
  console.log("finished");
});

asynchronous().catch((error) => {
  // .catch to output the unfinished work
  console.log(error);
});

// fetch API
// API is a website that created for developer for data transfer, used and create new data what ever they want
// can use the data that other developer created or can create by own
// for more detail => CCM block => API for beginers

// free API => json placeholder
// is not a usable data but can understand the work flow
// don't copy the id after /no.
// when copy the link and past to other window of browser will get with json format

// to use API json data

fetch("https://jsonplaceholder.typicode.com/posts").then((respond) => {
  console.log(respond);
});
// check the state in console
// if 200 it is ok if 404 it is a link error
// to get the data must write the json format
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((respond1) => {
    respond1
      .json()
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log("this is Json error");
      });
  })
  .catch((error) => {
    console.log("This is link error");
  });
// write this way need to write .catch two time and code is long

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((respond2) => {
    return respond2.json();
  })
  .then((data2) => {
    console.log(data2);
  })
  .catch((error1) => {
    console.log("this is error");
  });

// async - await => to write fetch and promise shorter

async function fecthToDos() {
  await fetch("https://jsonplaceholder.typicode.com/posts");
  let respond = await fetch("https://jsonplaceholder.typicode.com/posts"); // to store the return data
  let data = await respond.json();
}

// to use .catch and get the error use try {}  error handing process

try {
  async function fecthToDo() {
    let respond = await fetch("https://jsonplaceholder.typicode.com/posts"); // to store the return data
    console.log("hello");
    let data = await respond.json();
    console.log(data);
  }
} catch (error2) {
  console.log("this is error");
}

// coding style
// ALL cap => HELLO_WORLD => const NAME
// Snake case => hello-world => var & let name
// camel case => helloWorld => obj, method 's properties name
// capacital case => HelloWorld => class name

// googlt => search javaScript coding style
// prettier extension to use with IDE
