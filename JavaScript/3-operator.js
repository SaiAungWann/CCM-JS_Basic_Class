// expression, statement and operator

// expression is the single things doing to get the value eg. 1+2 = 3;
// statement is the combination of expressions eg let x = 4;

// operator
// 1 - arithmetic operator => +, -, x (or) * , /, % , ect.
// 2 - assignment => =, !
// 3 - compairsion => > , < ect.
// 4 - logical operator => to discuss the condition to do.

// arithmetic operator

// Operator	=>  Description
// +	    =>  Addition
// -	    =>  Subtraction
// *	    =>  Multiplication
// **	    =>  Exponentiation (ES2016)
// /	    =>  Division
// %	    =>  Modulus (Remainder)
// ++	    =>  Increment
// --	    =>  Decrement

// + => string + string = string , string + number = string
let string1 = "Hello";
let string2 = "Hello";

let arithmetic = string1 + string2; // relust => Hello Hello
let arithmetic2 = string1 + 25; // relust => Hello25

// - => string - string = number/ Nan , string - number = number/ Nan
let string3 = "hi";
let string4 = "50";

let arithmetic3 = string3 - string4; // relust => NaN
let arithmetic4 = string4 - 25; // relust => 25 (number)

// * or x => string * string = number/ Nan , string * number = number/ Nan
let string5 = "hi";
let string6 = "50";

let arithmetic5 = string5 * string5; // relust => NaN
let arithmetic6 = string4 * 25; // relust => 1250 (number)

// / and %  => string / string = number/ Nan , string / number = number/ Nan

let arithmetic7 = 4 / 2; // relust => 0
let arithmetic8 = 5 % 2; // relust => 1

// arithmetic operator short hand
// Operator	    => Example	        => Same As
// =	        => x = y	        => x = y
// +=	        => x += y	        => x = x + y
// -=	        => x -= y	        => x = x - y
// *=	        => x *= y	        => x = x * y
// /=	        => x /= y	        => x = x / y
// %=	        => x %= y	        => x = x % y
// **=	        => x **= y	        => x = x ** y

//operator procedure - search form google "operator procedure" and follow the table

// compairsion operator
// it is the boolean value - always display true or false
// Operator	=> Description
// ==	    => equal to
// ===	    => equal value and equal type
// !=	    => not equal
// !==	    => not equal value or not equal type
// >	    => greater than
// <	    => less than
// >=	    => greater than or equal to
// <=	    => less than or equal to
// ?	    => ternary operator

//Example
let text1 = "A";
let text2 = "B";
let result = text1 < text2; // result => true

let text3 = "20";
let text4 = "5";
let result2 = text1 < text2; // result => false

// logical Opreator
// Operator	=> Description
// &&	    => logical and
// ||	    => logical or
// !	    => logical not

// &&	    => logical and -> must true all the time
// false && true => false
// true && true => true

// ||	    => logical or -> one true include also work
// false || true => false
// true || true => true
