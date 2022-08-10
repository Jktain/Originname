//                        ------- КОД 1 -------
// describe("pow", function() {

//     it("возводит в степень n", function() {
//       assert.equal(pow(2, 3), 8);
//     });
  
//   });
//---------------------------------------------------------------------

//                        ------- HTML 1 -------
// function pow(x, n) {
//   return 8; // :) сжульничаем!
// }
//---------------------------------------------------------------------

//                        ------- КОД 2 -------
// describe("pow", function() {

//     it("2 в степени 3 будет 8", function () {
//       assert.equal(pow(2, 3), 8);
//     });
  
//     it("3 в степени 3 будет 27", function () {
//       assert.equal(pow(3, 3), 27);
//     });
  
// });
//---------------------------------------------------------------------

//                        ------- КОД 3 -------
// describe("pow", function() {

//     it("2 в степени 3 будет 8", function() {
//       assert.equal(pow(2, 3), 8);
//     });
  
//     it("3 в степени 3 будет 27", function() {
//       assert.equal(pow(3, 3), 27);
//     });
  
//   });
//---------------------------------------------------------------------

//                        ------- HTML 2 -------
// function pow(x, n) {
//     let result = 1;
  
//     for (let i = 0; i < n; i++) {
//       result *= x;
//     }
  
//     return result;
//   }
//---------------------------------------------------------------------

//                        ------- КОД 4 -------
// describe("pow", function() {

//     function makeTest(x) {
//       let expected = x * x * x;
//       it(`${x} в степени 3 будет ${expected}`, function() {
//         assert.equal(pow(x, 3), expected);
//       });
//     }
  
//     for (let x = 1; x <= 5; x++) {
//       makeTest(x);
//     }

//   });
//---------------------------------------------------------------------

//                        ------- КОД 5 -------
// describe("pow", function() {

//     describe("возводит x в степень 3", function() {
  
//       function makeTest(x) {
//         let expected = x * x * x;
//         it(`${x} в степени 3 будет ${expected}`, function() {
//           assert.equal(pow(x, 3), expected);
//         });
//       }
  
//       for (let x = 1; x <= 5; x++) {
//         makeTest(x);
//       }
  
//     });
  
//     // ... другие тесты. Можно писать и describe, и it блоки.
//   });
//---------------------------------------------------------------------

//                        ------- КОД 6 -------
// describe("тест", function() {

//     before(() => alert("Тестирование началось – перед тестами"));
//     after(() => alert("Тестирование закончилось – после всех тестов"));
  
//     beforeEach(() => alert("Перед тестом – начинаем выполнять тест"));
//     afterEach(() => alert("После теста – заканчиваем выполнение теста"));
  
//     it('тест 1', () => alert(1));
//     it('тест 2', () => alert(2));

//   });
//---------------------------------------------------------------------

//                        ------- КОД 7 -------
// describe("pow", function() {

//     // ...
  
//     it("для отрицательных n возвращает NaN", function() {
//       assert.isNaN(pow(2, -1));
//     });
  
//     it("для дробных n возвращает NaN", function() {
//       assert.isNaN(pow(2, 1.5));
//     });
  
//   });
//---------------------------------------------------------------------

//                        ------- HTML 3 -------
// function pow(x, n) {
//     if (n < 0) return NaN;
//     if (Math.round(n) != n) return NaN;
  
//     let result = 1;
  
//     for (let i = 0; i < n; i++) {
//       result *= x;
//     }
  
//     return result;
//   }
//-----------------------------------------------------------------------