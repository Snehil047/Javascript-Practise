// let weather = getWeather();
// console.log(weather);

// function getWeather() {
//   setTimeout(() => {
//     return "sunny";
//   }, 2000);
// }

// function getWeather() {
//   console.log("sunny");
// }

// writing a callback function for it

getWeather(weatherReceieved);

function getWeather(callback) {
  //gets another function which is a callback as a parameter.
  setTimeout(() => {
    callback("Sunny");
  });
}

function weatherReceieved(data) {
  // callback function
  let weather = data;
  document.body.innerHTML = weather;
}

const newYear = getWeather(weatherReceieved);

console.log(newYear); // undefined because of asynchronous code

//
//
//
//

// HOWEVER A BETTER WAY TO WRITE THIS IS USING PROMISES

//PROMISES
//PROMISES
//PROMISES
//PROMISES

//The then() method is used to attach callbacks to a promise. A promise is an object that represents the eventual completion or failure of an asynchronous operation. The then() method takes two arguments: a callback function to be executed when the promise is fulfilled, and a callback function to be executed when the promise is rejected.

// PROMISES ->  There are two parts to any promise, first is the "Promise Maker" , and 2nd is the "Promise Receiver."

//1. PROMISE MAKER ---->>

// The Promise object takes a function that is an asynchronous logic. All the async logic goes inside that function. The Function itself takes two Parameters (resolve, reject).
// There are 3 stages which a promise can have -> 1. Pending 2. Resolve 3. Reject

function getWeather1() {
  return new Promise(function (resolve, reject) {
    reject("Sunny");
  });
}

const promise1 = getWeather1();

console.log(promise1); // shows pending

promise1.then(
  (data) => {
    // then also takes a function, and it can take two parameters.
    console.log(`First Param ${data}`);
  },
  (data) => {
    console.log(`Second Param ${data}`); // second param will be called when we reject it.
  }
);

// If the above code looks messy, it can be a lot cleaner, first of all,  WE DON'T NEED THE promise1  VARIABLE, WE CAN DIRECTL USE THE .then() on the function itself.

// A cleaner way to create the same code ->

function getWeather2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Cloudy");
    }, 100);
  });
}

function onSuccess(data) {
  console.log(`On Resolve: ${data}`);
}

function onError(error) {
  console.log(`On Reject ${error}`);
}

// we can also do chaining of data and .then functions

getWeather2().then(getWeatherIcon).then(onSuccess, onError);

//ERROR Handling ->

// we can also use catch in place of onError, .catch(onError), it takes only one parameter and error handles the reject option. So instead of the above chain function, If we dont have error handler in our .then() block it will straight jump to catch() block.

// we also write this as ->

getWeather2().then(getWeatherIcon).then(onSuccess).catch(onError); //both code works the same. Catch will only work when reject is called from the promise function.

function getWeatherIcon(weather) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      switch (weather) {
        case "Sunny":
          resolve("Sun Emoji");
        case "Cloudy":
          resolve("Cloudy Emoji");
        case "Rainy":
          resolve("rainy Emoji");
        default:
          reject("No Emoji Found");
      }
    }, 100);
  });
}

// NEW EXAMPlE OF PRMOISES

function fun1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Sunny");
    }, 100);
  });
}

function fun2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Rainy");
    }, 100);
  });
}

function onSuccess(data) {
  console.log(`On Success: ${data}`);
}

function onError(errorcode) {
  console.log(`on Error: ${errorcode}`);
}

fun1().then(onSuccess, onError);
fun2().then(onSuccess, onError);

fun1().then(fun2).then(onSuccess).catch(onError); //straight jumps to catch()

// finally() -> another component of promises other than new Promise resolve, reject, then(),
// finally is yet another method that you can call and pass another function inside it.
// Its a piece of code that runs when EVERYTHING HAS RESLOVED

function onFinally() {
  console.log("We be done YO");
}

//PRACTISE MORE
