let maxFilas = prompt('¿Cuántas filas quieres?');
let maxColumnas = prompt('¿Cuántas columnas quieres?');
let arrayTablero = [];

// Creamos el tablero en html

// Creamos el array

for(let fila = 0; fila < maxFilas; fila++){
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