import axios from "axios";
const api = process.env.REACT_APP_API;

export async function postAgregarVenta(data) {
    return await axios.post(api + "venta/agregar", data);
}

export async function getVentaTodos() {
    return await axios.get(api+"venta/leertodo");
}



export async function getVentaCant() {
    return await axios.get(api + "venta/cant");
}

export async function postVentaBuscar(filtros) {
    return await axios.post(api + "venta/buscar", filtros);
}
export async function getVentaUno(id) {
    return await axios.get(api + "venta/leeruno/" + id);
}
/*export async function postVentaModificar(id, datos) {
    return await axios.post(api + "venta/modificar/" + id, datos);
}*/
export async function postVentaEliminar(id) {
    return await axios.post(api + "venta/eliminar", {id});
}