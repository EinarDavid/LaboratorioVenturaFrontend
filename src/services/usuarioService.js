import axios from "axios";
const api = process.env.REACT_APP_API;

export async function postAgregarUsuario(usuario) {
    console.log(api + "usuario/agregar")
    return await axios.post(api+"usuario/agregar",usuario);
}
export async function getUsuarioTodos() {
    return await axios.get(api+"usuario/leertodo");
}



export async function getUsuarioCant() {
    return await axios.get(api + "usuario/cant");
}
export async function getUsuarioNombres() {
    return await axios.get(api+"usuario/leerNombres");
}
export async function postUsuarioBuscar(filtros) {
    return await axios.post(api + "usuario/buscar", filtros);
}
export async function getUsuarioUno(id) {
    return await axios.get(api + "usuario/leeruno/" + id);
}
export async function postUsuarioModificar(id, datos) {
    return await axios.post(api + "usuario/modificar/" + id, datos);
}
export async function postUsuarioEliminar(id) {
    return await axios.post(api + "usuario/eliminar", {id});
}


//Login
export async function postLogin(usuario) {
    return await axios.post(api+"login",usuario);
}
export async function getUser() {
    return await axios.get(api + "getUser");
}