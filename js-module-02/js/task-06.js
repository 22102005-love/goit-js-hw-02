"use script";
let input;
const numbers = [];
let total = 0;
do {
  input = prompt("Введите число");
  input = Number(input);
  numbers.push(input);
} while (input !== 0);

console.log(numbers);
for (const number of numbers) {
  total += number;
}
console.log(`Общая сумма чисел равна ${total}`);
