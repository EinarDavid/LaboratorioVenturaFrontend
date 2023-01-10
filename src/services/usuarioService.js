import axios from "axios";
const api = process.env.REACT_APP_API;

export async function postAgregarUsuario(usuario) {
    console.log(api + "usuario/agregar")
    return await axios.post(api+"usuario/agregar",usuario);
}
export async function getUsuarioTodos() {
    return await axios.get(api+"usuario/leertodo");
}
export async function postLogin(usuario) {
    return await axios.post(api+"usuario/login",usuario);
}