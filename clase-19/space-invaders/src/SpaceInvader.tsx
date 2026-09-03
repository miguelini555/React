import { useEffect, useState } from 'react'
import './SpaceInvader.css'

//Cuadrado Municion
export default function SpaceInvader() {
  const [bottom, setBottom] = useState<number>(5)
//  const ANCHO_BLOQUE = 5
  useEffect(() => {
    const intervalo: number = setInterval(() => {
      setBottom((anterior: number): number => {
        return anterior + 1
      })
    }, 1000)
    return () => {
      clearInterval(intervalo)
    }
  }, [])

  const estilo = {
    position: 'absolute' as const,
    left: '${bottom}rem',
    bottom: `${bottom}rem`,
    transform: 'translateX(-50%)',
    width: '2rem',
    height: '2rem',
    backgroundColor: 'red'
  }

// Arma rectangulo
  return (
    <>
      <div className="arma"></div>
      <div style={estilo}></div>
    </>
  )
}