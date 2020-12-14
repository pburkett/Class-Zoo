export default class Animal {

    constructor(name, age) {
        this.name = name
        this.age = age

    }
    speak() {
        console.log(`${this.name} says ${this.sound}!`);
    }
    feed(food) {
        if (food == this.favoriteFood) {
            console.log(`${this.name} LOVES ${food}`);
        } else if (food == this.diet) {
            console.log(`${this.name} enjoyed ${food}`);
        } else {
            console.log(`${this.name} refused to eat ${food}`);
        }
    }

}
