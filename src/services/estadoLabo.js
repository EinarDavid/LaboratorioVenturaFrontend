export function laboratorioCompletado(labo) {
    let inc = false;
    labo.ExamenesRealizados.map(exa=>{
        if(exa.Estado!="Realizado") inc = true;
    })
    return !inc;
}
export function sumaLeucocitaria(cabecera, exa)
{
    let suma = 0
    exa = exa.Examen;
    console.log("examen:",exa)
    if(exa)
    {
        exa.Campos.map(camp=>{
            let id = "";
            if(camp.SubCategoria=="FORMULA LEUCOCITARIA")
            {
                id = camp._id
                if(cabecera[id]!=undefined && cabecera[id]!="")
                    suma += parseFloat(cabecera[id])
            }
        })
        return suma;
    }
}