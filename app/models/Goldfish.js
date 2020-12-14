import Animal from './Animal.js'

export default class Goldfish extends Animal {

    constructor(name, age) {
        super(name, age);
        this.favoriteFood = "grapes"
        this.sound = "blup blup"
        this.diet = "fish food"
        this.classification = "pet"
    }
}