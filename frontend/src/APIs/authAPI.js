import { request } from "./usuario";

export const login = (email, password) => request("/auth/login","POST",{correo,password});
export const registro = (nombre, apellido, edad, email, password, passConfirm) => request("/auth/registro","POST",{nombre, apellido, edad, email, password, passConfirm});