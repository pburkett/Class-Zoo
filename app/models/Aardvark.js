import Animal from './Animal.js'

export default class Aardvark extends Animal {

    constructor(name, age, snoutLength) {
        super(name, age);
        this.favoriteFood = "ants"
        this.sound = "sniff sniff"
        this.diet = "bugs"
        this.classification = "rodent"
        this.snoutLength = snoutLength
    }
}