


// <!-- // 1. ** getElementById**

//      //     returns the element as an object or null (if not found). -->

//      <!-- 2. **getElementsByClassName** 
    
//     return the element as HTML collection or empty collection (if not found)-->

//       <!-- 3. **getElementsByTagName**
      
//       return the element a sHTML collection or empty collection.-->




document.getElementById("Element's ID");

document.getElementsByClassName("multi-images");






let smallImages = document.getElementsByClassName("imgClass");

for (let i = 0; i < smallImages.length; i++){
  console.dir(smallImages[i]);
}

// getElementByTagName ->

document.getElementsByTagName("p")[1].innerText = "changed the paragraph using innerText and getElementbByTagName property."



// Query Selectors ->

// query selectors are very similar to getElementBy.. It allows us to use any CSS selector. It only selects the 1st object only. this is a minor differnce between querySelector and getElementBy which selects all the elements by its attribute.



document.querySelector('p'); //selects the first p element.
document.querySelector('#myId');  // select first element with id = myId.
document.querySelector('.myClass'); // select the first element with class = myClass

document.querySelectorAll("p"); //select all p elements.

console.dir(document.querySelector("div  a"));
console.dir(document.querySelectorAll("div  a"));  //gives a node list.


// Setting Content in Objects ->

// 1. innerText -> Shows the visible code contained in a node. Visible on the screen.

// 2. textContent -> Shows all the full text. As we've written in the HTML file. display none and hidden text will also be shown.

// 3. innerHTML -> Shows the full markup.






//Manupulating using these ->

//example -> changing the heading to underline heading.

let heading = document.querySelector('h1');

heading.innerHTML = `<u>${heading.innerText}</u>`;  //used backtics `` selected by ${}




//Manupulating Attributes ->



// 1. obj.getAttribute(attr);
// 2. obj.setAttribute(attr, value);  they both are getter and setters.




let img = document.querySelector('img');

img.getAttribute('id');

img.setAttribute('id', 'spidermo');   // id attribute changed. id value went from mainImg to spidermon.

let img1 = document.querySelector('img');

img.setAttribute('src', 'images/Spider-Man_characters.jpeg');  // the main image source changed from original source to the given source value.






//Manupulating Styles ->

//changing styles of elements ->



let docH1 = document.querySelector("h1");

docH1.style.color = "red";      //changed the color to red of h1
docH1.style.fontStyle = "italic";  // changed the font style to italic using attribute manipulation.

// changing the color of all the anchor tag of the aboutBox element.

let links = document.querySelectorAll('.aboutBox a');

for (i = 0; i < links.length; i++){
  links[i].style.cssTextolor = "yellow";         //always use [i] whenever you are using the .lenght property and i indexing property, else it wont work. It has to go to the index of each object to make the changes.
}     

//Note -> all the changes done in the above styles are dont in inline-css/styles not in the actual CSS file. Thats why we dont use style property that much to set styles.



// CLASS LIST ->

// Manupulating styles using ClassList.
// obj.classList
  
// A.  classList.add(); -> to add new classes.
// B.  classList.remove() -> to remove classes.
// c.  classList.contains() -> to check if class exists. and to turn on/off the classes. just like a switch.
// D.  classList.toggle() -> to toggle between add and remove.




let heading2 = document.querySelector('h2');
heading2.classList.add("green");  //changed the style of h2 attribute by adding a new class 'green', whose class is pre-defined in the css file with some other value and attributes.

heading2.classList.remove("green"); // removed the class green that was added above the line.





// NAVIGATION  ->

// a. parentElement -> shows the parent element of a node.
// b. children -> shows the child element of a node.
// c. prevoiusElementSibling/ nextElementSibling
  
// let us = document.querySelector('h3');

// us.parentElement;
// {/* <div class=​"aboutBox">​…​</div>​ */}
// let him = document.querySelector('.aboutbox');

// him.children;

// let ez = document.querySelector('.aboutBox');

// ez.children;
// // HTMLCollection(2) [h3, ul]0: h31: ullength: 2[[Prototype]]: HTMLCollection
// ez.child

// ez.childElementCount;
// 2



// all the above code is copied vai console just for reference in future.






// ** ADDING ELEMENTS **

//document.createElement('p');



let newPara = document.createElement('p');
newPara.innerText = "This paragraph is created via using createElement property and is written bu using innerText."

// now to insert it you have to use "Append Properties".




//a. appendChild(element); -> if u have to add inside an object in besting form then if you to use appendChild. It will add the new element at the bottom. append meas adding at the bottom.

let main = document.querySelector('body');  // INSERTING THE NEW VALUE CREATED.

main.appendChild(newPara);   // added the new paragraph (newPara) at the bottom of the body tag.





//b. append(element);  -> we can append a new string or new text using this.
// for example we already have a new para named newPara, now we can add more text in that using the append property.

newPara.append(" This new text is added via append property and is added to an already existing string.");




//c. prepend(element) -> as we know append always adds the new element in the last, but prepend is just opposite, it adds the new element in the starting. adds element in the start.


var newPara1 = document.querySelector('body');
newPara1.prepend(" This text is added via prepend that leds it to be added to the very start");


//d. insertAdjacent(position, element); -> defines where exactly you want to add them and which element.


var p = document.querySelector("p");

let button = document.createElement('button');

button.innerHTML = "Click MEEE!!!!!";

p.insertAdjacentElement('beforebegin', button); //added the button before paragraph.

//p.insertAdjacentElement('afterbegin',button);
//p.insertAdjacentElement('beforeend',button);
//p.insertAdjacentElement('afterend',button);



// REMOVING ELEMENTS

//a. removeChild(element);
//b. remove(element);

button.remove();  //removed the recently added button.






// DOM MANIPULATION FROM **SUPERSIMPLEDEV**



//-> innerHTML gives us control of the entire html of the document.

// document.body.innerHTML = 'hehehe';

// Method -> A method is a funvtion saved inside an object.

// document.querySelector();   // -> lets us get any element from the page and put inside JavaScript.

// inside () we put a string, that targets the first element of its matching string name.

console.log(document.querySelector('button'));  //gets the first button on the page.

// Note-> When an html object is in javascript it becomes an object. Here, buttton is an object.


console.log(document.querySelector('button').innerHTML);  

document.querySelector('button').innerHTML = 'Changed';


//Now if a page have multiple button or multiple properties of same name ->

console.log(document.querySelector('.js-button'));

console.log(document.querySelector('.js-button').innerHTML);   // also object are just values, so we can save them in a variable.

let aBtnElement = document.querySelector('.js-button');

console.log(aBtnElement);

aBtnElement.innerHTML = "sure";

// DOM combines HTML and Javascript together.



// PROCESS OF JAVASCRIPT ->

//1. Figure out what steps we need (algorithm)
//2. Convert these steps into code.


//EVENTS & EVENT Listeners

//clicks, keydowns = events
// onclick, onkeydown=> event Listners
