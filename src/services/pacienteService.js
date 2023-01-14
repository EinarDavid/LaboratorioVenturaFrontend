import axios from "axios";
const api = process.env.REACT_APP_API;

export async function postAgregarPaciente(paciente) {
    console.log(api + "paciente/agregar")
    return await axios.post(api+"paciente/agregar",paciente);
}
export async function getUsuarioTodos() {
    return await axios.get(api+"paciente/leertodo");
}