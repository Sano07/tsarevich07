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
asd