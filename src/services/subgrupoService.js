import axios from "axios";
const api = process.env.REACT_APP_API;

export async function postSubGrupoAgregar(data) {
    return await axios.post(api+"subgrupo/agregar",data);
}
export async function getSubGrupoTodos() {
    return await axios.get(api+"subgrupo/leertodo");
}
export async function getSubGrupoCant() {
    return await axios.get(api + "subgrupo/cant");
}
export async function postSubGrupoBuscar(filtros) {
    return await axios.post(api + "subgrupo/buscar", filtros);
}
export async function getSubGrupoUno(id) {
    return await axios.get(api + "subgrupo/leeruno/" + id);
}
export async function postSubGrupoModificar(id, datos) {
    return await axios.post(api + "subgrupo/modificar/" + id, datos);
}
export async function postSubGrupoEliminar(id) {
    return await axios.post(api + "subgrupo/eliminar", {id});
}