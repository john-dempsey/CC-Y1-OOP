class Human {
    constructor() {
        this.health = 100;
        this.strength = 3;
        this.stealth = 3;
        this.intelligence = 3;
    }

    attack(_human) {
        if (_human instanceof Human) {
            _human.health -= this.strength;
        }
    }

    getStats() {
        return `
        Health: ${this.health}
        Strength: ${this.strength}
        Stealth: ${this.stealth}
        Intelligence: ${this.intelligence}`;
    }
}

export default Human;