import axios from "axios";
const api = process.env.REACT_APP_API;

export async function postProveedorAgregar(data) {
    return await axios.post(api+"proveedor/agregar",data);
}
export async function getProveedorTodos() {
    return await axios.get(api+"proveedor/leertodo");
}
export async function getProveedorCant() {
    return await axios.get(api + "proveedor/cant");
}
export async function postProveedorBuscar(filtros) {
    return await axios.post(api + "proveedor/buscar", filtros);
}
export async function getProveedorUno(id) {
    return await axios.get(api + "proveedor/leeruno/" + id);
}
export async function postProveedorModificar(id, datos) {
    return await axios.post(api + "proveedor/modificar/" + id, datos);
}
export async function postProveedorEliminar(id) {
    return await axios.post(api + "proveedor/eliminar", {id});
}