import axios from "axios";
const api = process.env.REACT_APP_API;

export async function postGrupoAgregar(data) {
    return await axios.post(api+"grupo/agregar",data);
}
export async function getGrupoTodos() {
    return await axios.get(api+"grupo/leertodo");
}
export async function getGrupoCant() {
    return await axios.get(api + "grupo/cant");
}
export async function postGrupoBuscar(filtros) {
    return await axios.post(api + "grupo/buscar", filtros);
}
export async function getGrupoUno(id) {
    return await axios.get(api + "grupo/leeruno/" + id);
}
export async function postGrupoModificar(id, datos) {
    return await axios.post(api + "grupo/modificar/" + id, datos);
}
export async function postGrupoEliminar(id) {
    return await axios.post(api + "grupo/eliminar", {id});
}