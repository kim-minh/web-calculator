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


const display = document.querySelector('.display');

const numbers = Array.from(document.querySelectorAll('.operand'));
numbers.forEach(number => number.addEventListener('click', () => {
    num += number.textContent;
    if(!calc) num1 = num;
    else num2 = num;
    display.textContent = num;
}));

const operators = Array.from(document.querySelectorAll('.operator'));
operators.forEach(op => op.addEventListener('click', () => {
    if(!calc) {
        calc = true;
        num = '';
        operator = op.textContent;
    }
    else display.textContent = operate(num1, num2, operator);
}));

const clear = document.querySelector('.clear');
clear.addEventListener('click', () => {
    display.textContent = 0;
    num1 = num2 = undefined;
    num = '';
    operator = '';
    calc = false;
});