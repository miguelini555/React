import { useState } from "react";

export default function Tablero() {
  return (
    <table>
      <tbody>
        {numeros.map((fila, indiceFila) => {
          return (
            <tr key={indiceFila}>
              {numeros.map((celda, indiceColumna) => {
                return (
                  <td key={indiceColumna}>
                    
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}


//Tablero debe etenr 8 filas y 8 columnas
//La serpinete debe comenzar con tres segmentos
//La cabeza debe identificarse claramente con el resto del cuerpo
// Cada pulsacion de una flecha debe repsresentar un turno

//Crear una tabla de 8x8 con celdas vacias 