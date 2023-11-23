

export function convertDate(fecha) {
const fechaDesdeBaseDeDatos = fecha;
const fechaObjeto = new Date(fechaDesdeBaseDeDatos);

const opcionesFormato = {
  hour: "numeric",
  minute: "numeric",
  day: "numeric",
  month: "numeric",
  year: "numeric",
  //timeZoneName: "short"
};

const fechaFormateada = fechaObjeto.toLocaleString(undefined, opcionesFormato);

console.log(fechaFormateada);
return fechaFormateada;
}