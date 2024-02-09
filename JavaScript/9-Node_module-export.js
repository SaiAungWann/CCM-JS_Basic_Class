// node-module-export

// to connect and use function's data in JS file to another JS file

const PI = Math.PI;
function add(a, b) {
  return a + b;
}
function min(a, b) {
  return a - b;
}
module.exports = { min, add, PI }; // to use the data to another file need to export the data.. we care of the name of the file

// es-module
// es-module is the same with module.export but it work in .mjs file

// let assume we have two file
// math.mjs
// index.mjs

// in math.mjs
// export {file, data,...}
// export default add; // if want to export only file use default keyword

// in index.mjs
// import add from "./math.mjs"
// or
// import {file, data,...} from "./math.mjs"
