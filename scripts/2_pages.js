// ------ global variables?
// console.log(bfasts);

// ------ the DOM: Document Object Model
console.log(document);

// ------ querying the DOM for page elements
var header = document.querySelector("h1");
var button = document.querySelector("button");
var contain = document.querySelector(".container");

console.log(header);
header.innerText = "goodbye world!";

// ------ listening to events on elements, generating new nodes

var clicked = 0;
// thing.listen("event", someFunction);
button.addEventListener("click", function() {
  header.innerText = "good afternoon world!";
  clicked += 1;
  button.innerText = `Clicked ${clicked} times!`;

  var para = document.createElement("p");
  para.innerText = "This is my cool new paragraph";
  para.setAttribute("tabindex", 0);
  // accessibility thing: adding a "tabindex" attribute will make it accessible via tab on the keyboard, which might/might not be something you want
  contain.appendChild(para);
});

// ------ new: more events, altering classes
// this adds/removes an "active" class to the header depending
// on whether you're hovering over the button or not. toggling classes
// on elements is the most common way of changing CSS rules on
// an element using JS
button.addEventListener("mouseenter", function(e) {
  header.classList.add("active");
});

button.addEventListener("mouseleave", function(e) {
  header.classList.remove("active");
})