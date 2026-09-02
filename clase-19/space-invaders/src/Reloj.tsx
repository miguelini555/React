import {useEffect, useState} from 'react';
//root.render(<Reloj/>);

export default function Reloj() {
    return <p>segundos:</p>
}
const [segundos, setSegundos] = useState<number>(0);
useEffect(() => {
    const reloj:number = setInterval(() => {
        setSegundos((anterior) => {
            return anterior+1;
        },);
    }, 1000)
    return () => {
        clearInterval(reloj);
    }
}, []);

//return<p>Segundos: {segundos}</p> arreglar y ver que corchete es el que ocasiona esto.
// render <reloj> y demas cosas deben ir en la parte de arriba
