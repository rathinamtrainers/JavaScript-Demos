class Dog {
    constructor() {
        this.legs = 4
        this.hasTail = true
    }
    bark() {
        // ...
    }
}

class Labrador extends Dog {
    constructor() {
        super();
        this.temperment = "Soft"
        this.ear = "Blend"
    }
    bite(){

    }

}

class Rottweiler extends Dog {
    constructor() {
        super();
        this.temperment = "Aggressive"
        this.ear = "Blend"
    }
    bite(){

    }

}

class GermanShepard extends Dog {
    constructor() {
        super();
        this.temperment = "Aggressive"
        this.ear = "Erect"
    }

    bite(){

    }
}



class Client {

}

class Student extends Client {

}

class ConsultingClient extends Client {

}