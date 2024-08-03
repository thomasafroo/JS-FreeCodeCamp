
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
    if (val === 7) {
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

// compare equality
function compareEquality(a, b) {
    if (a === b) {
        return "Equal";
    }
    return "Not Equal";
}
console.log(compareEquality(10, "10"));

// compare inequality
function testNotEqual(val) {
    if (val != 99) {
        return "Not Equal";
    }
    return "Equal";
}
console.log(testNotEqual(10));

// comparison with strict inequality
// setup
function testStrictNotEqual(val) {
    if (val !== 17) {
        return "Not Equal";
    }
    return "Equal";
}

// change this value to test
console.log(testStrictNotEqual(10));


function testGreaterThan(val) {
    if (val > 100) {
        return "Over 100";
    }

    if (val > 10) {
        return "Over 10";
    }

    return "10 or Under";
}

// Change this value to test
console.log(testGreaterThan(10));

// comparison with the >= operator
function testGreaterThanOrEqual(val) {
    if (val >= 20) {
        return "20 or Over";
    }

    if (val >= 10) {
        return "10 or Over";
    }

    return "Less than 10";
}

// Change this value to test
console.log(testGreaterThanOrEqual(10));

// less than
function testLessThan(val) {
    if (val < 25)  {
        return "Under 25";
    }
    if (val < 55) {
        return "Under 55";
    }
    return "55 or over";
}
console.log(testLessThan(10));


function testLogicalAnd(val) {
    if (val <= 50 && val >= 25) {
        return "Yes";
    }

    return "No";
}

testLogicalAnd(10);

function testLogicalOr(val) {
    if (val <= 50 || val >= 25) {
        return "Yes";
    }

    return "No";
}

testLogicalOr(10);

// test else
function testElse(val) {
    var result = "";
    // only change code below this line

    if (val > 5) {
        result = "Bigger than 5";
    } else {
        result = "5 or Smaller";
    }

    return result;
}

// else if
function testElseIf(val) {
    if (val > 10) {
        return "Greater than 10";
    } else if (val < 5) {
        return "smaller than 5";
    }
    return "Between 5 and 10";
}

// logical order in if else statements
function orderMyLogic(val) {
    if (val > 10) {
        return "Greater than 10";
    } else if (val < 5) {
        return "smaller than 5";
    } else {
        return "Greater than or equal to 10";
    }
    return "Between 5 and 10";
}

// golf code
var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes) {
    if (strokes == 1) {
        return names[0];
    } else if (strokes <= par - 2) {
        return names[1];
    } else if (strokes == par - 1) {
        return names[2];
    } else if (strokes == par) {
        return names[3];
    } else if (strokes == par + 1) {
        return names[4];
    } else if (strokes == par + 2) {
        return names[5];
    } else if (strokes >= par + 3) {
        return names[6];
    }


    return "Change Me";
}

golfScore(5, 4);