"use strict";

/*
Необязательное задание. 
Необходимо вывести горку в консоль (используя цикл for), как показано на
рисунке, только у вашей горки должно быть 20 рядов, а не 5:

x
xx
xxx
xxxx
xxxxx
*/

const str = "x";
let temp = "";
for (let i = 0; i < 20; i++) {
  temp += str;
  console.log(temp);
}
