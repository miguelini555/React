interface SaludoProps {
    nombre: string;
}

const Saludo = (props: SaludoProps) => {
    return <p>Hola {props.nombre}</p>;
};

.render(<Saludo nombre="Juan" />);
.findIndex(valor)


if (props.nombre === "Juan") {
    return <p>Hola {props.nombre}</p>;
}
return <p>No eres Juan</p>;

const numeros = [10, 20, 30, 40, 50, 60];
const dobles = numeros.map((item) => {return item*2;});


const resultado = numeros.slice(3, 6)
resultado.

let arreglo = Array<number>(6);
arreglo.fill(3);