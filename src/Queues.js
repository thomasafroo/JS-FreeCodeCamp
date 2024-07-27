function nextLine(arr, item) {
    arr.push(item);
    return arr.shift();
}

var testArr = [1,2,3,4,5];

console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

// boolean values
function welcomeToBooleans() {
    return false;
}   

// use conditional logic with If statements
function ourTrueOrFalse(isItTrue) {
    if (isItTrue) {
        return "Yes, it's true";
    }
    return "No, it's false";
}

function trueOrFalse(wasThatTrue) {
    if (wasThatTrue) {
        return "Yes, that was true";
    }
    return "No, that was false";
}

console.log(trueOrFalse(true));

// comparison with the equality operator
function testEqual(val) {
    if (val==12) {
        return "Equal";
    }
    return "Not Equal";
}

// change this value to test
console.log(testEqual(10));

// setup 
function testStrict(val) {
    if (val) {
        return "Equal";
    }
    return "Not equal";
}

// change this value to test
console.log(testStrict(10))

/*
3 === 3
3 === '3'
*/
