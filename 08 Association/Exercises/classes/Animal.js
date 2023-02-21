class Animal {
    constructor(_name, _age) {
        this.name = _name;
        this.age = _age;
    }

    sleep() {
        console.log("Sleeping: zzzzz...");
    }
    roam() {
        console.log("Roaming");
    }
}

export default Animal;