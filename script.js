//Add 2 numbers
const add = (a, b) => +a + +b;
//Subtract 2 numbers
const substract = (a, b) => a - b;
//Multiply 2 numbers
const multiply = (a, b) => a * b;
//Divide 2 numbers, return error if b equal 0
const divide = (a, b) => {
    if(b == 0) return 'ERROR';
    return a / b;
}

//Calculate function
const operate = (a, b, operator) => {
    switch(operator) {
        case '+': return add(a, b);
        case '-': return substract(a, b);
        case '×': return multiply(a, b);
        case '÷': return divide(a, b);
    }
};


let num1, num2; //Operands
let num = ''; //Display number
let operator;
let calc = false; //True if exist num1
let decimal = false; //True if already exist a decimal point


const display = document.querySelector('.display');

const numbers = Array.from(document.querySelectorAll('.operand'));
numbers.forEach(number => number.addEventListener('click', () => {
    if(number.textContent === '.') {
        if(!decimal) decimal = true;
        else return;
    }
    num += number.textContent; //Add additional digit to num
    if(!calc) num1 = num; //Check if num1 exist
    else num2 = num; //else move to num2

    display.textContent = num;
}));

const operators = Array.from(document.querySelectorAll('.operator'));
operators.forEach(op => op.addEventListener('click', () => {
    //If num1 exist, store the variable and move to num2
    if(!calc) {
        calc = true;
        operator = op.textContent;
    }
    else {
        num1 = operate(num1, num2, operator); //Call the calculate function
        operator = op.textContent; //Read the next operator
        if(operator === '=') calc = false; //If the operator was =, reset the script
        display.textContent = num1;
    }
    decimal = false;
    num = '';
}));

const clear = document.querySelector('.clear');
clear.addEventListener('click', () => {
    display.textContent = 0;
    num = '';
    calc = decimal = false;
});