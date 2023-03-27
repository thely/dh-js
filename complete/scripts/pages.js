// ------ global variables?
console.log(deets);

// ------ the DOM: Document Object Model
console.log(document);

// ------ querying the DOM for page elements
var button = document.querySelector("button");
var text = document.querySelector("h1");
var region = document.querySelector(".container");

var clicked = 0;

// thing.addEventListener("someInteraction", someFunction);

// ------ listening to events on elements, generating new nodes
button.addEventListener("click", function(e) {
  clicked++;
  button.innerText = `Clicked ${clicked} times!`;
  text.innerText = "Everything is different now.";

  console.log(e.target);

  var para = document.createElement("p");
  para.innerText = "This is a new paragraph.";
  para.setAttribute("tabindex", 0);
  region.appendChild(para);
});


// ------ more events, altering classes
button.addEventListener("mouseenter", function(e) {
  text.classList.add("active");
});

button.addEventListener("mouseleave", function(e) {
  text.classList.remove("active");
})