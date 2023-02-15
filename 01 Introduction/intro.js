let btn = document.getElementById("myBtn");
btn.addEventListener("click", function (e) {
    console.log("Ouch!!");
});

function timesTwo(inputNumber) {
    return inputNumber * 2;
}

function add(x, y) {
    let result = x + y;

    return result;
}

let multiply = function (x, y) {
    let result = x * y;

    return result;
};

let hello = function() {
    for(let i = 0; i < 10; i++) {
        console.log(i + "Hello");
    }
}

let goodbye = () => {
    for(let i = 0; i < 10; i++) {
        console.log(i + "Goodbye");
    }
}
function combinedLength(a, b) {
    let c = a + b;
    return c.length;
}

function countA(s) {
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        let ch = s.charAt(i);
        if (ch == "A" || ch == "a") {
            count++;
        }
    }
    return count;
}

console.log(timesTwo(10));







