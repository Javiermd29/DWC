let maxFilas = prompt('¿Cuántas filas quieres?');
let maxColumnas = prompt('¿Cuántas columnas quieres?');
let arrayTablero = [];

// Nos aseguramos de que el número total de casillas nos permita
// que no haya ningñuna pareja suelta
while ((maxFilas * maxColumnas) % 2 != 0) {

    window.alert("La multiplicación de las filas y las columnas tiene que ser par");

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

//Posicionamos las imagenes
let posFila;
let posColumna;
let numImg = maxFilas * maxColumnas;
let contadorImg;

while (contadorImg < numImg) {
    posFila = Math.floor(Math.random() * maxFilas);
    posColumna = Math.floor(Math.random() * maxColumnas);

    if (arrayTablero[posFila][posColumna] != 'MINA') {
        arrayTablero[posFila][posColumna] = 'MINA';
        contadorMinas++;
    };
}