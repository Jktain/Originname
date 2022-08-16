// 1) Возможно ли создать функции A и B в примере ниже, где объекты 
//      равны new A()==new B()?
// function A() { ... }
// function B() { ... }

// let a = new A;
// let b = new B;

// alert( a == b ); // true

// Ответ: Да, возможно.
// Если функция возвращает объект, то вместо this будет возвращён
//     этот объект. Например, они могут вернуть один и тот же объект
//     obj, определённый снаружи:

// let obj = {};

// function A() { return obj; }
// function B() { return obj; }

// alert( new A() == new B() ); // true

//-------------------------------- 2 -----------------------------------
// Создайте функцию-конструктор Calculator, который создаёт объекты 
//     с тремя методами:

// read() запрашивает два значения при помощи prompt и сохраняет их
//     значение в свойствах объекта.
// sum() возвращает сумму введённых свойств.
// mul() возвращает произведение введённых свойств.

// Ответ: 

// function Calculator () {
//     this.read = function () {
//         this.a = +prompt('Enter a');
//         this.b = +prompt('Enter b');
//     };
//     this.sum = function () {
//         return this.a + this.b;
//     };
//     this.mul = function () {
//         return this.a * this.b;
//     };
// }

// let calculator = new Calculator();
// calculator.read();

// alert( "Sum=" + calculator.sum() );
// alert( "Mul=" + calculator.mul() );

//-------------------------------- 3 -----------------------------------
// Напишите функцию-конструктор Accumulator(startingValue).

// Объект, который она создаёт, должен уметь следующее:

// 1) Хранить «текущее значение» в свойстве value. Начальное значение 
//     устанавливается в аргументе конструктора startingValue.
// 2) Метод read() использует prompt для получения числа и прибавляет 
//     его к свойству value.
// Таким образом, свойство value является текущей суммой всего, что 
//     ввёл пользователь при вызовах метода read(), с учётом 
//     начального значения startingValue.

// Ответ:

// function Accumulator(startingValue) {
//     this.value = startingValue;
//     this.read = function () {
//         this.value += +prompt('Enter value');
//     };
// }

// let accum = new Accumulator(2);
// accum.read();
// alert(accum.value);

//-------------------------------- 4 -----------------------------------
