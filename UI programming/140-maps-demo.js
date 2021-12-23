students = new Map([
        ["Ajay", [100, 200, 300]],
        ["Priya", [80, 70, 90]]
    ]
)
students.set("Nitin", [40, 50, 60])
console.log(students.get("Ajay"))

console.log(students)

students.forEach(function (v, k, m) {
    console.log(k + ": " + v)
})