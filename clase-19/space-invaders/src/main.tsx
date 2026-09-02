import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import App from './App.tsx'
import Reloj from './Reloj.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Reloj />
  </StrictMode>,
)
