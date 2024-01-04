 let variableName = 'Welcome to Variables';

console.log(variableName);
 
variableName = 'Hello!';

console.log(variableName);




// string

const exampleString = 'hello, world!';
console.log(exampleString);

const singleQuotes = 'hello';
const doubleQuotes = "HEllo";
// const backticks = `Helloww`;


console.log(singleQuotes);
console.log(doubleQuotes);
// console.log(backticks);


// there is absolutely no differnce betwwen single and double quotes
// they are exactly the same. they are known as simple strings. however backtick is a complex string.

//embed differnt variables into string

const name = 'jane';
const backticks = `Hello, ${name}!`;

console.log(backticks); 

// Numbers

const wholenumber = 5;
const decimalnumber = 0.5;

const result = wholenumber + decimalnumber;

console.log(wholenumber);
console.log(decimalnumber);
console.log(result);

// Booleans
// Either true(yes/1) or false(no/0, dont add '' in boolean

const isCool = true;

console.log(typeof isCool);

// we can add if/else statements using boolean

const iscool = true;

if (iscool) {
  
  console.log("Hi man, your're cool");

}
else {
  
  console.log(" Nah, man")
}





const age = 20;

console.log(age > 17);

//null

null

let agee = null;

agee = 20

console.log(agee);

//Undefined= a variable that has not been assigned a value is called undefined.
// typeof  null is actually object. this a bug in js.

let x;

console.log(x);


// Objects ( Most Important)
// stores collection of data, are used to group variables.l

const person = {
  name: 'John',
  ageee: 25,
}

console.log(person);

// dot notation gives us just the value.

console.log(person.name);

// array

const arr = [1, 2, 3, 4];
console.log(arr);

const date = new Date();
console.log(date);

// dynamically typed js

let message = 'hello there';

console.log(message);

message = 5;

console.log(message);


// Comparison OPERATORS

const a = 10;
const b = 10;

console.log(a > b);
console.log(a < b);
console.log(a >= b);

// is equal

console.log(a == b); // loose eqauality
console.log(a != b); // loose inequality

// strict equality

console.log(a === b);
console.log(a !== b);
  
console.log(5 == "5"); // here "5 is a string whereas 5 is a number"
console.log(5 === "5"); // loose eqaulity above.

// compares values and data types, returns true only if both of them are the same.

//loose eqaulity doesnt compare data types.


// LOGICAL OPERATORS

// AND && => All operands are true => TRUE
console.log(true && true);
console.log(true && false);

// OR || => at least one operand is true => True
console.log(true || false);
console.log(false || false);
console.log(true || true);

// NOT ! => reverses the boolean value
console.log(!false);
console.log(!true);

// IMPORTANT

// LOGIC AND CONTROL FLOW

// if else statement


const ageeee = 19;

if (ageeee > 18) {
  console.log("You can enter the club, Welcome!");
} else if (ageeee === 18) {
  console.log("You just turned 18, welcome to the club!");
} else {
  console.log("Grow up kiddo!!");
}

// While Loop

let i = 0;

while (i < 10) {
  console.log(i);
  i++;
}

// For Loop

// for([initialization]; [condition]; [final-expresssion]){code-block}

for (let i = 0; i < 10; i++) {
  console.log(i);
}


// FUNCTIONS

// A BLOCK OF CODE => Performs a task

// A function declaration (defining a function)
function square(number) {  //function name is square
  return number * number;
}

// A function call (invoking/ calling/ executing a function)

const resultt = square(7);

console.log(resultt);

// A function declaration

// function name(parameters) {
//   //statements
// }

// A function name

 const naam = function (params) { }

// // AN arrow Expression

 const naame = (params) => { }

 naame(); // we mostly use arrow expression function.






function sayHi(namee) {
  console.log(`Hi, ${namee}!`);
  }

sayHi('Joe'); // calling/invoking the function

// every function return undefined unless stated

function add(a, b) {      //declaration
  return a + b;
}

const resulttt = add(2, 2);  // calling of function
console.log(resulttt);


function test() {
  return true;       // always the first return statement is evaluated
  return false;      // never executed
}

const bool = test()  
console.log(bool);


// Arrow Functions MOST IMPORTANT // are more important than regular functions.

const squaree = (number) => {    // squree is the function name
  return number * number;   
}  // as there is no console.log in the function, u must create a seperate variable to store the function result value.

const product = squaree(5);  // here product is the variable name that we created to store the value.

console.log(product);


// Supersimple DEV

// Shortcuts for If-statement

// ternary opeartaor ?:
// guard operator &&
// Default Operator ||

true ? 'truthy' : 'falsy'  // u can also add variables to the front and save the value there.

const result1 = true ? 'truthy' : 'falsy'
console.log(result1);

// its a shortcut way to write if else statement like

if (true) {
  'truthy'
} else {
  'falsy'
}


// Guard operator &&

false && console.log("Hello"); // as u can see it doesnt even execute the right side. the execution stops just on the falsy value. short cicuit

// also we can save this into a variable

const message1 = false && 'Hello';
console.log(message1);

// its a shortcut to statement like

//  if(condition){
//     console.log("Hello")
// }

// Default Operator ||

const currency = "INR" || "USD";
console.log(currency);

const currency1 = undefined || "USD";
console.log(currency1);

// its a shortcut to if statement like

// let currency2;

// if (!condition) {
//   currency2 = "USD";
// }






// FUNCTIONS (SIMPLEDEV)

// normal function

function function1() {
  console.log("Hello there");
  console.log(2 + 2);
}

function1(); // go to the rock paper scissors page

// return = gets value out of the function
// Parameter = puts a value into a function


//Parameters

function calculateTax(parameter1, taxPercent) {
  console.log(parameter1 * taxPercent)
}

calculateTax(2000, 0.2);
calculateTax(5000, 0.7);
calculateTax(1000);
