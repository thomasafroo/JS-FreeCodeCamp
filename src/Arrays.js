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

//access multi-dimensional arrays with indices
var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13 ,14]];

var myData = myArray[0][0];
console.log(myData)
console.log(myArray[2][1])

// manipulate arrays with push()
var ourArray = ["Stimpson", "J", "cat"]
ourArray.push(["happy", "joy"])
// ourArray = ["Stimpson", "J", "cat", ["happy", "joy"]]

//setup
var myArray = [["John", 23], ["cat", 2]];

// only change code below this line
myArray.push(["dog", 3])

// pop
ourArray = [1,2,3];
var removedFromOurArray = ourArray.pop();

//setup
var myArray = [["Johm", 23], ["cat", 2]]
var removedFromOurArray = ourArray.shift();


var myArray = [["John", 23], ["dog", 3]]

var removedFromOurArray = myArray.shift();