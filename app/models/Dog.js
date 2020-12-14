import Animal from './Animal.js'

export default class Dog extends Animal {

    constructor(name, age, cuddlyBool) {
        super(name, age);
        this.favoriteFood = "bacon"
        this.sound = "bark!"
        this.diet = "dog food"
        this.classification = "pet"
        this.cuddlyBool = cuddlyBool
    }
}