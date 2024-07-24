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

 задание №1
// for (let i = 5; i < 11; i++) {
//          console.log(i);
// }

 задание №2
// for (let i = 20; i > 10; i--) {
//          if (i === 13) {
//              break;
//              //continue  -- позволяет пропустить итерацию цикла
//     }
//     console.log(i);
// }

 задание№3

// for (let i = 2; i < 11; i++) {
//     if (i % 2 !==0) {
//         continue
//     };
//     console.log(i);
// }

 задание №4

// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }

// let abc1 = 2;

// while (abc1 < 16) {
//     abc1++;
//     if (abc1 % 2 === 0) {
//         continue;
//     } else {
//         console.log(abc1);
//     }
// }
задание №5
// let arr = [];

// for (let i = 5; i < 11; i++) {
//     arr.push(i);
// };
// console.log(arr);

задание №6
// let newArray = [...arr];  -- копирование массива
// console.log(newArray);

задание №7 
// Измените данный массив так, чтобы все числа были увеличены в 2 раза, а если попадается строка строка - то к ней было добавлено " - done".
// Для определения типа данных используйте typeof();
// Должно получиться: [ 10, 20, 'Shopping - done', 40, 'Homework - done' ]


// const data = [5, 10, 'Shopping', 20, 'Homework'];

// for (let i = 0; i < data.length; i++) {
//         if (typeof(data[i]) === 'number') {
//             data[i] = data[i] * 2;
//         } else if (typeof(data[i]) === 'string') {
//             data[i] = `${data[i]} - done`;
//         }
//     }

// console.log(data);