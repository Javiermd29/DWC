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