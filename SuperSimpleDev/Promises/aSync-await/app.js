function getData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(46);
    }, 1);
  });
}

// const result = getData(); // await is only valid in async functions and the top level bodies of modules
// console.log(result);

// await can be used in functions that use async.
// no what we can do is ->

async function start() {
  const result = await getData(); //now i can start using the result as a variable.
  console.log(result);
}

// writing the same thing in .then() block
//remeber that first function is always resolve and 2nd is reject.

async function start2() {
  getData()
    .then((result) => {
      console.log(result);
    })
    .catch(() => {
      console.log("No result found");
    });
}

start();
start2();

// function text() {
//   const notShowOutside = "Will not work";
// }

// console.log(notShowOutside);  //results in -> notShowOutside is not defined.
//Note -> A variable defined inside a function will have the scope of that function only, it will not be accessible outside that function.

//NOW WRITING THE SAME WEATHER PROPLEM FROM THE PROMISES SECTION USING ASYNC AWAIT INSTEAD
//fetch is asynchrnous

async function start1() {
  const data = await fetch(
    "https://api.tomorrow.io/v4/weather/forecast?location=42.3478,-71.0466&apikey=uU9q35OgPgQIT50gibiwYHJ3030q06a"
  );
  const result = await data.json();
  console.log(result);
}

start1(); // yeah it works (somewhat)

//IMPORTANT POINTS ON ASYNC AWAIT

// 1. async and await must be used together.
// 2. async/await  only affects promise receiver.
// 3. You can await any function that returns a promise.
// 4. Any function can be coverted into async.

//here is an example of object method, converting it in async ->

const me = {
  async sayHello() {
    return "Ayo I'm HorseShit Yati, gwak gwak";
  },
};

console.log(me.sayHello()); // The promise is fulfilled

// 5. Async function returns a promise.

// 6. Error Handling With try/catch.
// 6. Error Handling With try/catch.
// 6. Error Handling With try/catch.
//IMPORTANT -> USE TRY CATCH WHEN YOU'RE USING ASYNC AWAIT.

function getData2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(46);
    });
  });
}

async function start3() {
  try {
    const result = await getData2();
    onSuccess();
    console.log(result); // works with resolve but not with reject, in reject it shows "Uncaught error (in Promise)"
  } catch (error) {
    onFailure();
    console.log(`ERROR : ${error}`);
  }
}
start3();

function onSuccess() {}
function onFailure() {
  console.log("It failed??");
}

// same code as above but in promises form.

getData2()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

//self practice -> of asyn await and promises ->

//main function
function getData3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(47);
    }, 3000);
  });
}

//callbacks functions ->
async function bruH() {
  try {
    const result = await getData3();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

bruH();

getData3()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
