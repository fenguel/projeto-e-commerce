var currentNumberWrapper = document.getElementById("currentNumber");

var currentNumber = 0;

function increment() {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
}

function decrement() {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
}


var currentNumberWrapper2 = document.getElementById("currentNumber2");

var currentNumber2 = 0;

function increment2() {
    currentNumber2 = currentNumber2 + 1;
    currentNumberWrapper2.innerHTML = currentNumber2;
}

function decrement2() {
    currentNumber2 = currentNumber2 - 1;
    currentNumberWrapper2.innerHTML = currentNumber2;
}