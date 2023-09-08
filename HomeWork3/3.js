"use strict";

/*
Необходимо попросить пользователя ввести три числа.
Необходимо создать функцию, в которую мы должны передать эти три числа.
Функция должна определить максимальное, среди переданных ей значение и 
вывести сообщение: "Максимальное значение среди чисел N1, N2, N3 равно N."

Примечание: Условимся, что пользователь всегда вводит корректные значения, 
три числа. Проверять их не нужно.
*/

const userNumber1 = Number(prompt("Введите первое число N1:"));
const userNumber2 = Number(prompt("Введите второе число N2:"));
const userNumber3 = Number(prompt("Введите третье число N3:"));
searchMax(userNumber1, userNumber2, userNumber3);

function searchMax(number1, number2, number3) {
  let numberMax = 0;
  if (number1 >= number2 || number1 >= number3) {
    numberMax = number1;
  }
  if (number2 > number1 || number2 >= number3) {
    numberMax = number2;
  }
  if (number3 > number2 || number3 > number1) {
    numberMax = number3;
  }
  console.log(
    `Максимальное значение среди чисел N1, N2, N3 равно ${numberMax}`
  );
}
