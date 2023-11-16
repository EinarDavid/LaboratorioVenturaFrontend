import axios from "axios";
const api = process.env.REACT_APP_API;

export async function postAgregarProducto(data) {
    return await axios.post(api+"producto/agregar",data);
}
export async function getProductTodos() {
    return await axios.get(api+"producto/leertodo");
}
export async function getProductCant() {
    return await axios.get(api + "producto/cant");
}
export async function postProductoBuscar(filtros) {
    return await axios.post(api + "producto/buscar", filtros);
}
export async function getProductUno(id) {
    return await axios.get(api + "producto/leeruno/" + id);
}
export async function postProductModificar(id, datos) {
    return await axios.post(api + "producto/modificar/" + id, datos);
}
export async function postProductEliminar(id) {
    return await axios.post(api + "producto/eliminar", {id});
}