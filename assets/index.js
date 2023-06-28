



// 1. Función que reciba numero por parámetro y devuelva si es impar o par //

function numeroImparPar (numero) {
    if (numero % 2 === 0){
        console.log("par");
    }
    else{ 
        console.log("El numero es impar");
    }
}





/*
   2. Función que reciba por parámetro 2 números e indique cuál es mayor. Si ninguno lo es,
    indicar por consola que son iguales.
*/

function compararNumeros (num1, num2) {
    if (num1 > num2) {
        console.log ("El número "+ num1 +" es el más grande"); 
    }else if (num2 > num1) {
        console.log("El número "+ num2 + " es el más grande"); 
    } else {
        console.log("Los dos números son iguales") ;
    }
}




// 3. Crear una función que reciba número por parámetro e indique si es multiplo de 5

function multiploDe5 (num) {    
    if (num % 5 === 0) {
        console.log("El " + num + " es múltiplo de 5");
    } else {
        console.log("No es múltiplo de 5");
    }
}




// 4. Crear una función que reciba un número por parametro e imprima por consola los numeros hasta llegar al indicado desde el 0.


function contarNumero (number) {
    for( let i = 0; i <= number; i++) {
        console.log(i);
    }
} 




// 5. Crear una función que reciba una palabra y un número por parámetro e imprima por consola esa palabra la cantidad de veces indicada.

function imprimirPalabra (palabra, cantidad) {
    for (let i = 0; i < cantidad; i++ ) {
        console.log(palabra);
    }
}




// 6. Crear una función que reciba un array por parámetro e imprima todos los valores del array

function imprimirArray (array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}




// 7. Crear una función que reciba un array con 10 números e imprima por consola todos los valores del array, menos el que se encuentre en la 5ta posición del mismo.

function excluirNumeroArray (array) {
    if (array.length < 10) {
        console.log("El array tiene que tener 10 números");
    } else {
        for (let i = 0; i < array.length; i++) {
            if (i !== 4) {
                console.log(array[i]);
            }
        }
    }
}




// 8. Crear una función que reciba un array de numeros y un número por parámetro e imprima por consola cada número del array multiplicado por el número del parámetro.


function arrayMultiplicado (array, numero) {
    for (let i = 0; i < array.length; i++) {
        let multiplicacion = array[i] * numero;
        console.log(multiplicacion);
    }
}
