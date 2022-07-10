const add = (a, b) => +a + +b;
const substract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => {
    if(b == 0) return 'ERROR';
    return a / b;
}
const operate = (a, b, operator) => {
    switch(operator) {
        case '+': return add(a, b);
        case '-': return substract(a, b);
        case '×': return multiply(a, b);
        case '÷': return divide(a, b);
    }
};

let num1 = undefined, num2 = undefined, num = '';
let operator;
let calc = false;
let decimal = false;


const display = document.querySelector('.display');

const numbers = Array.from(document.querySelectorAll('.operand'));
numbers.forEach(number => number.addEventListener('click', () => {
    if(number.textContent === '.') {
        if(!decimal) decimal = true;
        else return;
    }
    num += number.textContent;
    if(!calc) num1 = num;
    else num2 = num;
    display.textContent = num;
}));

const operators = Array.from(document.querySelectorAll('.operator'));
operators.forEach(op => op.addEventListener('click', () => {
    if(!calc) {
        calc = true;
        operator = op.textContent;
    }
    else {
        num1 = operate(num1, num2, operator);
        operator = op.textContent;
        if(operator === '=') calc = false;
        display.textContent = num1;
    }
    decimal = false;
    num = '';
}));

const clear = document.querySelector('.clear');
clear.addEventListener('click', () => {
    display.textContent = 0;
    num1 = num2 = undefined;
    num = '';
    calc = decimal = false;
});