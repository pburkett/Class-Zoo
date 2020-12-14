import Zoo from './models/Zoo.js'
import Aardvark from './models/Aardvark.js'
import Bandicoot from './models/Bandicoot.js'
import Cobra from './models/Cobra.js'
import Dog from './models/Dog.js'
import Elephant from './models/Elephant.js'
import Goldfish from './models/Goldfish.js'

let myZoo = new Zoo()

let animalList = []
animalList.push(new Goldfish("Mr. Bubbles", "3"),
    new Aardvark("Aardy", "7", 10),
    new Aardvark("Mr. Vark", "34", 15),
    new Bandicoot("Crash", "15", "incredibly fast", "WOAH"),
    new Cobra("Nagini", "777", "very"),
    new Dog("Fido", "9", true),
    new Elephant("Dumbo", "6", true),
    new Cobra("Mr. Slithers", "19", "none"),
    new Bandicoot("Cocoa", "15", "pretty fast", "wah")
)


console.log(animalList);
for (let animal in animalList) {
    let zooListKey = animalList[animal]['classification']
    myZoo[zooListKey].push(animalList[animal])
    animalList[animal].speak()

}
console.log(myZoo.rodent, myZoo.reptile, myZoo.pet, myZoo.large);

myZoo.printZoo('sound')

myZoo['rodent'][0].feed('ants')

