// to use the data export from another js file
// need var to store and need to use require (./file name) keyword

const { min, add, PI } = require("./9-Node_module-export");

console.log(min(6, 2));
console.log(add(2, 3));
console.log(PI);
