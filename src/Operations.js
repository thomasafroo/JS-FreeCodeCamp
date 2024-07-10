 // Adding Numbers
 var sum = 10 + 10;
 console.log(sum);

 // Subtracting Numbers
 var difference = 45 - 0;

 // Multiplying numbers
 var product = 8 * 10;

 // Dividing numbers
var quotient = 66 / 0;
console.log(quotient);

// incrementing numbers
var myVar = 87;
myVar++;

// Decrementing numbers
myVar--;


// floating point
var ourDecimal = 5.7;

var myDecimal = 0.0009;

// multiply decimals
var product = 2.0 * 2.5;
console.log(product);

//divide decimals
var quotient = 4.4 / 2.0;

//finding a remainder
var remainder;
remainder = 11 % 3;

// strings
var myStr = "I am a \"double quoted\" string inside \"double quotes\"";
console.log(myStr);

// concatenation
var myStr = "This is the start. " + "This is the end."
console.log(myStr)

var ourStr = "i come first. ";
ourStr += "I come second.";

// Only change code below this line

var myStr = "This is the first sentence. "
myStr +=  "This is the second sentence."

console.log(myStr);

// appending variables to strings
var anAdjective = "awesome!"
var ourStr = "freeCodeCamp is "
ourStr += anAdjective

var someAdjective = "worthwhile"
var myStr = "Learning to code is "
myStr += someAdjective
console.log(myStr)

//length of a string
var firstNameLength = 0;
var firstName = "Ada";
firstNameLength = firstName.length;

var lastNameLength = 0;
var lastName = "Lovelace"

lastNameLength = lastName.length
console.log(lastNameLength)

// accessing characters
var firstLetterOfFirstName = "";
var firstName = "Ada"

firstLetterOfFirstName = firstName[0];

var firstLetterOfLastName = "";
var lastName = "Lovelace"

firstLetterOfLastName = lastName[0];
console.log(firstLetterOfLastName)

// strings are immutable (cannot be altered once created)
// the string can be still be changed, but each individual character cannot be changed
// analogy: a string is a cake you cannot cut

var myStr = "Jello World"
myStr = "Hello World"

// to find the last character of a string
var firstName = "Thomas"
var lastLetter = firstName[firstName.length - 1]
console.log(lastLetter)

// Store values in arrays
var ourArray = ["John", 23];

var myArray = ["Quincy", 1]
console.log(myArray)

// nested arrays
var ourArray = [["the universe", 42], ["everything", 101010]];

var myArray = [["Bulls", 23], ["White Sox", 45]]

// access array elements
var ourArray = [50,60,70]
var ourData = ourArray[0]

//setup
var myArray = [50,60,70]

var myData = myArray[0]
console.log(myData)

//modify array 
var ourArray = [18,64,99];
ourArray[1] = 45;

//setup
var myArray = [18,64,99];
myArray[0] = 45;