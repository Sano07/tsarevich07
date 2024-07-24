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
// Заполните новый массив (result) числами из старого (arr). Количество элементов в массиве можно получить как arr.length, а к элементам обращаемся все так же: arr[0], arr[1] и тд.
// Должен получиться точно такой же массив

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

задание №8
// Разверните массив data наоборот при помощи цикла и запишите данные в массив result.
// Должно получиться: [ 'Homework', 20, 'Shopping', 10, 5 ]

// const data = [5, 10, 'Shopping', 20, 'Homework'];
// const result = [];

// for (let i = 1; i <= data.length; i++) {
//     result[i - 1] = data[data.length - i]
// }

// console.log(result);