class Student {
    constructor(name) {
        this.name = name
        this.marks = []
    }

    addMark(mark) {
        if (mark < 0 || mark > 100) {
            throw mark + ": Invalid mark. Mark range is 0 to 100"
        }
        this.marks.push(mark)
    }
}

s1 = new Student("Ajay")
s2 = new Student("Nitin")
s1.addMark(100)
s1.addMark(95)
s2.addMark(80)
s2.addMark(60)

console.log(s1)
console.log(s2)

