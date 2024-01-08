document.body.append("My new Thingy");

const myHeader = document.createElement("h1");
document.body.appendChild(myHeader);
myHeader.innerText = "Your new header is here";

// creating a timer

const newD = new Date();

function dateTell() {
  const newD = new Date();
  setInterval(() => {
    myHeader.innerText = `${newD.getHours()}: ${newD.getMinutes()}: ${newD.getSeconds()}`;
  }, 1000);
}

setInterval(dateTell(), 3000); // it doesn't work, fix later.

// function dateTellInt() {
//   setInterval(() => {
//     dateTell();
//   }, 1000);
// }

// dateTellInt();

// ToDo App

const input = document.createElement("input");

input.placeholder = "add Your ToDo here";

document.body.appendChild(input);

const button1 = document.createElement("button");

button1.innerText = "ADD";

document.body.appendChild(button1);

// as of now the button does'nt do anything, se we're gonna add some eventlistners to it.

button1.addEventListener("click", () => {
  const divEl = document.createElement("div");
  divEl.innerText = input.value;
  document.body.appendChild(divEl);
  input.value = "";
});

// however the above method is amatuer and is not in semantic HTML.  Lets make the same in semantic hmtl ->

const form = document.createElement("form");
document.body.appendChild(form);

const input1 = document.createElement("input");
input1.placeholder = "ToDo here";
form.appendChild(input1);

const button2 = document.createElement("button");
button2.innerText = "ADD";
button2.role = "ADD";
form.appendChild(button2);

const list = document.createElement("ul");
document.body.appendChild(list);

const removeElement = (el) => {
  el.remove();
};

form.onsubmit = (event) => {
  event.preventDefault(); // it is neccessery because forms by default redirect u to another page.
  const li = document.createElement("li");
  list.appendChild(li);
  li.innerText = input1.value;
  li.onclick = removeElement.bind(null, li);
  input1.value = "";
};

// done.

//  Now we'll add (remove todo) button to remove todo. (in above code, added)

const newButton = document.createElement("button");
newButton.innerText = "Delete";
form.appendChild(newButton); //delete button doesn't work, fix later.
