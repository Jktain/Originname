// 1)Напишите функцию printNumbers(from, to), которая выводит число
//     каждую секунду, начиная от from и заканчивая to.

// Сделайте два варианта решения.

// 1) Используя setInterval.
// 2) Используя рекурсивный setTimeout.

// Ответ: 
// 2) 
// function printNumbers(from, to) {
//     let i = from;
//     let timerId = setTimeout(function tick() {
//         console.log(i);
//         i++;
//         if(i <= to){
//             timerId = setTimeout(tick, 1000);
//         }
//     }, 1000);
// }

//1)
// function printNumbers(from, to) {
//     let i = from;
//     let timerId = setInterval(function() {
//         alert(i);
//         if (i == to) {
//           clearInterval(timerId);
//         }
//         i++;
//     }, 1000);
// }

// printNumbers(1, 9);

//------------------------------------------- 2 -------------------------------------------
// В приведённом ниже коде запланирован вызов setTimeout, а затем 
//     выполняется сложное вычисление, для завершения которого 
//     требуется более 100 мс.

// Когда будет выполнена запланированная функция?

// 1) После цикла.
// 2) Перед циклом.
// 3) В начале цикла.
// Что покажет alert?

// let i = 0;

// setTimeout(() => alert(i), 100); // ?

// // предположим, что время выполнения этой функции >100 мс
// for(let j = 0; j < 100000000; j++) {
//   i++;
// }

// Ответ: Любой вызов setTimeout будет выполнен только после того, 
//     как текущий код завершится.
// Последним значением i будет: 100000000.


//------------------------------------------- 3 -------------------------------------------


// Ответ:


//------------------------------------------- 4 -------------------------------------------


// Ответ:


//------------------------------------------- 5 -------------------------------------------


// Ответ: 


//------------------------------------------- 6 -------------------------------------------


// Ответ:


//------------------------------------------- 7 -------------------------------------------


// Ответ: 


//------------------------------------------- 8 -------------------------------------------


// Ответ:


//------------------------------------------- 9 -------------------------------------------


// Ответ: 


//------------------------------------------- 10 -------------------------------------------


// Ответ:


//------------------------------------------- 11 -------------------------------------------


// Ответ: 


//------------------------------------------- 12 -------------------------------------------


// Ответ:


//------------------------------------------- 13 -------------------------------------------


// Ответ:
