import React, { useEffect, useState } from 'react'

import { useNavigate, useParams } from 'react-router-dom'
import { ButtonPrimary } from '../components/Button/ButtonPrimary';
import { StateButton } from '../components/Button/StateButton';

import { TextInputDinamic } from '../components/Input/TextInputDinamic';
import Images from '../config/Images';
import { getLaboratorioUno, postModificarLaboratorio } from '../services/laboratorioService';

import { valRef } from '../services/valRef';
import { calcularEdad } from '../services/calcEdad';



export const EditLab = () => {

    const navigate = useNavigate();
    const [disableButton, setDisableButton] = useState(false);
    const [laboratorio, setLaboratorio] = useState({})
    const [examen, setExamen] = useState({})
    const [cabecera, setCabecera] = useState({})
    const [val, setVal] = useState({})

    let { labo, exa } = useParams();
    // 63c4355ee66964fd6f18ca65
    // 63c4355ee66964fd6f18ca66

    useEffect(() => {
        getLaboratorioUno(labo).then(({ data }) => {
            setLaboratorio(data)
            setExamen(data.ExamenesRealizados.find(ex => ex._id === exa))
            //console.log("examen:",examen)
        })
    }, [])


    const handleChangeCabecera = (event) => {
        setCabecera({ ...cabecera, [event.target.name]: event.target.value })
        let x = event.target.attributes.getNamedItem('Placeholder').value.split(": ")[1];
        setVal({ ...val, [event.target.name]: valRef(x, event.target.value) })
        console.log(valRef(x, event.target.value), x, event.target.value)
    }

    const onSubmit = () => {

        //console.log('------', cabecera)

        try {
            setDisableButton(true)
            postModificarLaboratorio(labo, exa, cabecera).then(({ data }) => {
                console.log(data);
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
                        <div className='popup_button_container'>
                            <h1 className='titleStyle'>Resultado de Laboratorio</h1>
                            <button className="button_close"
                                onClick={() => navigate('/searchLab')}
                            >{
                                    <img src={Images.CLOSE} width={30} alt='icon' ></img>
                                } </button>
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

                            <StateButton
                                State={examen.Estado}
                            />
                        </div>
                        {
                            (examen.Examen) ?
                                <>
                                    <p className='labelInput'>Nombre del examen: {examen.Examen.Nombre}</p>
                                    <p className='labelInput'>Categoria: {examen.Examen.Categoria}</p>
                                </> : <>
                                </>
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
