import axios from "axios";
const api = process.env.REACT_APP_API;

export async function Logout() {
    return await axios.post(api + "logout");
}