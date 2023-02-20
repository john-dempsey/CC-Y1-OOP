import Cat from "./classes/Cat.js";
import Dog from "./classes/Dog.js";
import Lion from "./classes/Lion.js";
import Wolf from "./classes/Wolf.js";

let c = new Cat("Kitty", 5, "brown");
let d = new Dog("Fido", 7, "0.7m");
let l = new Lion("Elsa", 15);
let w = new Wolf("Wolfie", 4);

let pets = [
    c,
    d,
    l,
    w
];

for (let i = 0; i != pets.length; i++) {
    let p = pets[i];
    p.sleep();
    p.makeNoise();
    p.roam();
}
