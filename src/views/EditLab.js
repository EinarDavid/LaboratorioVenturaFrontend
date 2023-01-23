import React, { useEffect, useState } from 'react'

import { useNavigate, useParams } from 'react-router-dom'
import { ButtonPrimary } from '../components/Button/ButtonPrimary';
import { TextInputDinamic } from '../components/Input/TextInputDinamic';
import Images from '../config/Images';
import { getLaboratorioUno, postModificarLaboratorio } from '../services/laboratorioService';

import { valRef } from '../services/valRef';
import { calcularEdad } from '../services/calcEdad';
import { sumaLeucocitaria } from '../services/estadoLabo';
import { State } from '../components/Label/State';



export const EditLab = () => {

    const navigate = useNavigate();
    const [disableButton, setDisableButton] = useState(false);
    const [laboratorio, setLaboratorio] = useState({})
    const [examen, setExamen] = useState({})
    const [cabecera, setCabecera] = useState({})
    const [val, setVal] = useState({})
    const [suma, setSuma] = useState(0)

    let { labo, exa } = useParams();
    // 63c4355ee66964fd6f18ca65
    // 63c4355ee66964fd6f18ca66

    useEffect(() => {
        getLaboratorioUno(labo).then(({ data }) => {
            setLaboratorio(data)
            setExamen(data.ExamenesRealizados.find(ex => ex._id === exa))
            //console.log("--------------------------------------")
            let examenAux = data.ExamenesRealizados.find(ab => ab._id === exa)
            let rest = examenAux.Resultados.map(res => {
                return { [res.Id_Campo]: res.Valor }
            })
            let aux = {}
            rest.map(r => {
                aux = { ...aux, ...r }
            })
            setCabecera(aux)
            //console.log("examen:",examen)
        })
    }, [])

    const handleChangeMateria = (event) => {
        setCabecera({ ...cabecera, [event.target.name]: event.target.value });
        // console.log(cabecera)
    }

    const handleChangeCabecera = (event) => {
        setCabecera({ ...cabecera, [event.target.name]: event.target.value })
        let x = event.target.attributes.getNamedItem('Placeholder').value.split(": ")[1];
        setVal({ ...val, [event.target.name]: valRef(x, event.target.value) })
        // console.log(valRef(x, event.target.value), x, event.target.value)

    }
    useEffect(() => {
        //console.log("cabecera:", cabecera)
        setSuma(sumaLeucocitaria(cabecera, examen))
        //console.log("suma:", suma)
    }, [cabecera])

    useEffect(() => {
        setDisableButton(!(suma === 100 || suma === 0))
    }, [suma])

    const onSubmit = () => {
        //console.log('------', cabecera)
        try {
            setDisableButton(true)
            postModificarLaboratorio(labo, exa, cabecera).then(({ data }) => {
                //console.log(data);
                //limpiar cajas, cerrar modal y avisar que fue añadido con exito
                alert(data.mensaje);
                navigate('/searchLab');
                setDisableButton(false);
            })
        } catch (error) {
            console.log('----', error)
        }
    };

    return (
        <>

            <div className="App">
                <div className='mainNav'>

                </div>
                <div className='containerPadre'>
                    <div className='containerHijo'>
                        <div className='navTitleContainer'>

                            <button className="button_close"
                                onClick={() => navigate('/searchLab')}>
                                {
                                    <img src={Images.ARROWLEFT} width={30} alt='icon' ></img>
                                }
                            </button>
                            <div className='spaceRow10' />
                            <h1 className='titleStyle'>Resultado de Laboratorio</h1>
                        </div>


                        <div className='spaceVer15' />
                        <div className='containerPacDoc'>
                            <div className='selectPac'>


                                <section className='information'>
                                    {
                                        (laboratorio.Paciente) ?
                                            <>
                                                <p className='labelInput'>Código: {laboratorio.Paciente.CodigoPaciente}</p>
                                                <p className='labelInput'>CI: {laboratorio.Paciente.CI}</p>
                                                <p className='labelInput'>Paciente: {laboratorio.Paciente.NombreCompleto}</p>
                                                <p className='labelInput'>Fecha de Nac: {laboratorio.Paciente.Fecha_de_Nacimiento}</p>
                                                <p className='labelInput'>Edad: {calcularEdad(laboratorio.Paciente.Fecha_de_Nacimiento)}</p>
                                                <p className='labelInput'>Fecha de solicitud: {laboratorio.Fecha}</p>

                                            </> :
                                            <>
                                                <p className='labelInput'>CI:</p>
                                                <p className='labelInput'>Paciente: </p>
                                                <p className='labelInput'>Fecha de Nac:</p>
                                            </>
                                    }

                                </section>

                            </div>

                        </div>
                        <div className='spaceVer15' />




                        <div className='popup_button_container'>
                            <h1 className='titleStyleH2'>Examen</h1>


                            <State State={examen.Estado} />
                        </div>
                        {
                            (examen.Examen) ?
                                <>
                                    <p className='labelInput'>Nombre del examen: {examen.Examen.Nombre}</p>
                                    <p className='labelInput'>Categoria: {examen.Examen.Categoria}</p>
                                </> : <>
                                </>
                        }
                        {
                            (examen.Estado === 'Pendiente') ? (
                                <>
                                    <div className='spaceVer20' />
                                    <TextInputDinamic
                                        Name={'Materia'}
                                        LabelInput={'Materia'}
                                        Placeholder={'Ej: Sangre'}
                                        OnChange={(e) => handleChangeMateria(e)}

                                    />
                                </>
                            ) : (<>

                                <p className='labelInput'>Materia: {examen.Materia}</p>
                            </>)
                        }
                        <div className='spaceVer20' />

                        <div className='row-Dinamic'>
                            {
                                (examen.Examen) ? examen.Examen.Campos.map((campo, i) =>

                                    <div key={i} className='containerInputDinamic'>
                                        <TextInputDinamic
                                            Name={campo._id}
                                            State={val[campo._id]}
                                            LabelInput={campo.Nombre + ' "' + campo.SubCategoria + '"'}
                                            Placeholder={'Valor de referencia: ' + campo.ValorReferencia}
                                            OnChange={(e) => handleChangeCabecera(e)}
                                            Value={laboratorio.ExamenesRealizados.find(ab => ab._id === examen._id).Resultados.find(ba => ba.Id_Campo === campo._id)?.Valor}
                                        />
                                        <p className='parrafoStyle'>{campo.ValorReferencia + ' ' + campo.Concentracion}</p>
                                    </div>



                                ) : <></>
                            }

                        </div>
                        {
                            (suma !== 0) ?
                                (suma !== 100) ?
                                    <p style={{ color: 'red' }} > Sumatoria de Formula Leucocitaria: {suma}</p>
                                    :
                                    <p > Sumatoria de Formula Leucocitaria: {suma}</p>
                                : <></>
                        }

                        <div className='spaceVer30' />

                        <div className='container-Button-Modal'>
                            <ButtonPrimary Nombre={'GUARDAR'} Disabled={disableButton} OnClick={onSubmit} />
                            {/* {
                                (examen.Estado === 'Realizado') ? (
                                    <ButtonPrimary Nombre={'REGISTRAR'} Disabled={true} />

                                ) : (
                                    <ButtonPrimary Nombre={'REGISTRAR'} Disabled={false} OnClick={onSubmit} />)
                            } */}
                        </div>



                    </div>
                </div>
            </div>
        </>

    )
}
