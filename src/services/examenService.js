import axios from "axios";
const api = process.env.REACT_APP_API;

export async function postAgregarExamen(examen) {
    console.log(api + "examen/agregar")
    return await axios.post(api+"examen/agregar",examen);
}
export async function getExamenTodos() {
    return await axios.get(api+"examen/leertodo");
}
export async function getExamenUno(id) {
    return await axios.get(api + "examen/leeruno/" + id);
}
export async function getExamenCant() {
    return await axios.get(api + "examen/cant");
}
export async function postExamenModificar(id, datos) {
    return await axios.post(api + "examen/modificar/" + id, datos);
}