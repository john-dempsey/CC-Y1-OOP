import Human from "./Human.js";

class Ninja extends Human {
    constructor() {
        super();
        this.health = 80;
        this.strength = 4;
        this.stealth = 10;
        this.intelligence = 7;
    }

    steal(_human) {
        if (_human instanceof Human) {
            _human.health -= this.stealth;
            this.health += this.stealth;
        }
    }

    runAway() {
        this.health -= 30;
    }
}

export default Ninja;