import Feline from "./Feline.js";

class Cat extends Feline {
    constructor(_name, _age, _colour) {
        super(_name, _age);
        this.colour = _colour;
    }

    makeNoise() {
        console.log("Making noise: meow meow ...");
    }
}

export default Cat;