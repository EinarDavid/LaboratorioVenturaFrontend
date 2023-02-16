import React, { useEffect, useRef, useState } from 'react'

import Images from '../../config/Images';
import { postAgregarExamen } from '../../services/examenService';
import { RegistroExamen } from '../Forms/RegistroExamen';
import { RegistroExamen2 } from '../Forms/RegistroExamen2';

let campoID = 0
let refID = 0
export const ModalRegTest = ({ SetModal, modal, callback }) => {
    
    const [disableButton, setDisableButton] = useState(false);

    const [detalle, setDataDetalle] = useState([
        {
            id: -1,
            Nombre: '', SubCategoria: '', ValorReferencia: [{
                id: -1,
                EdadMinima: '',
                EdadMaxima: '',
                Concentracion: '',
                ValoresReferenciaHombre: '',
                ValoresReferenciaMujer: '',
            }]
        },
    ]);
   

    const [cabecera, setCabecera] = useState({});

    useEffect(() => {
        console.log("detalle:", detalle, "cabecera", cabecera)
    }, [detalle, cabecera])

    const onSubmit = () => {
        try {
            setDisableButton(true)
            let data = cabecera;
            data.Campos = detalle;
            console.log(data);
            postAgregarExamen(data).then(({ data }) => {
                console.log(data);
                setDisableButton(false);
                SetModal(false);
                if (callback) callback()
                setDataDetalle([
                    {
                        id: -1,
                        Nombre: '',
                        SubCategoria: '',
                        ValorReferencia: [{
                            id: -1,
                            EdadMinima: '',
                            EdadMaxima: '',
                            Concentracion: '',
                            ValoresReferenciaHombre: '',
                            ValoresReferenciaMujer: '',
                        }]
                    },
                ])
                //limpiar cajas, cerrar modal y avisar que fue añadido con exito

                alert(data.mensaje);
            })

        } catch (error) {
            console.log('----', error)
        }
    };


    const handleChangeCabecera = (event) => {
        setCabecera({ ...cabecera, [event.target.name]: event.target.value })
    }

    const addInputs = (e) => {
        //e.preventDefault();
        campoID = campoID + 1;

        setDataDetalle([...detalle, {
            id: campoID,
            Nombre: '', SubCategoria: '',
            ValorReferencia: [{
                EdadMinima: '',
                EdadMaxima: '',
                Concentracion: '',
                ValoresReferenciaHombre: '',
                ValoresReferenciaMujer: '',
            }]
        }]);
    }
    const addInputsRef = (i) => {
        //e.preventDefault();
        refID++;
        let ndetalle = [...detalle]
        console.log(detalle, i)
        ndetalle[i].ValorReferencia.push({
            id: refID,
            EdadMinima: '',
            EdadMaxima: '',
            Concentracion: '',
            ValoresReferenciaHombre: '',
            ValoresReferenciaMujer: '',
        })
        setDataDetalle(ndetalle);
    }
    const handleChangeNombre = (event, index) => {

        let campos = [...detalle]
        campos[index][event.target.name] = event.target.value;

        setDataDetalle(campos);
    }
    const handleChangeRef = (event, camp, refe) => {

        let ndetalle = [...detalle]
        ndetalle[camp].ValorReferencia[refe][event.target.name] = event.target.value;

        setDataDetalle(ndetalle);

    }
    const handleRemoveInputRol = (position) => {
        console.log(detalle, position)
        setDataDetalle([...detalle.filter((_, index) => index !== position)]);
    }
    const handleRemoveInputRolRef = (det, refe) => {
        let ndetalle = [...detalle]
        console.log(detalle, det, refe)
        ndetalle[det].ValorReferencia.splice(refe, 1)
        setDataDetalle(ndetalle);
    }

    return (modal) ? (
        <>
            <div className='popup_container'>
                <div className='popup_itself'>

                    <div className='popup_button_container'>
                        <h1 className='titleStyle'>Registro de examen</h1>
                        <button className="button_close" onClick={() => SetModal(false)}>{
                            <img src={Images.CLOSE} width={30} alt='icon' ></img>
                        } </button>
                    </div>

                    <div className='spaceVer20' />

                    <RegistroExamen2
                        
                        detalle={detalle}
                        handleChangeCabecera={handleChangeCabecera}
                        handleRemoveInputRol={handleRemoveInputRol}
                        handleChangeNombre={handleChangeNombre}
                        handleChangeRef={handleChangeRef}
                        handleRemoveInputRolRef={handleRemoveInputRolRef}
                        addInputsRef={addInputsRef}
                        addInputs={addInputs}
                        disableButton={disableButton}
                        onSubmit={onSubmit}
                    />


                </div>
            </div>
        </>
    ) : ""
}
