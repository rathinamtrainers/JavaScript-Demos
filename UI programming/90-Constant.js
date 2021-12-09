const number = 5

function foo() {
    const number = 10

    {
        const number = 20
        console.log("Inside Block: " + number)
    }

    console.log("Outside Block: " + number)

}

foo()
console.log("Global scope: " + number)