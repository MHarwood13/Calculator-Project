
let total = 0;
let buffer = "0";
let previousOperator;

const display = document.querySelector(".display");

function buttonClick (value) {
    if (isNaN(parseInt(value))) {
        handleSymbol(value)
    } else {
        handleNumber(value)
    }
     rerender();
}

function handleNumber(value) {
    if (buffer ==="0") {
        buffer = value;
    }else {
        buffer += value;
    }
}

function handleMath(value) {
    if (buffer === "0") return;

    const intBuffer = parseInt(buffer);

    if (total === 0) total = intBuffer;
    else clearOperation(intBuffer);

    previousOperator = value;
    buffer = "0";
}

function handleSymbol(value) {
    switch(value) {
        case "C":
            buffer = "0";
            total = 0;
            break;
        case "=":
            if (previousOperator === null) return;
            clearOperation(parseInt(buffer))
            previousOperator = null;
            buffer = total;
            total = 0;
            break;
       case"←":
            if (buffer.length === 1) buffer = "0";
            else {
                buffer = buffer.substring(0, buffer.length - 1);
            }
            break;

        case"+":
        case"-":
        case"÷":
        case"x":
        handleMath(value);
        break;

    }

}

function clearOperation(intBuffer) {
    if (previousOperator === "+") {
        total += intBuffer;
    }
        else if (previousOperator === "-") {
            total -= intBuffer;
        }

        else if (previousOperator === "x") {
            total *= intBuffer;
        }

        else if (previousOperator === "÷") {
            total /= intBuffer;
        }
}

function rerender() {
    display.value = buffer;
}

function init() {
    document.querySelector(".calculator-container").addEventListener("click", function(event){
        buttonClick(event.target.value);
    })
}

init();
