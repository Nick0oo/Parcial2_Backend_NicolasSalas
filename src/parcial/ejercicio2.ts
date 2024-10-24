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
