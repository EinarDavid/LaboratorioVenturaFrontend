import axios from "axios";
const api = process.env.REACT_APP_API;

export async function postAgregarStock(data) {
    return await axios.post(api+"inventario/agregar",data);
}
export async function getStockTodos() {
    return await axios.get(api+"inventario/leertodo");
}
export async function getStockCant() {
    return await axios.get(api + "inventario/cant");
}
export async function postStockBuscar(filtros) {
    return await axios.post(api + "inventario/buscar", filtros);
}
export async function getStockUno(id) {
    return await axios.get(api + "inventario/leeruno/" + id);
}
export async function postStockModificar(id, datos) {
    return await axios.post(api + "inventario/modificar/" + id, datos);
}
export async function postStockEliminar(id) {
    return await axios.post(api + "inventario/eliminar", {id});
}