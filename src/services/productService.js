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