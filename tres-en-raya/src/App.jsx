import './App.css'
import './TresEnRaya.css'
import {createRoot} from 'react-dom/client'
import TresEnRaya from './TresEnRaya'
const contenedor = document.querySelector("#root")
const root = createRoot(contenedor)
root.render(<TresEnRaya/>)

export default App
