// Get Element.
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const equality = document.querySelector(".equality");
let displayValue = document.querySelector(".output");


let firstInput = "0";
let secondInput = "0";
let selectedOperator = "";

// Calculation functions
function addition(a, b) {
    let result = a + b;
    return result;
}

function multiplication(a, b) {
    let result = a * b;
    return result;
}

function division(a, b) {
    let result = a / b;
    return result;
}

function subtraction(a, b) {
    let result = a - b;
    return result;
}


for (const number of numbers) {
    number.addEventListener("click", (event) => {
        if (event.target.innerHTML === "AC") {
            firstInput = "0";
            secondInput = "0";
            displayValue.textContent = firstInput;
        } else if (firstInput === "0" && event.target.innerHTML === ".") {
            firstInput += event.target.innerHTML; 
            displayValue.textContent = firstInput;
        } else if (firstInput === "0") { 
            firstInput = event.target.innerHTML;
            displayValue.textContent = firstInput;
        } else { 
            firstInput += event.target.innerHTML;
            displayValue.textContent = firstInput;
        }
    });
}  

for (const operator of operators) {
    operator.addEventListener("click", (event) => {
        if (displayValue.innerHTML !== "0") {
            if (selectedOperator !== "") {
                if (secondInput !== "0" && firstInput !== "0") {
                    if (selectedOperator === "+") {
                        secondInput = addition(+secondInput, +firstInput);
                        displayValue.innerHTML = secondInput;
                        firstInput = "0" 
                    } else if (selectedOperator === "*") {
                        secondInput = multiplication(+secondInput, +firstInput);
                        displayValue.innerHTML = secondInput;
                        firstInput = "0" 
                    } else if (selectedOperator === "/") {
                        secondInput = division(+secondInput, +firstInput);
                        displayValue.innerHTML = secondInput;
                        firstInput = "0" 
                    } else if (selectedOperator === "-") {
                        secondInput = subtraction(+secondInput, +firstInput);
                        displayValue.innerHTML = secondInput;
                        firstInput = "0" 
                    }
                } else if (secondInput === "0") {
                    secondInput = displayValue.innerHTML;
                    firstInput = "0" 
                }
            }
            selectedOperator = event.target.innerHTML;
        }    
    })
}


equality.addEventListener("click", () => {
if (secondInput !== "0") {
        if (selectedOperator === "+") {
            secondInput = addition(+secondInput, +firstInput);
            displayValue.innerHTML = secondInput;
            firstInput = "0" 
        } else if (selectedOperator === "*") {
            secondInput = multiplication(+secondInput, +firstInput);
            displayValue.innerHTML = secondInput;
            firstInput = "0" 
        } else if (selectedOperator === "/") {
            secondInput = division(+secondInput, +firstInput);
            displayValue.innerHTML = secondInput;
            firstInput = "0" 
        } else if (selectedOperator === "-") {
            secondInput = subtraction(+secondInput, +firstInput);
            displayValue.innerHTML = secondInput;
            firstInput = "0" 
        }
    }
})