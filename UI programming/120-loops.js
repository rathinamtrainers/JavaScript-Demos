const CARS = ["BMW", "Volvo", "Mercedes", "Fiat", "Ford", "Audi", "Suzuki"];

// Syntax: for (initialization; condition; update_statement) { <statements> }
console.log("for loop: model-1")
for (let i = 0; i < CARS.length; i++) {
    console.log((i+1) + ": " + CARS[i])
}
console.log("=============================");

console.log("for .. in loop: model-2")
for (let i in CARS) {
    count = parseInt(i) + 1
    console.log( count +  ": " + CARS[i])
}
console.log("=============================");

console.log("Array.forEach loop: model-3")
function myprint(value, index, array) {
    console.log((index+1) + ": " + value)
}
CARS.forEach(myprint)
console.log("=============================");

console.log("for...of loop: model-4")
count = 1
for (let car of CARS) {
    console.log(count + ": " + car)
    count++
}

let name = "Rathinam Trainers"
for (let c of name) {
    console.log(c)
}
console.log("=============================");



console.log("while loop: model-5")
let i = 0;
while (i < CARS.length) {
    console.log((i+1) + ": " + CARS[i])
    i++;
}
console.log("Done")

console.log("do..while loop: model-6")
i = 0;
do {
    console.log((i+1) + ": " + CARS[i])
    i++;
} while (i < CARS.length)
console.log("Done")

console.log("Printing odd numbers using while loop & break statement:")
i = 1
while (true) {
    console.log(i)
    i = i + 2
    if (i > 100)
        break
}

console.log("Using break & continue in while loop")
i = 1
while (true) {
    if (i % 2 != 0) {
        i = i + 1
        continue        // Break the iteration and proceed with next iteration
    }
    console.log(i)
    i = i + 1

    if (i > 100)
        break           // Break the loop and proceed with statement after the loop.
}
console.log("Done")