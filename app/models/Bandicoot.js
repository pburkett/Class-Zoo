import Animal from './Animal.js'

export default class Bandicoot extends Animal {

    constructor(name, age, speed, sound) {
        super(name, age);
        this.favoriteFood = "crickets"
        this.diet = "bugs"
        this.sound = sound
        this.classification = "rodent"
        this.speed = speed
    }
}