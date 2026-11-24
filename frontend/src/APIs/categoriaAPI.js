import { request } from "./usuario";

export const obtenerCategorias = () => request("/categoria");