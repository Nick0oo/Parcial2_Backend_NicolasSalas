let ArrayNumeros = [1, 2, 3, 4, 5];
let ArrayFrutas = ['pera', 'fresa', 'manzana', 'lulo', 'uva'];
let ArrayBoleanos = [true, false, true, false, true];
let ArrayTuplas = [['pera', 1], ['fresa', 2], ['manzana', 3], ['lulo', 4], ['uva', 5]];
ArrayNumeros.push(6);
console.log(ArrayNumeros);
ArrayNumeros.pop();
console.log(ArrayNumeros);
console.log(ArrayNumeros.indexOf(3));
console.log(ArrayNumeros.slice(1, 4));
console.log(ArrayNumeros.map(x => x * x));
console.log(ArrayNumeros.filter(x => x % 2 == 0));
console.log(ArrayNumeros.reduce((a, b) => a + b));
let cadenaFrutas = ArrayFrutas.join(', ');
console.log(cadenaFrutas);
let ArrayNumeros25 = [10, 20, 30, 40, 50];
let numeroMayorQue25 = ArrayNumeros25.find(x => x > 25);
let indiceMayorQue25 = ArrayNumeros25.findIndex(x => x > 25);
console.log(`El primer número mayor que 25 es ${numeroMayorQue25} y su índice es ${indiceMayorQue25}`);
console.log('todos los numeros son postivos ', ArrayNumeros25.filter(x => x > 0));
let numeroMayorQue40 = ArrayNumeros25.find(x => x > 40);
console.log('numero mayor a 40 dentro del array ', numeroMayorQue40);
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let arrayCombinado = array1.concat(array2);
console.log(arrayCombinado);
let arraym = [5, 1, 4, 2, 3];
arraym.sort((a, b) => a - b);
console.log('Array ordenado de menor a mayor:', arraym);
arraym.reverse();
console.log('Array ordenado de mayor a menor:', arraym);
//# sourceMappingURL=ejercicio2.js.map