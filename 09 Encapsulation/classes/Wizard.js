import Human from "./Human.js";

class Wizard extends Human {
    constructor() {
        super();
        this.health = 50;
        this.intelligence = 8;
    }

    heal(_human) {
        if (_human instanceof Human) {
            _human.health += this.intelligence;
        }
    }

    fireball(_human) {
        if (_human instanceof Human) {
            _human.health -= this.intelligence * 3;
        }
    }
}

export default Wizard;