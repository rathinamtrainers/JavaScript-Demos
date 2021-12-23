let students = new Map();

function addMark(name, mark) {
    if (mark > 100) {
        throw "Invalid Mark - " + mark + ". Mark range is 0 to 100"
    }
    let marks = students.get(name)
    if (marks ==  undefined) {  // For new students, there won't be entry in Map. Hence, marks will be "undefined".
        marks = [mark]      // Create a new array with new mark as first item.
    } else {
        marks.push(mark)    // Student already there. Push the new mark into existing marks array of that student
    }
    students.set(name, marks)
}

function foo(name, mark) {
    try {
        addMark(name, mark)
        console.log(mark + " added to " + name)
    } catch (err) {
        console.log("Failed: " + err)
    }
}

foo("Ajay", 100)
foo("Ajay", 200)
foo("Nitin", 95)
foo("Nitin", 105)
console.log(students)
