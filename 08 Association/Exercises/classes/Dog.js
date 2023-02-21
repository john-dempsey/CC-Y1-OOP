import Canine from "./Canine.js";

class Dog extends Canine {
    constructor(_name, _age, _height) {
        super(_name, _age);
        this.height = _height;
    }

    makeNoise() {
        console.log("Making noise: woof woof ...");
    }
}

export default Dog;