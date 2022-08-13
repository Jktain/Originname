// Для начала давайте научим нашего пользователя user здороваться:

// let user = {
//   name: "Джон",
//   age: 30
// };

// user.sayHi = function() {
//   alert("Привет!");
// };

// user.sayHi(); // Привет!
// Здесь мы просто использовали Function Expression (функциональное 
//     выражение), чтобы создать функцию для приветствия, и присвоили 
//     её свойству user.sayHi нашего объекта.
// Затем мы вызвали её. Теперь пользователь может говорить!
// Функцию, которая является свойством объекта, называют методом этого 
//     объекта.
// Итак, мы получили метод sayHi объекта user.
// Конечно, мы могли бы заранее объявить функцию и использовать её в 
//     качестве метода, примерно так:

// let user = {
//   // ...
// };

// сначала объявляем
// function sayHi() {
//   alert("Привет!");
// }

// затем добавляем в качестве метода
// user.sayHi = sayHi;

// user.sayHi(); // Привет!

//-------------------- Сокращённая запись метода -----------------------
//Существует более короткий синтаксис для методов в литерале объекта:

// эти объекты делают одно и то же (одинаковые методы)

// user = {
//   sayHi: function() {
//     alert("Привет");
//   }
// };

// сокращённая запись выглядит лучше, не так ли?
// user = {
//   sayHi() { // то же самое, что и "sayHi: function()"
//     alert("Привет");
//   }
// };
// Как было показано, мы можем пропустить ключевое слово "function" и 
//     просто написать sayHi().
// Нужно отметить, что эти две записи не полностью эквивалентны. Есть 
//     тонкие различия, связанные с наследованием объектов (что будет 
//     рассмотрено позже), но на данном этапе изучения это неважно. 
//     В большинстве случаев сокращённый синтаксис предпочтителен.

//----------------- Ключевое слово «this» в методах --------------------
// Как правило, методу объекта необходим доступ к информации, которая 
//     хранится в объекте, чтобы выполнить с ней какие-либо действия 
//     (в соответствии с назначением метода).
// Например, коду внутри user.sayHi() может понадобиться имя 
//     пользователя, которое хранится в объекте user.
// Для доступа к информации внутри объекта метод может использовать 
//     ключевое слово this.
// Значение this – это объект «перед точкой», который использовался для 
//     вызова метода.
// Например:

// let user = {
//   name: "Джон",
//   age: 30,

//   sayHi() {
//     // this - это "текущий объект"
//     alert(this.name);
//   }

// };

// user.sayHi(); // Джон
// Здесь во время выполнения кода user.sayHi() значением this будет 
//     являться user (ссылка на объект user).

//-------------- Внутренняя реализация: Ссылочный тип ------------------
// Некоторые хитрые способы вызова метода приводят к потере значения 
//     this, например:

// let user = {
//   name: "Джон",
//   hi() { alert(this.name); },
//   bye() { alert("Пока"); }
// };

// user.hi(); // Джон (простой вызов метода работает хорошо)

// теперь давайте попробуем вызывать user.hi или user.bye
// в зависимости от имени пользователя user.name
// (user.name == "Джон" ? user.hi : user.bye)(); // Ошибка!
// В последней строчке кода используется условный оператор ?, который
//     определяет, какой будет вызван метод (user.hi или user.bye) 
//     в зависимости от выполнения условия. В данном случае будет 
//     выбран user.hi.
// Затем метод тут же вызывается с помощью скобок (). Но вызов не 
//     работает как положено!
// Вы можете видеть, что при вызове будет ошибка, потому что значением 
//     "this" внутри функции становится undefined (полагаем, что у нас 
//     строгий режим).
// Так работает (доступ к методу объекта через точку):

// user.hi();
// Так уже не работает (вызываемый метод вычисляется):

// (user.name == "Джон" ? user.hi : user.bye)(); // Ошибка!
//     Почему? Если мы хотим понять, почему так происходит, давайте 
//     разберёмся (заглянем под капот), как работает вызов 
//     методов (obj.method()).

// Присмотревшись поближе, в выражении obj.method() можно заметить две
//     операции:
// Сначала оператор точка '.' возвращает свойство объекта – его метод 
//     (obj.method).
// Затем скобки () вызывают этот метод (исполняется код метода).
// Итак, каким же образом информация о this передаётся из первой части 
//     во вторую?

// Если мы поместим эти операции в отдельные строки, то значение this,
//     естественно, будет потеряно:

// let user = {
//   name: "Джон",
//   hi() { alert(this.name); }
// };

// разделим получение метода объекта и его вызов в разных строках
// let hi = user.hi;
// hi(); // Ошибка, потому что значением this является undefined
// Здесь hi = user.hi сохраняет функцию в переменной, и далее в 
//     последней строке она вызывается полностью сама по себе, без 
//     объекта, так что нет this.

// Для работы вызовов типа user.hi(), JavaScript использует трюк – 
//     точка '.' возвращает не саму функцию, а специальное значение 
//     «ссылочного типа», называемого Reference Type.

// Этот ссылочный тип (Reference Type) является внутренним типом. Мы 
//     не можем явно использовать его, но он используется внутри языка.

// Значение ссылочного типа – это «триплет»: комбинация из трёх 
//     значений (base, name, strict), где:

// base – это объект.
// name – это имя свойства объекта.
// strict – это режим исполнения. Является true, если действует 
//     строгий режим (use strict).
// Результатом доступа к свойству user.hi является не функция, а 
//     значение ссылочного типа. Для user.hi в строгом режиме оно 
//     будет таким:

// значение ссылочного типа (Reference Type)
// (user, "hi", true)
// Когда скобки () применяются к значению ссылочного типа 
//     (происходит вызов), то они получают полную информацию об объекте
//     и его методе, и могут поставить правильный this 
//     (=user в данном случае, по base).

// Ссылочный тип – исключительно внутренний, промежуточный, используемый
//     чтобы передать информацию от точки . до вызывающих скобок ().

// При любой другой операции, например, присваивании hi = user.hi,
//     ссылочный тип заменяется на собственно значение user.hi 
//     (функцию), и дальше работа уже идёт только с ней. Поэтому 
//     дальнейший вызов происходит уже без this.

// Таким образом, значение this передаётся правильно, только 
//     если функция вызывается напрямую с использованием синтаксиса 
//     точки obj.method() или квадратных скобок obj['method']() 
//     (они делают то же самое).

//----------------- У стрелочных функций нет «this» --------------------
// Стрелочные функции особенные: у них нет своего «собственного» this.
//     Если мы используем this внутри стрелочной функции, то его 
//     значение берётся из внешней «нормальной» функции.

// Например, здесь arrow() использует значение this из внешнего метода 
//     user.sayHi():

// let user = {
//   firstName: "Илья",
//   sayHi() {
//     let arrow = () => alert(this.firstName);
//     arrow();
//   }
// };

// user.sayHi(); // Илья
// Это является особенностью стрелочных функций. Они полезны, когда мы 
//     на самом деле не хотим иметь отдельное значение this, а хотим 
//     брать его из внешнего контекста.