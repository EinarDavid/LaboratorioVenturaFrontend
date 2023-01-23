import axios from "axios";
const api = process.env.REACT_APP_API;

export async function postAgregarPaciente(paciente) {
    console.log(api + "paciente/agregar")
    return await axios.post(api+"paciente/agregar",paciente);
}
export async function getUsuarioTodos() {
    return await axios.get(api+"paciente/leertodo");
}
export async function getPacientesNombres() {
    return await axios.get(api+"paciente/leerNombres");
}
export async function postPacienteBuscar(filtros) {
    return await axios.post(api + "paciente/buscar", filtros);
}
export async function postPacienteEliminar(id) {
    return await axios.post(api + "paciente/eliminar", {id});
}
export async function postPacienteModificar(id, datos) {
    return await axios.post(api + "paciente/modificar/" + id, datos);
}
export async function getPacienteUno(id) {
    return await axios.get(api + "paciente/leeruno/" + id);
}