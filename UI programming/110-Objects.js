function print(course) {
    console.log("Course Name: " + course.name)
    console.log("Course Batch: " + course.batch)
    console.log("Modules:")
    for (module_index in course.modules) {
        console.log("- " + course.modules[module_index])

        if (module_index > 3)
            break
    }
}

function foo(course) {
    course.name = "Course name is hacked"
}

var fullStackCourse = {
    name: "Full Stack Developer Training",
    batch: "2021 Batch",
    modules: [
        "HTML/CSS/BootStrap",
        "JavaScript/NodeJS",
        "Java/SprintBoot",
        "ExpremeProgramming",
        "Angular",
        "MongoDB/Mariadb/Neo4J",
        "Serverless deployment"
    ]
}

print(fullStackCourse)
foo(fullStackCourse)
print(fullStackCourse)
