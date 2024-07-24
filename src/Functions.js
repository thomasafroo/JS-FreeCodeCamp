// Example

function ourReusableFunction() {
  console.log("Heyya, World");
}

ourReusableFunction();

function reusableFunction() {
  console.log("Hi world");
}

reusableFunction();

// passing values as arguments
function ourFunctionWithArgs(a, b) {
  console.log(a - b);
}
ourFunctionWithArgs(10, 5); // outputs 5

// Only change code below this line.
function functionWithArgs(a, b) {
  console.log(a + b);
}

functionWithArgs(10, 5);

// scope

var myGlobal = 10;

function fun1() {
  // assign 5 to oopsGlobal here
  oopsGlobal = 5; // since there is no 'var' it automatically becomes global
}

// only change code above this line
function fun2() {
  var output = "";
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}

fun1();
fun2();

//local scope and functions
function myLocalScope() {
  var myVar = 5;
  console.log(myVar);
}

myLocalScope();

// global vs local scope in functions
var outerWear = "T-shirt";

function myOutfit() {
  var outerWear = "sweater";

  return outerWear;
}

console.log(myOutfit());
console.log(outerWear);
