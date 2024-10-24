/* escribe un programa en typecript que realice las siguientes operaciones utilizando 
arrays de tipos basicos tuplas manipulacion de arrays y busqueda de elemntos*/
//array de numeros
let ArrayNumeros: number[]=[1,2,3,4,5];
// array de frutas
let ArrayFrutas: string[]=['pera','fresa','manzana','lulo','uva'];
//array de boleanos
let ArrayBoleanos: boolean[]=[true,false,true,false,true];
//array de tuplas
let ArrayTuplas: [string,number][]=[['pera',1],['fresa',2],['manzana',3],['lulo',4],['uva',5]];

//añadir numero 6 al array de numeros
ArrayNumeros.push(6);
console.log(ArrayNumeros);
// elimina el ultimo elemento del array de numeros
ArrayNumeros.pop();
console.log(ArrayNumeros);
// encuentra el indice del numero 3 en el array de numeros
console.log(ArrayNumeros.indexOf(3));
// extrae una parte del array de numeros desde el segundo hasta el cuarto elemento
console.log(ArrayNumeros.slice(1,4));
// eleva al cuadrado todos lo numeros del array de numeros usando map
console.log(ArrayNumeros.map(x=>x*x));
// filtra los numeros pares del array de numeros
console.log(ArrayNumeros.filter(x=>x%2==0));
// suma todos los numeros del array de numeros utilizando reduce
console.log(ArrayNumeros.reduce((a,b)=>a+b));

//divide una cadena de texto de un array de palabras (frutas) y luego vuelve a unirlas en una cadena separada por comas
let cadenaFrutas = ArrayFrutas.join(', ');
console.log(cadenaFrutas);

// encuentra el primer numero mayor que 25 en el array [10,20,30,40,50] y su indice
let ArrayNumeros25: number[] = [10, 20, 30, 40, 50];
let numeroMayorQue25 = ArrayNumeros25.find(x => x > 25);
let indiceMayorQue25 = ArrayNumeros25.findIndex(x => x > 25);
console.log(`El primer número mayor que 25 es ${numeroMayorQue25} y su índice es ${indiceMayorQue25}`);
// verificar sin todos los numeros del array son positivos
console.log('todos los numeros son postivos ',ArrayNumeros25.filter(x=>x>0));
// verifica si algun numero del array es mayor que 40
let numeroMayorQue40 = ArrayNumeros25.find(x=> x > 40);
console.log('numero mayor a 40 dentro del array ', numeroMayorQue40);












