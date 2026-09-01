import { useState } from "react";
import './TresEnRaya.css'

type marca = "X" | "O";
type celda = marca | null;
type tablero = celda[];

const tableroInicial: tablero = Array<celda>(9).fill(null);
console.log(tableroInicial);

const[tablero, setTablero]= useState<tablero>(tableroInicial);
const[turno, setTurno]= useState<marca>("X");
const marcarCelda = (indice: number): void => {
    if (tablero[indice] !== null) return;
    setTablero(tablero.map((celda, posicion) => {
        return posicion === indice ? turno : celda;
    }));
    setTurno(turno === "X" ? "O" : "X")
}





