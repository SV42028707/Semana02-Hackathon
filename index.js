// EJERCICIO #0
// let john = { name: "John", surname: "Smith", id: 1 };
// let pete = { name: "Pete", surname: "Hunt", id: 2 };
// let mary = { name: "Mary", surname: "Key", id: 3 };
// let users = [ john, pete, mary ];

// let usersMapped = users.map(el =>{
//   let newObj = {fullName: el.name + " " + el.surname, id: el.id}
//   return newObj
// })

// console.log(usersMapped);

// alert( usersMapped[0].id )
// alert( usersMapped[0].fullName )

// EJERCICIO #1
// let fruits = ["Apples", "Pear", "Orange"];

// let shoppingCart = fruits;

// shoppingCart.push("Banana");
// alert( fruits.length ); // 4

// fruits = [ 'Apples', 'Pear', 'Orange', 'Banana' ]

// EJERCICIO #2
// let styles = ["Jazz", "Blues"];

// styles.push('Rock-n-Roll');

// const middleIndex = Math.floor(styles.length/2);

// const newStyles = [...styles]

// styles.splice(middleIndex, 1, 'Classics');

// console.log(styles);

// console.log(styles.shift());

// console.log(styles);

// styles.unshift("Rap", "Reggae");
// console.log(styles);

// EJERCICIO #3
// let value = prompt('Ingrese número');
// const numbers = [];

// while (Number(value) || Number(value) === 0) {
//  numbers.push(Number(value));
//  value = prompt('Ingrese número');

// }

// const sum = numbers.reduce((acc, curr) => acc + curr);

// alert(numbers);
// alert(sum);

// EJERCICIO #4
// const arr = [5, 3, 8, 1]

// const filterRange = function (arr, a, b) {
//   const filteredArray = arr.filter((num) => {
//     return num >= a && num <= b
//   })
//   return filteredArray
// }

// const filtered = filterRange(arr, 1, 4);

// alert(filtered);
// alert(arr);

// EJERCICIO #5
// let arr = ["HTML", "JavaScript", "CSS"];

// const copySorted = [...arr];

// let sorted = copySorted.sort();

// alert( sorted ); // CSS, HTML, JavaScript
// alert( arr ); // HTML, JavaScript, CSS (no changes)

// EJERCICIO #6
// const Calculator = function () {
//   this.opFuncs =
//    {
//     '+': (a, b) => a + b,
//     '-': (a, b) => a - b
//   }
// }

// Calculator.prototype.calculate = function (op) {
// const opArray = op.split(' ');
// const operator = opArray[1];
// const num1 = Number(opArray[0]);
// const num2 = Number(opArray[2]);

// if (this.opFuncs[operator]) {
//   return this.opFuncs[operator] (num1, num2)
// } else {
//   console.log('ERROR! Operator not found.')
// }

// }

// Calculator.prototype.addMethod = function (str, func) {
// this.opFuncs[str] = func
// }

// const calc = new Calculator();
// alert(calc.calculate('2 + 5'));

// calc.addMethod('/', (a, b) => a / b);
// calc.addMethod('*', (a, b) => a * b);
// calc.addMethod('**', (a, b) => a ** b);

// alert(calc.calculate('10 / 2'));
// alert(calc.calculate('10 * 2'));
// alert(calc.calculate('10 ** 2'));

// EJERCICIO #7
// let mensaje;
// const login = ''

// /* if (login == 'Empleado') {
// mensaje = 'Hola';
// } else if (login == 'Director') {
// mensaje = 'Saludos';
// } else if (login == '') {
// mensaje = 'Sin inicio de sesión';
// } else {
// mensaje = '';
// } */

// const greeting = login == 'Empleado' ? mensaje = 'Hola' :
//                   login == 'Director' ? mensaje = 'Saludos' :
//                   login == '' ? mensaje = 'Sin inicio de sesión' : mensaje = '';

// console.log(mensaje)
