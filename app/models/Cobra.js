import Animal from './Animal.js'

export default class Cobra extends Animal {

    constructor(name, age, evilness) {
        super(name, age);
        this.favoriteFood = "rats"
        this.sound = "hsssssssss"
        this.diet = "rodents"
        this.classification = "reptile"
        this.evilness = evilness
    }
}