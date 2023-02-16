import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ButtonDelete } from '../components/Button/ButtonDelete';
import { postAgregarExamen, getExamenUno, postExamenModificar } from '../services/examenService';

import Images from '../config/Images';
import { RegistroExamen2 } from '../components/Forms/RegistroExamen2';



let campoID = 0
let refID = 0
export const ViewExa = ({ callback }) => {
    const navigate = useNavigate();
    let { idExamen } = useParams();

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
    const [examen, setExamen] = useState({});

    useEffect(() => {
        if (idExamen)
            getExamenUno(idExamen).then(({ data }) => {
                setDataDetalle(data.Campos)
                setCabecera({
                    Nombre: data.Nombre,
                    Categoria: data.Categoria,
                    Metodo: data.Metodo,
                    Recipiente: data.Recipiente,
                    Muestra: data.Muestra,
                    Gastos: data.Gastos,
                    Precio: data.Precio,
                    InformacionClinica: data.InformacionClinica
                })
            })
    }, [])
    useEffect(() => {
        // console.log("detalle:", detalle)
    }, [detalle])

    const onSubmit = () => {
        try {
            setDisableButton(true)
            let data = cabecera;
            data.Campos = detalle;
            console.log("Datos Formulario: ", data);
            postExamenModificar(idExamen, data).then(({ data }) => {
                console.log(data);
                setDisableButton(false);
                if (callback) callback()
                //limpiar cajas, cerrar modal y avisar que fue añadido con exito
                alert(data.mensaje);
                navigate('/gesionTest');
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

    return (
        <>
            <div className="App">
                <div className='mainNav'>

                </div>
                <div className='containerPadre'>
                    <div className='containerHijo'>
                        <div className='containerHeaderButtons'>
                            <div className='navTitleContainer'>
                                <button className="button_close"
                                    onClick={() => navigate('/gesionTest')}>
                                    {
                                        <img src={Images.ARROWLEFT} width={30} alt='icon' ></img>
                                    }
                                </button>
                                <div className='spaceRow10' />
                                <h1 className='titleStyle'>Información del Examen</h1>
                            </div>
                            <div className='containerButtonRight'>
                                <ButtonDelete Nombre={'ELIMINAR'}
                                //Disabled={disableButtonDelete} 
                                //OnClick={_handleDelete} 
                                />
                            </div>

                        </div>
                        <div className='spaceVer20' />


                        <RegistroExamen2
                            cabecera={cabecera}
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
            </div>
        </>
    )
}
