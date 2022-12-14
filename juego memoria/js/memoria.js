//Pregunta la cantidad de filas y columnas que quiere el usuario
let maxFilas = prompt('¿Cuántas filas quieres?');
let maxColumnas = prompt('¿Cuántas columnas quieres?');
let arrayTablero = [];

// Nos aseguramos de que el número total de casillas nos permita
// que no haya ninguna pareja suelta
while ((maxFilas * maxColumnas) % 2 != 0 || maxFilas * maxColumnas > 100) {

    if ((maxFilas * maxColumnas) % 2 != 0) {

        window.alert("La multiplicación de las filas y las columnas tiene que ser par");

    }

    if (maxFilas * maxColumnas > 100) {

        window.alert("Sólo puede haber un máximo de 100 casillas");

    }

    maxFilas = prompt('¿Cuántas filas quieres?');
    maxColumnas = prompt('¿Cuántas columnas quieres?');

}

// Creamos el array
for (let fila = 0; fila < maxFilas; fila++) {

    arrayTablero[fila] = new Array(maxColumnas);

    for (let columna = 0; columna < maxColumnas; columna++) {

        arrayTablero[fila][columna] = '';

    }

}

//Array de emoticonos
let imagenes = ['&#9961;&#65039', '&#128566;&#8205;&#127787;&#65039', '&#128126',
    '&#128125', '&#128121', '&#128760', '&#127888', '&#129398', '&#128406', '&#128131'];

//Por cada pasada de este for, elige en orden un objeto del array de emoticonos
//y lo mete en el array aleatoriamente

let contador = 0;
let suma = 0;

for (let i = 0; i < maxFilas; i++) {

    for (let j = 0; j < maxColumnas; j++) {

        for (let x = 0; x < imagenes.length; x++) {

            while (contador < 2) {

                let posFila = Math.floor(Math.random() * maxFilas);
                let posColumna = Math.floor(Math.random() * maxColumnas);

                if (arrayTablero[posFila][posColumna] == '') {
                    arrayTablero[posFila][posColumna] = imagenes[x];
                    contador++;
                    suma++;
                }

            }

            if(suma > (maxFilas * maxColumnas)){
                break;
            }

            contador = 0;

        }

    }

}

// Creamos y dibujamos el tablero con el array
document.write('<table>');

for (let i = 0; i < maxFilas; i++) {
    document.write('<tr>');

    for (let j = 0; j < maxColumnas; j++) {
        document.write('<td>' + arrayTablero[i][j] + '</td>');
    }

    document.write('</tr>');

}
document.write('</table>');

console.log(arrayTablero);