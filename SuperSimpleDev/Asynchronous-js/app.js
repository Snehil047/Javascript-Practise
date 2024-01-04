// var pizza;

// function orderPizza() {
//   console.log("Order Pizza");
//   pizza = "Pizza";
//   console.log("Pizza Was Ordered");
// }

// orderPizza();
// console.log(`Eat ${pizza}`); // closure, a function after runnin ga lways have the value

// but now if we ->

// var pizza;

// function orderPizza() {
//   console.log("Order Pizza");
//   setTimeout(() => {
//     pizza = "Pizza";
//     console.log(`${pizza} is ready`);
//   }, 2000);

//   console.log("Pizza Was Ordered");
// }

// orderPizza();
// console.log("Call Yati");
// console.log(`Eat ${pizza}`); // Eat Undefinded, the runner doesn't wait for the setTimeout before moving to the next line. Because setTimeout is an asynchronous function.

// However, the above is not a good way to write this code ->
// Here's how you can do it with call backs

function orderPizza(callback) {
  setTimeout(() => {
    const pizza = "Pizza";
    callback(pizza); // you have to pass the parameter to the other function that needs a parameter.
  }, 2000);
}

function pizzaReady(pizza) {
  // this is the callback function
  console.log(`Eat the ${pizza}`);
}

orderPizza(pizzaReady);
console.log("call Yati");

// There's a really good example of Asynchronous code which we unknowingly use very oftenly -> We know that there exists a function but when it will be called is unknown or uncertain.

window.addEventListener("click", callbackFunction);

function callbackFunction() {
  console.log("Clicked");
}

// What is eventListner -> addEventListner is an attribute that is like 'Onclick', but we dont write 'on' -> it take two parameters as input, 1st which is (event -> like 'click', "Keydown" etc. ) and 2nd is the function that will run on the event happening.
