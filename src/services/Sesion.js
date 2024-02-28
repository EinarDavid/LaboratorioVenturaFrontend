import axios from "axios";

import { createBrowserHistory } from "history";
// Configuración global de Axios

export function Sesion(Inicio) {
  // Elimina todos los interceptores de respuesta
  axios.interceptors.response.forEach((interceptor) => {
    axios.interceptors.response.eject(interceptor);
  });

  axios.interceptors.response.use(
    (response) => {
      // Si la respuesta es exitosa, simplemente la devolvemos
      return response;
    },
    (error) => {
      // Si hay un error en la respuesta
      if (error.response && error.response.status === 401) {
        // Aquí puedes realizar alguna acción, como redirigir a la página de inicio de sesión
        /*alert(
          "Sesión no autorizada. Redirigiendo a la página de inicio de sesión."
        );*/
        Inicio();
        console.error(
          "Sesión no autorizada. Redirigiendo a la página de inicio de sesión."
        );

        //const history = createBrowserHistory();
        //history.push("/login"); // Reemplaza '/inicio' con la URL a la que quieres redirigir
      }

      // Devolvemos el error para que pueda ser manejado por otros manejadores de errores
      return Promise.reject(error);
    }
  );
}
