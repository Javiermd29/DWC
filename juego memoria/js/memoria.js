let maxFilas = prompt('¿Cuántas filas quieres?');
let maxColumnas = prompt('¿Cuántas columnas quieres?');
let arrayTablero = [];

// Creamos el tablero en html

document.write('<table>');

for (let i = 0; i < maxFilas; i++){
    document.write('<tr>')

    for (let j = 0; j < maxColumnas; j++) {
        document.write('<td></td>');
      }

}

document.write('</table>');

// Creamos el array

for(let fila = 0; fila < maxFilas; fila++){
    arrayTablero[fila] = new Array(maxColumnas);

    for (let columna = 0; columna < maxColumnas; columna++) {
        arrayTablero[fila][columna] = '';
        
    }
}

console.log(arrayTablero);