let myCar = {
    make: "Ford",
    model: "Mustang",
    year: 2022
}

myCar.options = [
    "Heated seats", 
    "Power steering", 
    "Cruise control"
]

myCar.options.push("Sun roof")

let user = {
    firstName: "John",
    lastName: "Jones",
    age: 25,
    hobbies: ["Gym", "Movies"],
    friends: [
        {
            firstName: "Anne",
            lastName: "Smith",
            age: 24
        },
        {
            firstName: "Daragh",
            lastName: "Quinn",
            age: 23
        },
        {
            firstName: "Sam",
            lastName: "Brady",
            age: 22
        }
    ],
    greeting() {
        console.log(`Hello, my name is ${this.firstName} ${this.lastName}`);
    }
}

console.log(user.friends[0].firstName);
