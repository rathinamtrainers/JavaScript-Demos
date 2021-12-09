function foo(score) {   // Parameter score gets value 100
    console.log("Before change: score = " + score)
    score += 10         // Local parameter score variable's value is changed to 110.
    console.log("After change: score = " + score)
}

score = 100
console.log("Before calling foo(): score = " + score)
foo(score)      // Pass value of score (100) to foo() function
console.log("After calling foo(): score = " + score)    // Global score value (100) is printed.
