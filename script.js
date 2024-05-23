// Get Element.
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const equality = document.querySelector(".equality");
let displayValue = document.querySelector(".output");

let firstInput = "";
let secondInput = "";
let operator = "";

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


function operate(opr, a, b) {
    if (opr === "+") {
       return addition(a, b);
    } else if (opr === "-") {
        return subtraction(a, b);
    } else if (opr === "*") {
        return multiplication(a, b);
    } else if (opr === "/") {
        return division(a, b);
    }
}

function getDisplayValue() {
    displayValue = currentValue;
}


for (const number of numbers) {
    number.addEventListener("click", (event) => {
        if (event.target.innerHTML === "AC") {
            displayValue.textContent = 0;
        } else if (displayValue.innerHTML ==="0" && event.target.innerHTML === ".") { 
            displayValue.textContent += event.target.innerHTML;
        } else if (displayValue.innerHTML ==="0") { 
            displayValue.textContent = "";
            displayValue.textContent += event.target.innerHTML;
        } else { 
            displayValue.textContent += event.target.innerHTML;
        }
    })
}  

for (const operator of operators) {
    operator.addEventListener("click", (event) => {
        operator = event.target.innerHTML;
        if (displayValue.innerHTML !== "0") {
           firstInput = displayValue.innerHTML 
        }      
    })
}

// equality.addEventListener("click", () => {
//     secondInput.push(firstInput)
//     firstInput = "";
//     if (secondInput.length === 1) {
//         output.textContent = secondInput[0];
//     } else if (secondInput.length === 2) {
//         switch (selectedOperator) {
//             case "+":
//                 evalutedArr = Number(secondInput[0]) + Number(secondInput[1]);
//                 output.textContent = evalutedArr;
//                 secondInput = [];
//                 secondInput.push(evalutedArr);
//                 break;
        
//             default:
//                 break;
//         }
//     }
// //     let firstResult = secondInput[0];
// //     let another = +firstResult
// //     let secondResult = +firstInput;
// //    alert(another)
// //    alert(secondResult)
// })
