import Car from "./classes/Car.js";

let bmw = new Car("BMW", "5 Series", 2022, "Green", ["Heated seats", "Heads-up display"]);
let vw = new Car("VW", "ID.3", 2023, "Gray", ["Panoramic sunroof", "Voice assistant"]);
let toyota = new Car("Toyota", "Yaris Cross", 2023, "Red", ["Reversing camera", "Smartphone integration"]);

let myCarCollection = [
    bmw,
    vw,
    toyota
];

myCarCollection.forEach(function(car) {
    console.log(car.getDetails());
});