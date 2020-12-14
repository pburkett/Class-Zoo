import Animal from './Animal.js'

export default class Elephant extends Animal {

    constructor(name, age, fearfulBool) {
        super(name, age);
        this.favoriteFood = "carrot"
        this.sound = "HRUMPH"
        this.diet = "vegetation"
        this.classification = "large"
        this.fearfulBool = fearfulBool
    }
}

