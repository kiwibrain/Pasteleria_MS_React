import { request } from "./usuario";

export const obtenerProducto = () => request("/producto");
export const buscarProducto = (id) => request(`/producto/${id}`);
export const agregarProducto = (producto) => request("/producto","POST",producto);
export const eliminarProducto = (id) => request(`/producto/${id}`,"DELETE");
export const actualizarProducto = (id, producto) => request(`/producto/${id}`,"PUT",producto);