import { useState } from 'react';
import type { KeyboardEvent } from 'react';

type Celda = {
    fila: number;
    columna: number;
};

export default function TresEnRaya() {

    const serpienteInicial: Celda[] = [
        { fila: 3, columna: 3 },
        { fila: 3, columna: 2 },
        { fila: 3, columna: 1 }
    ];

    const [serpiente, setSerpiente] = useState<Celda[]>(serpienteInicial);

    const moverSerpiente = (direccion: string) => {

        const cabeza = serpiente[0];

        let nuevaCabeza = {
            fila: cabeza.fila,
            columna: cabeza.columna
        };

        if (direccion === 'arriba') {
            nuevaCabeza.fila = nuevaCabeza.fila - 1;
        }

        if (direccion === 'abajo') {
            nuevaCabeza.fila = nuevaCabeza.fila + 1;
        }

        if (direccion === 'izquierda') {
            nuevaCabeza.columna = nuevaCabeza.columna - 1;
        }

        if (direccion === 'derecha') {
            nuevaCabeza.columna = nuevaCabeza.columna + 1;
        }

        const nuevaSerpiente = [
            nuevaCabeza,
            ...serpiente
        ];

        nuevaSerpiente.pop();

        setSerpiente(nuevaSerpiente);
    };

    const manejarTecla = (evento: KeyboardEvent<HTMLDivElement>) => {
        if (evento.key === 'ArrowUp') {
            moverSerpiente('arriba');
        }
        if (evento.key === 'ArrowDown') {
            moverSerpiente('abajo');
        }
        if (evento.key === 'ArrowLeft') {
            moverSerpiente('izquierda');
        }

        if (evento.key === 'ArrowRight') {
            moverSerpiente('derecha');
        }
    };

    return (
        <div tabIndex={0} onKeyDown={manejarTecla}>

            <p>
                Serpiente por Turnos
            </p>

            <table>
                <tbody>

                    {Array(8).fill(0).map((fila, indiceFila) => (

                        <tr key={indiceFila}>

                            {Array(8).fill(0).map((celda, indiceColumna) => {

                                const esCabeza =
                                    serpiente[0].fila === indiceFila &&
                                    serpiente[0].columna === indiceColumna;

                                const esCuerpo =
                                    serpiente.some((parte) =>
                                        parte.fila === indiceFila &&
                                        parte.columna === indiceColumna
                                    );

                                return (
                                    <td key={indiceColumna}>

                                        {esCabeza && '🐍'}

                                        {!esCabeza && esCuerpo && '🟢'}

                                    </td>
                                );
                            })}

                        </tr>

                    ))}

                </tbody>
            </table>

        </div>
    );
}