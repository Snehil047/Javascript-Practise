// fetch a request and recieve a response, thats the basic concept of it.
//Ask you shall recieve, seek and you shall find.

const response = fetch("someapi.com"); // it creates a request object behind the scenes

// now the same code can be more elaborated as (that runs behind the scenes) ->

// const request = new request("someapi.com", {
//   method: "GET",
// });

// const response1 = fetch(request); // this code is a more elaborated form of the above code [ const response = fetch(api)],

//fetch returns  promise, that is later then resolved into an response object.

const url = "http://worldtimeapi.org/api/timezone/Asia/Kolkata";

async function voilaH() {
  const response = await fetch(url);
  const data = await response.json(); //json is a asynchronous function , so we have to await it too.
  console.log(data);
}

voilaH(); //most API's return JSON

// some API's also need token, token is like a private password or signature.
// some API's also need token, token is like a private password or signature.
// some API's also need token, token is like a private password or signature.

// HOW TO SEND PARAMETERS WITH REQUEST ->
// HOW TO SEND PARAMETERS WITH REQUEST ->
// HOW TO SEND PARAMETERS WITH REQUEST ->
// GET Request Parameters.

//  ?api_token= is also a parameter that takes the api token of the user.
// this is a fect that takes parameters (authorization), without this, it won't work.
//Headers is also an object.

const urL = "http://worldtimeapi.org/api/timezone/Asia/Kolkata";

async function voilaH1() {
  const request = new request(urL, {
    Headers: {
      Authorization: "Bearer authKey123e",
    },
  });
  const response = await fetch(request);
  const data = response.json();
  console.log(data);
}

//ERROR HANDLING IN FETCH()
