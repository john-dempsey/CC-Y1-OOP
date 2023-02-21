import Animal from "./Animal.js";

class Zoo {
    constructor (_name, _address) {
        this.name = _name;
        this.address = _address;
        this.animals = [];
    }

    getAnimals() {
        return this.animals;
    }

    addAnimal(_animal) {
        if (_animal instanceof Animal) {
            this.animals.push(_animal);
        }
        else {
            throw `Not an animal`;
        }
    }

    search(_name, _age) {
        let result = [];
        for (let i = 0; i != this.animals.length; i++) {
            let a = this.animals[i];
            if (a.name === _name && a.age === _age) {
                result.push(a);
            }
        }
        return result;
    }
}

export default Zoo;