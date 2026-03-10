class Dog {
    constructor(name, breed, weight) {
        this.name = name;
        this.breed = breed;
        this.weight = weight;
    }
    bark() {
        console.log(`${this.name} Гавкает!`)
    }
    incrementWeight() {
        this.weight += 1
        console.log(this.weight)
    }
    decrementWeight() {
        this.weight -= 1
        console.log(this.weight)
    }
}

const dog1 = new Dog('He', 'dog', 10);
console.log(dog1)
dog1.incrementWeight()
dog1.incrementWeight()