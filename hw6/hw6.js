//Задание 1
const numbs = [1, 5, 4, 10, 0, 3]
for (let i = 0; i <= numbs.length; i++) {
	if (numbs[i] === 10) break;
	console.log(numbs[i]);
}

//Задание 2
const numbs2 = [1, 5, 4, 10, 0, 3]
for (let i = 0; i <numbs2.length; i++) {
  if (numbs2[i] === 4) {
    console.log(i);
    break;
  }
}

//С помощью метода indexOf
const numbs2 = [1, 5, 4, 10, 0, 3];
console.log(numbs2.indexOf(4));

//Задание 3
const number3 = [1, 3, 5, 10, 20];
console.log (number3.join(' '));


//Задание 4
const arr4 = [];

for (let i = 0; i < 3; i++) {
	arr4[i] = []; 
}
	for (let j = 0; j < 3; j++) {
		arr4[i][j] = 1; 
};

console.log(arr);

//Задание 5
const numbs5 = [1, 1, 1];
numbs5.push (2, 2, 2);
console.log(numbs5);

//Задание 6
const arr = [9, 8, 7, 'a', 6, 5];
const numbs = arr.sort();
numbs.pop();
console.log(numbs);

//Задание 7
const arr7 = [9, 8, 7, 6, 5];
let userAnswer = Number (prompt ('Введите любое число, которое меньше 10'));
if (arr7.includes (userAnswer)) {
  alert ('Угадал');
} else {
  alert ('Не угадал');
}


//Задание 8
const str = 'abcdef';
const result = str.split('').reverse().join('');
console.log(result);

//Задание 9
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const res = arr1.concat(arr2);
console.log(res);


//Задание 10
let arr10 = [2, 5, 8, 1];

let sum10_1;
for (let i = 0; i < arr10.length - 1; i++) {
  console.log((sum10_1 = arr10[i] + arr10[i + 1]));
}

const sum10_2 = (a, b) => {
  let result = a + b;
  return result;
};

const lengthArr10 = arr10.length;
for (let i = 0; i < lengthArr10 - 1; i++) {
  console.log(sum10_2(...arr10));
  arr10.shift();
};

//Задание 11

let numb = [2, 4, 6, 8]
let res = numb.map (function(elem) {
  return elem ** 2;
})
console.log(res);

//Задание 12
const arr12 = ["слово", "", "слог", "длинное предложение", "буква"];

const getLengthWords = function (arr) {
  let lengthArr = arr.map(el => el.length);
  return lengthArr;
};

console.log(getLengthWords(arr12));

//Задание 13
function filterPositive(array) {
  let negativeArr = [];
  for (const value of array) {
    if (value < 0) negativeArr.push(value);
  };
  return negativeArr;
}

console.log(filterPositive([-1, 0, 5, -10, 56]));
console.log(filterPositive([-25, 25, 0, -1000, -2]));