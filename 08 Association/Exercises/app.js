import Cat from "./classes/Cat.js";
import Dog from "./classes/Dog.js";
import Lion from "./classes/Lion.js";
import Wolf from "./classes/Wolf.js";
import Zoo from "./classes/Zoo.js";

let c = new Cat("Kitty", 5, "brown");
let d = new Dog("Fido", 7, "0.7m");
let l = new Lion("Elsa", 15);
let w = new Wolf("Wolfie", 4);

let zoo = new Zoo("John's Zoo", "Main St, Dublin");
try {
    // zoo.addAnimal("Hello");
    zoo.addAnimal(c);
    zoo.addAnimal(d);
    zoo.addAnimal(l);
    zoo.addAnimal(w);
}
catch (error) {
    console.log(error);
}

let animals = zoo.search("Fido", 7);
if (animals.length === 0) {
    console.log("Not found");
}
else {
    for (let i = 0; i != animals.length; i++) {
        let a = animals[i];
        a.sleep();
        a.makeNoise();
        a.roam();
    }
}
