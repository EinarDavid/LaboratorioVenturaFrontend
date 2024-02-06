import axios from "axios";
const api = process.env.REACT_APP_API;

export async function postSucursalAgregar(data) {
    return await axios.post(api+"sucursal/agregar",data);
}
export async function getSucursalTodos() {
    return await axios.get(api+"sucursal/leertodo");
}
export async function getSucursalCant() {
    return await axios.get(api + "sucursal/cant");
}
export async function postSucursalBuscar(filtros) {
    return await axios.post(api + "sucursal/buscar", filtros);
}
export async function getSucursalUno(id) {
    return await axios.get(api + "sucursal/leeruno/" + id);
}
export async function postSucursalModificar(id, datos) {
    return await axios.post(api + "sucursal/modificar/" + id, datos);
}
export async function postSucursalEliminar(id) {
    return await axios.post(api + "sucursal/eliminar", {id});
}







