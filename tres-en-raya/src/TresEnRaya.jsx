import { useState } from 'react';

export default function TresEnRaya() {
    const [serpiente, setSerpiente] = useState([
        { fila: 3, columna: 3 },
        { fila: 3, columna: 2 },
        { fila: 3, columna: 1 }
    ]);
    const [comida] = useState({
        fila: 1,
        columna: 5
    });
    const moverSerpiente = (direccion) => {
        const cabeza = serpiente[0];
        let nuevaCabeza = {
            fila: cabeza.fila,
            columna: cabeza.columna
        };
        if (direccion === 'arriba') {
            nuevaCabeza.fila--;
        }
        if (direccion === 'abajo') {
            nuevaCabeza.fila++;
        }
        if (direccion === 'izquierda') {
            nuevaCabeza.columna--;
        }
        if (direccion === 'derecha') {
            nuevaCabeza.columna++;
        }
        const nuevaSerpiente = [
            nuevaCabeza,
            ...serpiente
        ];
        nuevaSerpiente.pop();
        setSerpiente(nuevaSerpiente);
    };

    const manejarTecla = (evento) => {
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
        <section
            tabIndex={0}
            onKeyDown={manejarTecla}>
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
                                const esComida =
                                    comida.fila === indiceFila &&
                                    comida.columna === indiceColumna;
                                return (
                                    <td key={indiceColumna}>
                                        {esCabeza && '🐍'}
                                        {!esCabeza && esCuerpo && '🟢'}
                                        {esComida && '🍎'}
                                    </td>
                                );
                            })}
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
}