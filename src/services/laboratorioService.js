import axios from "axios";
const api = process.env.REACT_APP_API;

export async function postAgregarExamen(examen) {
    console.log(api + "examen/agregar")
    return await axios.post(api + "examen/agregar", examen);
}
export async function getExamenTodos() {
    return await axios.get(api + "examen/leertodo");
}