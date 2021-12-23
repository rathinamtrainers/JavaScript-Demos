marks_arr = [100, 95, 100, 100, 86]
console.log(marks_arr)
console.log("Array size: " + marks_arr.length)


marks_arr.forEach(function (value, index, arr) {
    console.log("===>" + value)
})

// Set eliminates duplicate values.
const marks = new Set([100, 95, 100, 100, 86])
marks.add(70)
console.log(marks)
console.log("Set size: " + marks.size)

if (marks.has(95)) {
    console.log("marks set has 95")
} else  {
    console.log("marks set doesn't have 95")
}

marks.forEach(function(val, idx, ds) {
    console.log("****>> " + val)
})

for (let i of marks) {
    console.log(i)
}