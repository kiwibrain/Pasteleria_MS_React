import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom';
import { routes } from './routes.jsx';
// import './index.css'

import App from './App.jsx'
import RegistroUsuario from './pages/RegistroUsuarios/RegistroUsuario.jsx'
import Productos from './pages/Productos/Productos.jsx'
import Producto from './pages/Producto/Producto.jsx'
import InicioSesion from './pages/InicioSesion/InicioSesion.jsx'
import Carrito from './pages/Carrito/Carrito.jsx'
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min.js';
import './pages/Index/index.css'

// Deje comentados los elementos ya creados para ir probandolos uno a uno; dejando siempre 1 y solo 1 descomentado
// Pueden borrar y dejar solo el inicial cuando estimen conveniente
//     Jaime

createRoot(document.getElementById('root')).render(
  <StrictMode>
    < RouterProvider router = {routes}/>
 
  </StrictMode>,
)
