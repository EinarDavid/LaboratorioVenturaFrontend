import axios from "axios";

export async function postAgregarUsuario(usuario) {
    return await axios.post("http://localhost:8080/usuario/agregar",usuario);
}
/* export async function getPageProducts(ind) {
    return await axios.get("http://localhost:8080/product/" + ind);
} */