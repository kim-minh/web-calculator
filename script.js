//Add 2 numbers
const add = (a, b) => +a + +b;
//Subtract 2 numbers
const substract = (a, b) => a - b;
//Multiply 2 numbers
const multiply = (a, b) => a * b;
//Divide 2 numbers, return error if b equal 0
const divide = (a, b) => {
    if(b == 0) return 'ERROR';
    return +(a / b).toFixed(2);
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

let num1 = 0, num2 = undefined, num = '';
let operator;
let calc = false; //True if exist num1
let decimal = false; //True if already exist a decimal point


const display = document.querySelector('.display');
const updateDisplay = () => {
    if(!calc) num1 = num; //Check if num1 exist
    else num2 = num; //else move to num2
    display.textContent = num;
}

const numbers = Array.from(document.querySelectorAll('.operand'));
numbers.forEach(number => number.addEventListener('click', () => {
    clear.textContent = 'C';
    if(number.textContent === '.') {
        if(!decimal) decimal = true;
        else return;
    }
    if(num.length > 6) return;
    num += number.textContent; //Add additional digit to num
    updateDisplay();
}));

const operators = Array.from(document.querySelectorAll('.operator'));
operators.forEach(op => op.addEventListener('click', () => {
    //If num1 exist, store the variable and move to num2
    if(!calc) {
        calc = true;
        operator = op.textContent;
    }
    else if(num2 !== undefined) {
        let ans = operate(num1, num2, operator); //Call the calculate function
        operator = op.textContent; //Read the next operator
        if(operator === '=') calc = false; //If the operator was =, reset the script

        if((ans + '').length > 7) display.textContent = ans.toExponential(1); //Display in scientific notation if length > 6
        else display.textContent = ans; //Round to 2 decimal places

        num1 = ans;
        num2 = undefined;
    }
    else operator = op.textContent;
    decimal = false;
    num = '';
}));

const clear = document.querySelector('.clear');
clear.addEventListener('click', () => {
    if(clear.textContent === 'AC') {
        num1 = 0;
        calc = false;
    } 
    else clear.textContent = 'AC';
    display.textContent = 0;
    num2 = undefined;
    num = '';
    decimal = false;
});

const sign = document.querySelector('.sign');
sign.addEventListener('click', () => {
    if(num === '') return;
    num = num > 0 ? `-${num}` : num.replace('-', '');
    updateDisplay();
});

const percent = document.querySelector('.percent');
percent.addEventListener('click', () => {
    num /= 100;
    updateDisplay();
});