import axios from "axios";
const api = process.env.REACT_APP_API;

export async function postAgregarLaboratorio(laboratorio) {
    return await axios.post(api + "laboratorio/agregar", laboratorio);
}
export async function postModificarLaboratorio(labo, exa, laboratorio) {
    return await axios.post(api + "laboratorio/modificar/"+labo+"/"+exa, laboratorio);
}
export async function getLaboratorioTodos() {
    return await axios.get(api + "laboratorio/leertodo");
}
export async function postLaboratorioBuscar(filtros) {
    return await axios.post(api + "laboratorio/buscar", filtros);
}
export async function getLaboratorioUno(id) {
    return await axios.get(api + "laboratorio/leeruno/"+id);
}
export async function getLaboratorioImprimir(id) {
    window.open(api + "laboratorio/reporte/" + id, '_blank').focus();
    return "Reporte enviado"
    // return await axios.get(api + "laboratorio/reporte/"+id);
}