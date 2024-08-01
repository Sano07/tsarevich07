 КРАТКАЯ ЗАПИСЬ УСЛОВИЯ = УСЛОВИЕ ? ЧТО ЕСЛИ ДА : ЧТО ЕСЛИ НЕТ ******************************

// let num = 122;

// (num === 11) ? console.log('Правильно') : console.log('Увы');

 ЗАПИСЬ УСЛОВИЯ СТАНДАРТНЫМ СПОСОБОМ ******************************************************** 
// const abc = 3; zxc = 4; qwerty = 1;

// if (abc && qwerty) {
//     console.log('QWer')
// } else {
//     console.log('rewq')
// };


 ЦИКЛЫ **************************************************************************************

// let num1 = 66;

// while (num1 <= 70) {
//     console.log(num1);
//     num1++;
// }

// do {
//     console.log(num1);
//     num1++;
// }
// while (num1 <= 70)

// for (let i = 1; i < 8; i++) {
//     if (i === 7) {
//         break;
//         //continue  -- позволяет пропустить итерацию цикла
//     }
//     console.log(i);
// }

 ЦИКЛ В ЦИКЛЕ *******************************************************************************

// for (let i = 1; i < 8; i++) {
//     for (let j = 1; j < 8; j++) {
//         console.log(j);
//     };
//     console.log(i);
// };

ПОСТРОЕНИЕ ТРЕУГОЛЬНИКА +  *****************************************************************

// let result = '';
//     length = 7;

// for (let i = 1; i < length; i++) {

//     for (let j = 0; j < i; j++) {
//         result += "*";

//     }

//     result += '\n';
// }

// console.log(result);

МЕТКИ 

// first: for (let i = 1; i < 3; i++) {
//     console.log(`First cycle: ${i}`);
//     for (let j = 1; j < 3; j++) {
//         console.log(`Second cycle: ${j}`);
//         for (let k = 1; k < 3; k++) {
//             console.log(`Third cycle: ${k}`);
//             if (k === 2) continue first;
//         };
//     };
// };

ФУНКЦИИ 

// cтандартная функция

// function showFirstMassage() {
//     console.log('Hello');
// }

// showFirstMassage();

// аргумент ФУНКЦИИ

// function showFirstMassage(text) {
//     console.log(text);
// }

// showFirstMassage('Hello');

RETURN

// function calc(a, b) {
//     return (a + b);
//     console.log('121');  ---не будет выполняться , стоит после return
// }

// calc(4 , 3);

// function ret() {
//     let num = 50;
//     return num;
// }

// const anotherNum = ret();
// console.log(anotherNum);

---

функция вызывающая функцию с помощью return 
// const usdCarr = 20,
//       eurCarr = 26,
//       discount = 0.9;

// function convret(amount, curr) {
//     return(curr * amount);
// }

// function promotion(result) {
//     console.log(result * discount);
// }

// promotion(convret(500, usdCarr));

завершение функции с помощью return
// function test() {
//     for (let u = 0; u < 6; u++) {
//         console.log(u);
//         if (u === 3) return
//     }
// }

// test();




FUNCTION EXPRESSION 

// logger();  -- выполняться не будет, в данному случае функция еще не объявлена, использовать только после

// const logger = function() {
//     console.log('Hello')
// };

// logger();

СТРЕЛОЧНЫЕ ФУНКЦИИ

// const calc = (a, b) => { 
//     console.log('123');
//     return a + b
// }
//  console.log(calc(3, 3));

// const calc1 = (a, b) => a + b;         --- запись в случае короткой функици
// console.log(calc1(3, 3));

УНИВЕРСАЛЬНЫЕ ФУНКЦИИ

// const usdCarr = 20,
//       eurCarr = 26;

// function convret(amount, curr) {
//     console.log(curr * amount);
// }

// convret(500, usdCarr);
// convret(500, eurCarr);

МЕТОДЫ СТРОК и ЧИСЛЕЛ

length

// let str = 'test';
// let arr = [1, 2, 4];
// console.log(arr.length);

toUpperCase + toLowerCase

// let str = 'test';
// console.log(str.toUpperCase());

indexOf

// let fruit = 'Some fruit';
// console.log(fruit.indexOf("fruit"));

slice 

// const logg = 'Hello world';
// console.log(logg.slice(6, 11));

substring 

//console.log(logg.substring(6, 11));

substr  - передаем начало откуда нужно вырезать, и сколько символов

// console.log(logg.substr(6, 11));

---

Math.round(); - округление чисел

// const num = 12.2;
// console.log(Math.round(num));

parseInt() - переводит в number и округляет

// const test = "12.2";
// console.log(parseInt(test));

parseFloat() - переводит в number не округляет

// const test = "12.2";
// console.log(parseFloat(test));

МЕТОД TRIM ()

// обрезание пробелов с начала и с конца строки

// str.trim();

CALLBACK функции - функция которая должна выполниться после завершения предыдущей функции

// function learnJS(lang , callback) {
//     console.log(`Я учу: ${lang}`);
//     callback();
// }

// function done() {
//     console.log('Я прошел урок');
// }

// в качестве callback в функцию передается название, без вызова
// learnJS('JS', done);

ОБЬЕКТЫ

// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     }
// };

ПЕРЕБОР ОБЬЕКТА

 МЕТОД for in с примером перебора вложеного обьекта с счетчиком

// let counter = 0;

// for (let key in options) {
//     if (typeof(options[key]) === 'object') {
//         for (let i in options[key]) {
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);        
//             counter++;
//         }
//     } else {
//     console.log(`Свойство ${key} имеет значение ${options[key]}`);
//     counter++;
//     }
// }
// console.log(counter);

Object.keys - метод перевода ключей масива в массив + проверка длинны через length

// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     }
// };

// console.log(Object.keys(options).length);

РУЧНЫЕ МЕТОДЫ ОБЬЕКТОВ  

// const options = {
//         name: 'test',
//         width: 1024,
//         height: 1024,
//         colors: {
//             border: 'black',
//             bg: 'red'
//         },
//     maleTest: function() {
//         console.log('Test');
//     }
// };

// options.maleTest();

ДЕСТРУКТУРИЗАЦИЯ ОБЬЕКТОВ

// const options = {
//         name: 'test',
//         width: 1024,
//         height: 1024,
//         colors: {
//             border: 'black',
//             bg: 'red'
//         },
//     maleTest: function() {
//         console.log('Test');
//     }
// };

// const {border, bg} = options.colors;
// console.log(border);


