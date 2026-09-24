import { createBrowserRouter } from "react-router-dom";
import Carrito from "./pages/Carrito/Carrito";
import InicioSesion from "./pages/InicioSesion/InicioSesion";
import Index from './pages/Index/index';
import Producto from "./pages/Producto/Producto";
import Productos from "./pages/Productos/Productos";
import RegistroUsuario from "./pages/RegistroUsuarios/RegistroUsuario";

export const routes = createBrowserRouter([
    {
        path:'./pages/Carrito/Carrito',
        element: <Carrito></Carrito>
    },
    {
        path:'./pages/Index/index',
        element: <Index></Index>
    },
    {
        path:'./pages/InicioSesion/InicioSesion',
        element: <InicioSesion></InicioSesion>
    },
    {
        path:'./pages/Producto/Producto',
        element: <Producto></Producto>
    },
    {
        path:'./pages/Productos/Productos',
        element: <Productos></Productos>
    },
    {
        path:'./pages/RegistroUsuarios/RegistroUsuario',
        element: <RegistroUsuario></RegistroUsuario>
    }
    
]);