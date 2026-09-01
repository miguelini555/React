import './App.css'
import './TresEnRaya.css'
import {createRoot} from 'react-dom/client'
import TresEnRaya from './TresEnRaya'
import Ejemplollaves from './Ejemplollaves'
//import Contador from './Contador'
const contenedor = document.querySelector("#root")
const root = createRoot(contenedor)
root.render(<TresEnRaya/>)
//root.render(<Contador/>)

export default App
