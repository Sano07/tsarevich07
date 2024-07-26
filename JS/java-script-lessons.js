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


