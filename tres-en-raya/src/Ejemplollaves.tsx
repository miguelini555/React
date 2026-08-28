export default function Ejemplollaves() {
    const mensaje:string = "Hola UPB"
    const suma:number = 3+4
    const sumar = (a: number, b: number): number => {
        return a + b
    }
    return (
        <section>
            <h1>{mensaje}</h1>
            <p>3+4={suma}</p>
        </section>
    )
}
