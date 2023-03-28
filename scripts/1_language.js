// ------ open the console and see this line
console.log("Hello world!");
// console.error("oh god it's broken");

// ------ variables
var index = 0;
console.log(index);
index = 1;
console.log(index); // logging to see if it changed

// ------ logging variables
var str = "another world...";
console.log(str);

var person = "Becky";
// prints out as: Hello, [person], how are you today?
console.log("Hello, " + person + ", how are you today?");

// ------ math + logic
var sum = 2 + 1 / 3 * 5 - 5;
console.log(sum);

console.log(2 == 3); // equality
console.log(index > 0 && 2 == 2); // and
console.log(index > 0 && 2 != 2); // inequality
console.log(index > 0 || 2 != 2); // or
console.log(2 === "2"); // sometimes, type is a problem

// ------ conditionals
if (index <= 0) {
  console.log("greater than!");
}
else if (index == "hello") {
  console.log("huh?");
}
else {
  console.log("less than!");
}

// ------ a function
// def print_two():

function printTwo(name, bfast) {
  var str2 = `${name} had ${bfast} for breakfast!`;
  console.log(str2);
}

// ------ calling functions
printTwo("Winnie", "waffles");
printTwo("Samantha", "nothing");


// ------ arrays / loops

// data as two separate arrays
var names = ["Winnie", "Samantha"];
var bfasts = ["waffles", "nothing"];

printTwo(names[0], bfasts[0]);

// data as a list of dictionaries
var dict = [
  {name: "Winnie", bfast: "waffles"},
  {name: "Samantha", bfast: "nothing"}
];

// for each element of the array (which is a dict), run function
for (var person of dict) {
  console.log(person);
  printTwo(person.name, person["bfast"]);
}