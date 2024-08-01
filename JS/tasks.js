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

задание №9

// Создайте функцию, которая будет на вход принимать 1 аргумент с именем человека и возвращать строку.
// Пример: вызов функции sayHello('Антон') возвращает строку "Привет, Антон!". В решении вызывать функцию не нужно, программа сделает это за вас.
// P.S. возвращать - это использовать ключевое слово return.

// function sayHello (name) {
//     return `Привет, ${name} !`;
// }

// console.log(sayHello('Саша'));

задание №10

// Создайте функцию, которая принимает в себя 1 аргумент в виде целого числа и возвращает массив из трех чисел: одно на 1 меньше, сам аргумент, и число на 1 больше.
// Пример: вызов функции returnNeighboringNumbers(5) возвращает массив в виде [4, 5, 6].

// function returnNumber (num01) {
//     let arr = [];
//         a = num01 - 1;
//         b = num01 + 1;

//     arr.push(a, num01, b);

//     return arr
// }

// console.log(returnNumber(7));

задание №11

// Создайте функцию, которая будет принимать в себя 2 аргумента, оба числа. Первое число - это база, второе число - это сколько раз нужно будет повторить это число в прогрессии. (Смотри пример ниже). Функция должна возвращать строку (или число в особых случаях, о которых ниже), где эти числа идут по порядку, разделенные тремя дефисами "---". После последнего числа их не должно быть. 
// Если второй аргумент не является числом, равен или меньше нуля - то возвращать просто первый аргумент. (Проверяем через оператор typeof)

// function getMathResult(number1, number2) {
//     if (typeof(number2) !== 'number' || number2 <= 0) {
//         return number1;
//     }

//     let str = '';

//     for (let i = 1; i <= number2; i++) {
//         if (i === number2) {
//             str += `${number1 * i}`;
//             // Тут без черточек в конце
//         } else {
//             str += `${number1 * i}---`;
//             // Это тоже самое, что и
//             // str = str + num * i + "---"
//         }
//     }

//     return str;
// }

// console.log(getMathResult(3, -5));

задание №12

// Создайте функцию, которая будет вычислять объем и площадь полной поверхности куба (тоже базовая математика, иногда используется в создании анимаций). 
// Эта функция принимает в себя целое число со значением длины ребра куба. Ответ выведите в формате строки, который изображен в примерах.
// Если в функцию попал неправильный аргумент или вычислить значения невозможно - вернуть строку "При вычислении произошла ошибка"

// function mathSqure(data) {

//     let volume;
//     let area;

//     if (data === '' || isNaN(data) || data <= 0 || data == null || !Number.isInteger(data)) {
//         return "При вычислении произошла ошибка";
//     } else {
//         volume = data * data * data;
//         area = 6 * (data * data) 
//     }

//     return `Объем куба: ${volume}, площадь всей поверхности: ${area}`
// }
// console.log(mathSqure(12));

задание №13

// Напишите функцию, которая будет определять номер купе по переданному ей номеру места. Наглядно:
// Функция принимает только целое число от 1 до 36.
// Если переданный аргумент не число, отрицательное или дробное - возвращается сообщение:
// "Ошибка. Проверьте правильность введенного номера места"
// Если число 0 или больше 36, то сообщение: "Таких мест в вагоне не существует"

// function placeTrain (data) {

//     let result;
    
//     if (data === '' || isNaN(data) || data <= 0 || data == null || !Number.isInteger(data)) {
//         return "Ошибка. Проверьте правильность введенного номера места";
//     } else {
//         data <= 4 ? result = 1 : 
//             data > 4 && data <= 8 ? result = 2 : 
//                 data > 8 && data <= 12 ? result = 3 : 
//                     data > 12 && data <= 16 ? result = 4 :
//                         data > 16 && data <= 20 ? result = 5 :
//                             data > 20 && data <= 24 ? result = 6 : 
//                                 data > 24 && data <= 28 ? result = 7 :
//                                     data > 28 && data <= 32 ? result = 8 :
//                                         data > 32 && data <= 36 ? result = 9 :
//                                             result = "Таких мест в вагоне не существует";
//     } 

//     return result
// }
// console.log(placeTrain(12));

// function getCoupeNumber(seatNumber) {
//     if (typeof (seatNumber) !== 'number' || seatNumber < 0 || !Number.isInteger(seatNumber)) {
//         return "Ошибка. Проверьте правильность введенного номера места";
//     }

//     if (seatNumber === 0 || seatNumber > 36) {
//         return "Таких мест в вагоне не существует";
//     }

//     return Math.ceil(seatNumber / 4);
// }

задание № 14

// Создайте функцию, которая принимает в себя целое число минут и возвращает время в нужном формате строки. (Смотри пример). Обратите внимание на окончание слова "час" - оно меняется в зависимости от цифры. 
// Если вместо аргумента приходит не число, дробное или отрицательное число - функция возвращает строку "Ошибка, проверьте данные"
// Внимание! Давайте пока ограничимся максимум 600ю минутами (10 часов).

// function convertTime(minutes) {
//     function getCorrectForm(number, forms) {
//         let lastDigit = number % 10;
//         let lastTwoDigits = number % 100;

//         if (lastDigit === 1 && lastTwoDigits !== 11) {
//             return forms[0];
//         } else if ((lastDigit >= 2 && lastDigit <= 4) && !(lastTwoDigits >= 12 && lastTwoDigits <= 14)) {
//             return forms[1];
//         } else {
//             return forms[2];
//         }
//     }

//     if (minutes === '' || isNaN(minutes) || minutes < 0 || minutes == null || !Number.isInteger(minutes)) {
//         return "Ошибка, проверьте данные";
//     } else {
//         let hour = Math.floor(minutes / 60);
//         let minyt = minutes % 60;

//         let hourForm = getCorrectForm(hour, ["час", "часа", "часов"]);
//         let minuteForm = getCorrectForm(minyt, ["минута", "минуты", "минут"]);

//         let resultHour = hour > 0 ? `Это ${hour} ${hourForm} ` : "";
//         let resultMin = minyt > 0 ? `${minyt} ${minuteForm}` : "";

//         return resultHour + resultMin || "0 минут";
//     }
// }

// console.log(convertTime(191));

задание № 15
// Напишите функцию, которая принимает в себя 4 числа и возвращает самое большее из них. 
// Если один из аргументов не является числом или их меньше 4 - возвращается 0. Дробные числа разрешены.

// function findMax(a, b, c, d) {
//     let args = [a, b, c, d];

//     if (!args.every(el => typeof el === 'number') || args.length <= 3) {
//         return "0";
//     }

//     let result = Math.max(...args);
//     return result;
// }
// console.log(findMax(34, 44, 12));