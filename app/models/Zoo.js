export default class Zoo {

    constructor() {
        this.rodent = []
        this.reptile = []
        this.pet = []
        this.large = []

        this.animals = {
            rodents: this.rodent,
            reptiles: this.reptile,
            pets: this.pet,
            larges: this.large
        }
    }
    printZoo(attribute) {
        for (let classification in this.animals) {
            console.log(`${classification}:`);
            for (let animalKey in this.animals[classification]) {
                let animal = this.animals[classification][animalKey]
                console.log(animal[attribute]);
            }

        }
    }
}