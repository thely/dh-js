// ------ open the console and see this line
console.log("Hello world!");

// ------ variables
var index = 0;
index = 30;

// ------ logging variables
console.log(index);
index = "ice cream";
console.log(`Hi, my index is ${index}!`);

// ------ math + logic
console.log(4 - 8 + 8 * 7);
console.log(2 != 3);
console.log("rabbit" == "Rabbit");
console.log(2 == "2");

// ------ conditionals
if (index > 0) {
  console.log("big index!");
}
else {
  console.log("small index!");
}

// ------ a function
function printTwo(name, breakfast) {
  console.log(`${name} is going to eat ${breakfast} for breakfast!`);
}

// ------ calling functions
printTwo("Becky", "nothing");
printTwo("Jeremy", "pancakes");

// ------ arrays / loops
var deets = ["Becky", "Jeremy", "Shane"];

for (let person of deets) {
  printTwo(person, "nothing");
}

deets = [
  { name: "Becky", bfast: "nothing" },
  { name: "Jeremy", bfast: "pancakes" }
];

for (let line of deets) {
  printTwo(line.name, line.bfast);
}