import Human from './classes/Human.js';
import Ninja from './classes/Ninja.js';
import Wizard from './classes/Wizard.js';

let bob = new Human();
let isabella = new Ninja();
let greta = new Wizard();

console.log("Bob:", bob.getStats());
console.log("Isabella:", isabella.getStats());
console.log("Greta:", greta.getStats());

isabella.attack(bob);
isabella.steal(bob);
greta.fireball(isabella);
greta.heal(bob);