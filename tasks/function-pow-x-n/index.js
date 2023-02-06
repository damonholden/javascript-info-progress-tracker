import { pow } from './pow.js';

const number1 = Number(prompt('Give a number.'));
const number2 = Number(prompt('Give another number.'));

const result = pow(number1, number2);

alert(`${number1} raised to the power of ${number2} is ${result}`);
