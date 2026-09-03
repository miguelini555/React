import { useEffect, useState } from 'react'
import './SpaceInvader.css'

interface Bloque {
  id: number
  left: number
  top: number
}

export default function SpaceAlien() {
  const [extraterrestre, setExtraterrestre] = useState<Array<Bloque>>([])
  useEffect(() => {
    const intervalo: number = setInterval(() => {
      setExtraterrestre((anterior: Array<Bloque>): Array<Bloque> => {
        const extraterrestresActualizados: Array<Bloque> =
          anterior.map((alien: Bloque): Bloque => {
            return {
              ...alien,
              top: alien.top + 1
            }
          })
        if (extraterrestresActualizados.length >= 6) {
          return extraterrestresActualizados
        }
        const nuevoExtraterrestre: Bloque = {
          id: Date.now(),
          left: Math.random() * 80,
          top: 5
        }
        return [
          ...extraterrestresActualizados,
          nuevoExtraterrestre
        ]
      })
    }, 1000)
    return () => {
      clearInterval(intervalo)
    }
  }, [])

  return (
    <>
      <div className="arma"></div>
      {extraterrestre.map((alien: Bloque) => {
        const estilo = {
          position: 'absolute' as const,
          left: `${alien.left}%`,
          top: `${alien.top}rem`,
          transform: 'translateX(-50%)',
          width: '2rem',
          height: '2rem',
          backgroundColor: 'blue'
        }
        return (
          <div
            key={alien.id}
            style={estilo}
          ></div>
        )
      })}
    </>
  )
}