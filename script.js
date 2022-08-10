// Допустим, мы хотим написать функцию pow(x, n), которая возводит x в
//     целочисленную степень n. Мы предполагаем, что n≥0. Перед тем, 
//     как начать писать код функции pow, мы можем представить себе,
//     что она должна делать, и описать её. Такое описание называется 
//     спецификацией (specification). Она содержит описания различных 
//     способов использования и тесты для них, например:

//---- Разработка функции возведения в степень — «pow»: спецификация ----
// Допустим, мы хотим написать функцию pow(x, n), которая возводит x в
//     целочисленную степень n. Мы предполагаем, что n ≥ 0. Перед тем,
//     как начать писать код функции pow, мы можем представить себе, что
//     она должна делать, и описать её. Такое описание называется
//     спецификацией (specification). Она содержит описания различных
//     способов использования и тесты для них, например:
                
//                        ------- КОД 1 -------
// Спецификация состоит из трёх основных блоков:
//     1) describe("заголовок", function() { ... })
//         Какую функциональность мы описываем. В нашем случае мы
//         описываем функцию pow. Используется для группировки рабочих
//         лошадок – блоков it.

//     2) it("описание", function() { ... })
//         В первом аргументе блока it мы человеческим языком описываем
//         конкретный способ использования функции, а во втором – пишем
//         функцию, которая тестирует данный случай.

//     3) assert.equal(value1, value2)
//         Код внутри блока it, если функция работает верно, должен
//         выполняться без ошибок.

// Функции вида assert.* используются для проверки того, что функция pow
//     работает так, как мы ожидаем. В этом примере мы используем одну
//     из них – assert.equal, которая сравнивает переданные значения и
//     выбрасывает ошибку, если они не равны друг другу.

//--------------------------- Процесс разработки -----------------------
// Процесс разработки обычно выглядит следующим образом:

//     1) Пишется начальная спецификация с тестами, проверяющими 
//         основную функциональность.
//     2) Создаётся начальная реализация.
//     3) Для запуска тестов мы используем фреймворк Mocha (подробнее о 
//         нём чуть позже). Пока функция не готова, будут ошибки. Вносим
//         изменения до тех пор, пока всё не начнёт работать так, как нам
//         нужно.
//     4) Теперь у нас есть правильно работающая начальная реализация
//         и тесты.
//     5) Мы добавляем новые способы использования в спецификацию, 
//         возможно, ещё не реализованные в тестируемом коде. Тесты
//         начинают «падать» (выдавать ошибки).
//     6) Возвращаемся на шаг 3, дописываем реализацию до тех пор, пока
//         тесты не начнут завершаться без ошибок.
//     7) Повторяем шаги 3-6, пока требуемая функциональность не будет 
//         готова.

//------------------------ Спецификация в действии ----------------------
// В этой главе мы будем пользоваться следующими JavaScript-библиотеками
//     для тестов:

//     1) Mocha – основной фреймворк. Он предоставляет общие функции
//         тестирования, такие как describe и it, а также функцию запуска
//         тестов.
//     2) Chai – библиотека, предоставляющая множество функций проверки
//         утверждений. Пока мы будем использовать только assert.equal.
//     3) Sinon – библиотека, позволяющая наблюдать за функциями,
//         эмулировать встроенные функции и многое другое. Нам она
//         пригодится позднее.
// Условно страницу можно разделить на пять частей:
//     1) Тег <head> содержит сторонние библиотеки и стили для тестов.
//     2) Тег <script> содержит тестируемую функцию, в нашем случае – pow
//     3) Тесты – в нашем случае внешний скрипт test.js, который содержит
//         спецификацию describe("pow", ...), представленную выше.
//     4) HTML-элемент <div id="mocha"> будет использован фреймворком
//         Mocha для вывода результатов тестирования.
//     5) Запуск тестов производится командой mocha.run().
// Пока что тест завершается ошибкой. Это логично, потому что у нас
//     пустая функция pow, так что pow(2,3) возвращает undefined вместо 8
// Давайте напишем простую реализацию функции pow, чтобы пройти тесты.

//                        ------- HTML 1 -------

//------------------------ Улучшаем спецификацию ------------------------
// Kонечно, мы сжульничали. Функция не работает. Попытка посчитать
//     pow(3, 3) даст некорректный результат, однако тесты проходят.
//     Такая ситуация вполне типична, она случается на практике. Тесты 
//     проходят, но функция работает неправильно. Наша спецификация не
//     идеальна. Нужно дополнить её тестами. Давайте добавим ещё один
//     тест, чтобы посмотреть, что pow(3, 3) = 27.

