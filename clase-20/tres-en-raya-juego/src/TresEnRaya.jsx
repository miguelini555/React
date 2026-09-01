export default function TresEnRaya() {
    return (
        <table>
            <tbody>
                {[0,1,2].map((fila)=> {
                    return (
                        <tr key={fila}>
                            {tablero.slice(fila*3,fila*3+3).map((celda, columna) => <td key={columna}>{celda}</td>)}
                            <td>
                                <button onClick = {() => {
                                    marcarCelda(fila*3+columna);
                                }}>
                                {celda}    
                                </button>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )

}
