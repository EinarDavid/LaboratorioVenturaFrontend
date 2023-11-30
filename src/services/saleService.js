import axios from "axios";
const api = process.env.REACT_APP_API;

export async function postAgregarVenta(data) {
    return await axios.post(api + "venta/agregar", data);
}