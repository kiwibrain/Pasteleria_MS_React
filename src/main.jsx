import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import './pages/Index/index.css'
import App from './App.jsx'
import RegistroUsuario from './pages/RegistroUsuarios/RegistroUsuario.jsx'
import Productos from './pages/Productos/Productos.jsx'
import Producto from './pages/Producto/Producto.jsx'
import InicioSesion from './pages/InicioSesion/InicioSesion.jsx'
import Carrito from './pages/Carrito/Carrito.jsx'

// Deje comentados los elementos ya creados para ir probandolos uno a uno; dejando siempre 1 y solo 1 descomentado
// Pueden borrar y dejar solo el inicial cuando estimen conveniente
//     Jaime

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RegistroUsuario/ >
    {/* <Productos /> */}
    {/* <Producto /> */}
    {/* <InicioSesion /> */}
    {/* <Carrito /> */}
  </StrictMode>,
)
