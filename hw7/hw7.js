//Задание 1
const str = 'js';
const strUpper = str.toUpperCase();
console.log (strUpper);

//Задание 2

const searchStart = (arr, st) => {
  const p = arr.filter (item => item.toLowerCase().startsWith(st.toLowerCase()));
  const o = p.map ((item) => {
    return item.toLowerCase();
  });
  console.log (o);
}
searchStart(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко'); 
searchStart(['яблоко', 'груша', 'гриб', 'огурец'], 'гру');
searchStart(['Дом', 'Банк', 'Больница', 'Театр'], 'Кино');

//Задание 3
const number = ( 32.58884);
console.log (Math.floor(number));
console.log (Math.ceil(number));
console.log (Math.round(number));

//Задание 4
let arr = [52, 53, 49, 77, 21, 32];
let max = Math.max(...arr);
let min = Math.min(...arr);
console.log(max);
console.log(min);

//Задание 5

function getRandomInt (minValue, maxValue) {
  return Math.random();
}                    
console.log(getRandomInt(1, 10));

//Задание 6
function getRandomArrNumbers (num) {
  const arrLength = Math.floor (num / 2);
  const result = [];
  
  for (let i = 0; i < arrLength; i++) {
    const randomNum = Math.floor (Math.random() * num );
    result.push(randomNum);
  }
  return result;
}

console.log(getRandomArrNumbers (7));
console.log(getRandomArrNumbers (12));


//Задание 7

function randomInt (minValue, maxValue) {
  return Math.round(Math.random() * (maxValue - minValue) + minValue);  
  }  
  console.log (randomInt (20, 35))
  

 //Задание 8
  let currentDate = new Date("25 October 2023");
  console.log(currentDate); 

      
  
  //Задание 9 
  const currentDate = new Date();
  currentDate.setDate(73)
  const res = currentDate.getDate() ;
  console.log (res)

  //Почему если делать так, то выводит милисекунда
  const days = 73;
  const currentDate = new Date();
  const res = (currentDate.setDate(currentDate.getDate() + days));
  console.log (res)



  const currentDate = new Date(); 
  currentDate.setDate(currentDate.getDate() + 73);


 //Задание 10
  
  const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
  const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
  "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
  
  let myDate = new Date();
  
  function formatTime (myDate) {
    
    const date = myDate.getDate().toString().padStart(2, '0');
    const month = myDate.getMonth();
    const year = myDate.getFullYear();
    const day = myDate.getDay();

    const hour = myDate.getHours().toString().padStart(2, '0'); 
    const minute = myDate.getMinutes().toString().padStart(2, '0'); 
    const second = myDate.getSeconds().toString().padStart(2, '0'); 

  return `Дата: ${date} ${months[myDate.getMonth()]} ${year} это ${days[myDate.getDay()]} 
  Время: ${hour}:${minute}:${second}` 
  }

console.log(formatTime (myDate));