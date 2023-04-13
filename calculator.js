let defaultVal = document.getElementsByClassName("display");
let total = 0;
// let defaultVal = '';
const button = document.getElementsByClassName("button");
let add = false;
let subtract = false;
let divide = false;
let multiply = false;
let numberOne = false;
let numberTwo = false;
let numberThree = false;
let numberFour = false;
let numberFive = false;
let numberSix = false;
let numberSeven = false;
let numberEight = false;
let numberNine = false;
let numberZero = false;

numberOne.addEventListener("click", function () {
    numberOne = true;
});

numberTwo.addEventListener("click", function () {
    numberTwo = true;
});

numberThree.addEventListener("click", function () {
    numberThree = true;
});

numberFour.addEventListener("click", function () {
    numberFour = true;
});

numberFive.addEventListener("click", function () {
    numberFive = true;
});

numberSix.addEventListener("click", function () {
    numberSix = true;
});

numberSeven.addEventListener("click", function () {
    numberSeven = true;
});

numberEight.addEventListener("click", function () {
    numberEight = true;
});

numberNine.addEventListener("click", function () {
    numberNine = true;
});

numberZero.addEventListener("click", function () {
    numberZero = true;
});

add.addEventListener("click", function () {
    add = true;
});

subtract.addEventListener("click", function () {
    subtraction = true;
});

divide.addEventListener("click", function () {
    divide = true;
});

multiply.addEventListener("click", function () {
    multiply = true;
});


    const addition = document.querySelector(".add");
button.addEventListener("click", function (input) {
    total += Number.parseInt(defaultVal);
});

const subtraction = document.querySelector(".subtract");
button.addEventListener("click", function (input) {
    total -= Number.parseInt(input);
});

const multiplication = document.querySelector(".multiply");
button.addEventListener("click", function (input) {
    total *= Number.parseInt(input);
});

const division = document.querySelector(".divide");
button.addEventListener("click", function (input) {
    total /= Number.parseInt(input);
});

const result = document.querySelector(".enter");
button.addEventListener("click", function () {
    defaultVal = total;
})

const one = document.querySelector(".one");
button.addEventListener("click", function () {
    if (numberOne) {
       defaultVal + '1';
       numberOne = false;
    }
    else if (numberTwo) {
        defaultVal + '2';
        numberTwo = false;
     }
     else if (numberThree) {
        defaultVal + '3';
        numberThree = false;
     }
     else if (numberFour) {
        defaultVal + '4';
        numberFour = false;
     }
     else if (numberFive) {
        defaultVal + '5';
        numberFive = false;
     }
     else if (numberSix) {
        defaultVal + '6';
        numberSix = false;
     }
     else if (numberSeven) {
        defaultVal + '7';
        numberSeven = false;
     }
     else if (numberEight) {
        defaultVal + '8';
        numberEight = false;
     }
     else if (numberNine) {
        defaultVal + '9';
        numberNine = false;
     }
     else if (numberZero) {
        defaultVal + '0';
        numberZero = false;
     }
    else if (divide) {
        total /= input;
        divide = false;
    }
    else if (multiply) {
        total *= input;
        multiply = false;
    }
    else if (subtract) {
        total -= input;
        subtract = false;
    }
    else if (add) {
        total += input;
        add = false;
    }
});


console.log(defaultVal);
