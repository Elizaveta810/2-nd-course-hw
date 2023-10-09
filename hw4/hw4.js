// Задание 1
for (let i = 0; i < 2; i++) {
  console.log ("Привет")
}

// Задание 2
// Первый вариант решения 
for (let i = 1; i < 6; i++) {
  console.log(i)
}
// Второй вариант решения 
let i = 1;
while (i < 6) {
  console.log (i)
  i++
}
// Третий вариант решения
let i = 1;
do {
  console.log (i)
  i++
} while(i < 6)

// Задание 3
for (let i = 7; i < 23; i++) {
  console.log (i)
}

// Задание 4
const object = {
  Коля: 200,
  Вася: 300,
  Петя: 400,
}
for (const key in object) {
  console.log (`${key} - зарплата ${object[key]} доллоров`);
}

// Задание 5
let num = 0;
let n = 1000;
while (n/2 >= 50) {
  n = n/2;
  num++
} console.log (n)

// Задание 6
let fridey = 7;
do {
  console.log (`Сегодня пятница ${fridey} -е число. Необходимо подготовить отчет`)
  fridey += 7
} while (fridey <= 31)

