import { createBrowserRouter } from "react-router-dom";
import Carrito from "./pages/Carrito/Carrito";
import InicioSesion from "./pages/InicioSesion/InicioSesion";
import Index from "./pages/Index/Index.jsx";
import Producto from "./pages/Producto/Producto";
import Productos from "./pages/Productos/Productos";
import RegistroUsuario from "./pages/RegistroUsuarios/RegistroUsuario";

export const routes = createBrowserRouter([
  {
    path: "/",                        
    element: <Index />,
  },
  {
    path: "/carrito",
    element: <Carrito />,
  },
  {
    path: "/inicio-sesion",            
    element: <InicioSesion />,
  },
  {
    path: "/producto",
    element: <Producto />,
  },
  {
    path: "/productos",
    element: <Productos />,
  },
  {
    path: "/registro",
    element: <RegistroUsuario />,
  },
]);