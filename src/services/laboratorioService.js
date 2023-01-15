import axios from "axios";
const api = process.env.REACT_APP_API;

export async function postAgregarLaboratorio(laboratorio) {
    console.log(api + "laboratorio/agregar")
    return await axios.post(api + "laboratorio/agregar", laboratorio);
}
export async function getLaboratorioTodos() {
    return await axios.get(api + "laboratorio/leertodo");
}
export async function getLaboratorioUno(id) {
    return await axios.get(api + "laboratorio/leeruno/"+id);
}