//Задание 1
let password = 'пароль';
let checkPassword = prompt ('Введите пароль');
if (password == checkPassword) {alert ('Пароль введен верно');}
else {alert ('Пароль введен не верно');}

//Задание 2
let c = prompt ("Введите число");
if (c > 0  && c < 10) {
  console.log('Верно');
} else {
  console.log('Не верно');
}

//Задание 3
let d = 8;
let e  = 108;
if (d >100 || e >100) {
  console.log ('Верно');
} else {
  console.log ('Не верно');
}

// Задание 4
let a = '2';
let b = '3';
console.log (Number (a) + Number (b));

//Задание 5
let monthNumber = Number(prompt ('Введите номер месяца'));
switch (monthNumber) {
  case 1:
  case 2:
  case 12:
    console.log ('Зима');
    break;
  case 3:
  case 4:
  case 5:
    console.log ('Весна');
    break;
  case 6:
  case 7:
  case 8:
    console.log ('Лето');
    break;
  case 9:
  case 10:
  case 11:
    console.log ('Осень');
    break;
  default:
    console.log ('Такого месяца нет');
    break;
}