// У нас есть два пути организации тестов:

//    1 – добавить ещё один assert в существующий it:
//                        ------- КОД 2 -------

//    2 – написать два теста:
//                        ------- КОД 3 -------

// Принципиальная разница в том, что когда один из assert выбрасывает
//     ошибку, то выполнение it блока тут же прекращается. Таким образом,
//     если первый assert выбросит ошибку, результат работы второго 
//     assert мы уже не узнаем. Разделять тесты предпочтительнее, так как
//     мы получаем больше информации о том, что конкретно пошло не так.
// Помимо этого есть одно хорошее правило, которому стоит следовать:

//                     Один тест проверяет одну вещь.
// Если вы посмотрите на тест и увидите в нём две независимые проверки,
//     то такой тест лучше разделить на два более простых.
// Давайте продолжим со вторым вариантом.
// Как мы и ожидали, второй тест провалился. Естественно, наша функция
//     всегда возвращает 8, в то время как assert ожидает 27.

//------------------------ Улучшаем реализацию --------------------------
// Давайте напишем что-то более похожее на функцию возведения в степень,
//     чтобы заставить тесты проходить.

//                        ------- HTML 2 -------

// Чтобы убедиться, что эта реализация работает нормально, давайте
//     протестируем её на большем количестве значений. Чтобы не писать
//     вручную каждый блок it, мы можем генерировать их в цикле for:

//                        ------- КОД 4 -------

//-------------------- Вложенные блоки describe --------------------------
// Мы собираемся добавить больше тестов. Однако, перед этим стоит
//     сгруппировать вспомогательную функцию makeTest и цикл for. Нам не
//     нужна функция makeTest в других тестах, она нужна только в цикле
//     for. Её предназначение – проверить, что pow правильно возводит
//     число в заданную степень.
// Группировка производится вложенными блоками describe

//                        ------- КОД 5 -------

// Вложенные describe образуют новую подгруппу тестов. В результатах мы
//     можем видеть дополнительные отступы в названиях.
// В будущем мы можем написать новые it и describe блоки на верхнем
//     уровне со своими собственными вспомогательными функциями. Им не
//     будет доступна функция makeTest из примера выше.
// Мы можем задать before/after функции, которые будут выполняться 
//     до/после тестов, а также функции beforeEach/afterEach, выполняемые
//     до/после каждого it. Например:

//                        ------- КОД 6 -------

// Порядок выполнения будет таким:

// Тестирование началось – перед тестами (before)
// Перед тестом – начинаем выполнять тест (beforeEach)
// 1
// После теста – заканчиваем выполнение теста (afterEach)
// Перед тестом – начинаем выполнять тест (beforeEach)
// 2
// После теста – заканчиваем выполнение теста (afterEach)
// Тестирование закончилось – после всех тестов (after)

// Обычно beforeEach/afterEach и before/after используются для
//     инициализации, обнуления счётчиков или чего-нибудь ещё между
//     тестами (или группами тестов).

//------------------------ Расширение спецификации ----------------------
// Основная функциональность pow реализована. Первая итерация разработки
//     завершена. Когда мы закончим отмечать и пить шампанское, давайте
//     продолжим работу и улучшим pow.
// Как было сказано, функция pow(x, n) предназначена для работы с целыми
//     положительными значениями n.
// Для обозначения математических ошибок функции JavaScript обычно
//     возвращают NaN. Давайте делать также для некорректных значений n.
// Сначала давайте опишем это поведение в спецификации.

//                        ------- КОД 7 -------

// Новые тесты падают, потому что наша реализация не поддерживает их.
//     Так работает BDD. Сначала мы добавляем тесты, которые падают, а
//     уже потом пишем под них реализацию.

//------------------------ Другие функции сравнения ----------------------
// Обратите внимание на assert.isNaN. Это проверка того, что переданное
//     значение равно NaN.
// Библиотека Chai содержит множество других подобных функций, например:

// 1) assert.equal(value1, value2) – проверяет равенство value1 == value2.
// 2) assert.strictEqual(value1, value2) – проверяет строгое равенство
//     value1 === value2.
// 3) assert.notEqual, assert.notStrictEqual – проверяет неравенство и 
//     строгое неравенство соответственно.
// 4) assert.isTrue(value) – проверяет, что value === true
// 5) assert.isFalse(value) – проверяет, что value === false
// …с полным списком можно ознакомиться в документации

// Итак, нам нужно добавить пару строчек в функцию pow:

//                        ------- HTML 3 -------

// Теперь работает, все тесты проходят: